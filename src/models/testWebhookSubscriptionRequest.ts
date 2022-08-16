import { object, optional, Schema, string } from '../schema';

/** Tests a [Subscription]($m/WebhookSubscription) by sending a test event to its notification URL. */
export interface TestWebhookSubscriptionRequest {
  /**
   * The event type that will be used to test the [Subscription]($m/WebhookSubscription). The event type must be
   * contained in the list of event types in the [Subscription]($m/WebhookSubscription).
   */
  eventType?: string;
}

export const testWebhookSubscriptionRequestSchema: Schema<TestWebhookSubscriptionRequest> = object(
  { eventType: ['event_type', optional(string())] }
);
