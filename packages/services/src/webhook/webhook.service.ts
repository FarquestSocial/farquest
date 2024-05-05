import Logger from "../common/logger";
import type { AuthWebhook } from "../common/webhooks/auth.webhook";
import type { QuestWebhook } from "../common/webhooks/quest.webhook";

/**
 * Service class for sending webhooks.
 */
export class WebhookService {
	private readonly logger = Logger(WebhookService.name);

	/**
	 * Sends a webhook to the specified URL with the given payload.
	 * @param url - The URL to send the webhook to.
	 * @param payload - The payload to send with the webhook.
	 * @throws If the webhook fails to send after multiple attempts.
	 */
	async sendWebhook(
		url: string,
		payload: AuthWebhook | QuestWebhook,
	): Promise<void> {
		const maxAttempts = 3;
		let attempt = 0;
		let delay = 1000; // Start with 1 second delay

		while (attempt < maxAttempts) {
			try {
				const response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload),
				});

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				this.logger.info("Webhook sent successfully");
				return;
			} catch (error) {
				this.logger.error(
					`Attempt ${attempt + 1}: Failed to send webhook - ${error}`,
				);
				attempt++;
				if (attempt < maxAttempts) {
					await this.delay(delay);
					delay *= 2; // Exponential backoff
				}
			}
		}

		this.logger.error("All attempts to send the webhook failed");
		throw new Error("Failed to send webhook after multiple attempts");
	}

	/**
	 * Helper method to delay execution for the specified number of milliseconds.
	 * @param ms - The number of milliseconds to delay.
	 * @returns A promise that resolves after the specified delay.
	 */
	private delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
