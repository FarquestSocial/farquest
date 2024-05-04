import sharp from "sharp";
import * as fs from "node:fs";
import { imgDiff } from "img-diff-js";
import { tmpdir } from "node:os";
import { join } from "node:path";

//class to compare images and provide a similarity score
export class ImageService {
  async doesImageMatch(
    url1: string,
    url2: string,
    threshold = 0.9
  ): Promise<boolean> {
    const similarity = await this.compareImages(url1, url2);
    return similarity >= threshold;
  }

  async compareImages(url1: string, url2: string): Promise<number> {
    const img1Path = join(tmpdir(), "img1.png");
    const img2Path = join(tmpdir(), "img2.png");
    const diffPath = join(tmpdir(), "diff.png");

    try {
      await this.downloadAndPrepareImage(url1, img1Path);
      await this.downloadAndPrepareImage(url2, img2Path);

      const result = await imgDiff({
        actualFilename: img1Path,
        expectedFilename: img2Path,
        diffFilename: diffPath,
      });

      // Cleanup the temporary files
      fs.unlinkSync(img1Path);
      fs.unlinkSync(img2Path);
      fs.unlinkSync(diffPath);

      // Return the number of differing pixels as an inverted score for simplicity
      return 1 - result.diffCount / (result.width * result.height);
    } catch (error) {
      console.error("Failed to compare images:", error);
      throw error;
    }
  }

  private async downloadAndPrepareImage(
    url: string,
    outputPath: string
  ): Promise<void> {
    let response: Response;
    try {
      response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error fetching image from ${url}: ${error}`);
      throw new Error(
        `Failed to fetch image: ${error instanceof Error ? error.message : error}`
      );
    }

    const buffer = await response.arrayBuffer();
    const imageBuffer = Buffer.from(buffer);
    await sharp(imageBuffer)
      .resize(256, 256) // Normalize image size
      .toFormat("png")
      .toFile(outputPath);
  }
}
