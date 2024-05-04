
export enum AuthEventTypes {
    //authentication
    AUTH_COMPLETE = "auth.complete",
    AUTH_FAILED = "auth.failed",
}



export class AuthWebhook {
  private readonly event_type: AuthEventTypes;
  private readonly timestamp: Date;
  private readonly message: string;
  constructor(
    event_type: AuthEventTypes,
    timestamp: Date,
    message: string,
  ) {
    this.event_type = event_type;
    this.timestamp = timestamp;
    this.message = message;
  }
}
