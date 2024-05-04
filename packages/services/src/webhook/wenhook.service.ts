export class WebhookService {
  constructor() {}

  // Method to send webhook
  async sendWebhook(url: string, payload: any): Promise<void> {
    const maxAttempts = 5;
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
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("Webhook sent successfully");
        return;
      } catch (error) {
        console.error(
          `Attempt ${attempt + 1}: Failed to send webhook - ${error}`
        );
        attempt++;
        if (attempt < maxAttempts) {
          await this.delay(delay);
          delay *= 2; // Exponential backoff
        }
      }
    }
    console.error("All attempts to send the webhook failed");
  }

  // Helper method for delay
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
