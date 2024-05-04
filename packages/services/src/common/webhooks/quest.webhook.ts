export enum QuestEventTypes {
	//quest
	QUEST_COMPLETED = "quest.complete",
	QUEST_FAILED = "quest.failed",
}

export class QuestWebhook {
	private readonly event_type: QuestEventTypes;
	private readonly timestamp: Date;
	private readonly message: string;
	private readonly questId: string;
	private readonly correlationId: string;
	private readonly metadata: unknown;
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
