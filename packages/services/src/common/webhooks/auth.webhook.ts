export enum AuthEventTypes {
  //authentication
  AUTH_COMPLETE = "auth.complete",
  AUTH_FAILED = "auth.failed",
}

/**
 * Represents an authentication webhook event.
 */
export class AuthWebhook {
  /**
   * The type of authentication event.
   */
  public event_type: AuthEventTypes;

  /**
   * The timestamp of the event.
   */
  public timestamp: Date;

  /**
   * The message associated with the event.
   */
  public message: string;

  public correlationId: string;
  public ethAddress: string;

  /**
   * Creates a new instance of the AuthWebhook class.
   * @param event_type The type of authentication event.
   * @param timestamp The timestamp of the event.
   * @param message The message associated with the event.
   */
  constructor(
    event_type: AuthEventTypes,
    correlationId: string,
	ethAddress: string,
    timestamp: Date,
    message: string
  ) {
    this.event_type = event_type;
	this.ethAddress = ethAddress;
    this.correlationId = correlationId;
    this.timestamp = timestamp;
    this.message = message;
  }
}
