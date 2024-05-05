import * as fs from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { imgDiff } from "img-diff-js";
import sharp from "sharp";
import Logger from "../common/logger";

//class to compare images and provide a similarity score
export class ImageService {
	private readonly logger = Logger(ImageService.name);

	async doesImageMatch(
		url1: string,
		url2: string,
		threshold = 0.9,
	): Promise<boolean> {
		try {
			const similarity = await this.compareImages(url1, url2);
			return similarity >= threshold;
		} catch (error) {
			this.logger.error(`Error determining if images match: ${error}`);
			throw new Error("Failed to determine image match");
		}
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

			this.logger.info(
				`Images compared successfully, similarity: ${
					1 - result.diffCount / (result.width * result.height)
				}`,
			);
			return 1 - result.diffCount / (result.width * result.height);
		} catch (error) {
			this.logger.error(`Failed to compare images: ${error}`, { url1, url2 });
			throw new Error("Failed to compare images");
		}
	}

	private async downloadAndPrepareImage(
		url: string,
		outputPath: string,
	): Promise<void> {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				this.logger.error(`Failed to fetch image from ${url}`);
				throw new Error(`Failed to fetch image: ${response.statusText}`);
			}

			const buffer = await response.arrayBuffer();
			const imageBuffer = Buffer.from(buffer);
			await sharp(imageBuffer)
				.resize(256, 256) // Normalize image size
				.toFormat("png")
				.toFile(outputPath);
			this.logger.info(`Image downloaded and prepared: ${outputPath}`);
		} catch (error) {
			this.logger.error(`Error preparing image from ${url}: ${error}`);
			throw new Error(`Failed to prepare image from URL: ${error}`);
		}
	}
}
