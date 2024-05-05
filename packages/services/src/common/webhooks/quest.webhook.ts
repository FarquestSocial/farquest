/**
 * Enum representing the types of events related to quests.
 */
export enum QuestEventTypes {
	/**
	 * Event triggered when a quest is completed.
	 */
	QUEST_COMPLETED = "quest.complete",

	/**
	 * Event triggered when a quest fails.
	 */
	QUEST_FAILED = "quest.failed",
}

/**
 * Represents a Quest Webhook.
 */
export class QuestWebhook {
	/**
	 * The event type of the webhook.
	 */
	public event_type: QuestEventTypes;

	/**
	 * The timestamp of the webhook.
	 */
	public timestamp: Date;

	/**
	 * The message associated with the webhook.
	 */
	public message: string;

	/**
	 * The ID of the quest associated with the webhook.
	 */
	public questId: string;

	/**
	 * The correlation ID of the webhook.
	 */
	public correlationId: string;

	/**
	 * Additional metadata associated with the webhook.
	 */
	public metadata: unknown;

	/**
	 * Creates a new instance of QuestWebhook.
	 * @param event_type The event type of the webhook.
	 * @param timestamp The timestamp of the webhook.
	 * @param message The message associated with the webhook.
	 * @param questId The ID of the quest associated with the webhook.
	 * @param correlationId The correlation ID of the webhook.
	 * @param metadata Additional metadata associated with the webhook.
	 */
	constructor(
		event_type: QuestEventTypes,
		timestamp: Date,
		message: string,
		questId: string,
		correlationId: string,
		metadata: unknown,
	) {
		this.event_type = event_type;
		this.timestamp = timestamp;
		this.message = message;
		this.questId = questId;
		this.correlationId = correlationId;
		this.metadata = metadata;
	}
}
