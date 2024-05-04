
export enum WebhookType {
}

export class Webhook {
  private readonly event_type: string;
  private readonly metadata: any;
  private readonly timestamp: Date;
  private readonly message: string;
  constructor(
    event_type: string,
    metadata: any,
    timestamp: Date,
    message: string
  ) {
    this.event_type = event_type;
    this.metadata = metadata;
    this.timestamp = timestamp;
    this.message = message;
  }
}
