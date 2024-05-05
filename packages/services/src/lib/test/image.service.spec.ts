import { describe, expect, it } from "bun:test";
import { ImageService } from "../image.service";

// Instantiate the service
const imageService = new ImageService();

describe("ImageService", () => {
	it("should return a similarity score close to 1 for very similar images", async () => {
		// URLs of two very similar images
		const url1 =
			"https://images.ctfassets.net/q5ulk4bp65r7/1bCAEs75IaQY3G88OtkU9y/c88ff7264b91574f0ad7fea9fd699ddc/image1.png";
		const url2 =
			"https://images.ctfassets.net/q5ulk4bp65r7/1bCAEs75IaQY3G88OtkU9y/c88ff7264b91574f0ad7fea9fd699ddc/image1.png";
		// Perform the comparison
		const score = await imageService.compareImages(url1, url2);
		console.log(score);

		// Assert that the images are very similar
		expect(score).toBeCloseTo(1, 1); // You can adjust the precision as needed
	});

	it("should return a lower similarity score for dissimilar images", async () => {
		// URLs of two dissimilar images
		const url1 =
			"https://images.ctfassets.net/q5ulk4bp65r7/1bCAEs75IaQY3G88OtkU9y/c88ff7264b91574f0ad7fea9fd699ddc/image1.png";
		const url2 =
			"https://blockworks-co.imgix.net/wp-content/uploads/2024/02/Farcaster-X.jpg";

		// Perform the comparison
		const score = await imageService.compareImages(url1, url2);
		console.log(score);

		// Assert that the images are not very similar
		expect(score).toBeLessThan(0.5); // Adjust threshold based on expected outcomes
	});

	it("should handle errors gracefully", async () => {
		// URLs where one or both images are not available
		const url1 = "https://example.com/nonexistent-image1.jpg";
		const url2 = "https://example.com/nonexistent-image2.jpg";

		// Expect the service to throw due to a failed fetch
		await expect(imageService.compareImages(url1, url2)).rejects.toThrow(
			"Failed to fetch image",
		);
	});
});
