import { test, expect, mock } from "bun:test";
import { WebhookService } from "./webhook.service";
import { AuthWebhook, AuthEventTypes } from "../common/webhooks/auth.webhook";
import {
  QuestWebhook,
  QuestEventTypes,
} from "../common/webhooks/quest.webhook";

const fetchMock = mock(async (url: string, options: RequestInit) => {
  if (url.includes("error")) {
    return { ok: false, status: 500 };
  }
  return { ok: true, status: 200 };
});

//@ts-ignore
globalThis.fetch = fetchMock;

test("WebhookService: send Webhook Successfully", async () => {
  const webhookService = new WebhookService();
  const url = "https://example.com/webhook";
  const authPayload = new AuthWebhook(
    AuthEventTypes.AUTH_COMPLETE,
    new Date(),
    "Authentication successful"
  );

  await webhookService.sendWebhook(url, authPayload);

  const requestBody = JSON.parse(fetchMock.mock.calls[0][1].body as string);
  expect(requestBody.event_type).toBe(authPayload.event_type);
  expect(requestBody.message).toBe(authPayload.message);
  expect(new Date(requestBody.timestamp)).toEqual(authPayload.timestamp); // Compare date objects
});

test("WebhookService: retry on Webhook Failure", async () => {
  const webhookService = new WebhookService();
  const url = "https://example.com/error"; // URL intentionally causing an error
  const questPayload = new QuestWebhook(
    QuestEventTypes.QUEST_FAILED,
    new Date(),
    "Quest failed",
    "Quest123",
    "Corr123",
    {}
  );

  try {
    await webhookService.sendWebhook(url, questPayload);
  } catch (e) {
    // Expected to throw after retries
  }

  // Including the initial attempt + retries (total should be 1 + 3 retries = 4)
  expect(fetchMock).toHaveBeenCalledTimes(7);
});

test("WebhookService: handle Maximum Retry Failures", async () => {
  const webhookService = new WebhookService();
  const url = "https://example.com/error"; // URL intentionally causing an error
  const questPayload = new QuestWebhook(
    QuestEventTypes.QUEST_FAILED,
    new Date(),
    "Quest failed",
    "Quest123",
    "Corr123",
    {}
  );

  await expect(webhookService.sendWebhook(url, questPayload)).rejects.toThrow(
    "Failed to send webhook after multiple attempts"
  );

  // Ensure the number of attempts is as expected (initial + 3 retries)
  expect(fetchMock).toHaveBeenCalledTimes(4);
});
