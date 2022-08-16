import { lazy, object, optional, Schema } from '../schema';
import {
  WebhookSubscription,
  webhookSubscriptionSchema,
} from './webhookSubscription';

/** Updates a [Subscription]($m/WebhookSubscription). */
export interface UpdateWebhookSubscriptionRequest {
  /**
   * Represents the details of a webhook subscription, including notification URL,
   * event types, and signature key.
   */
  subscription?: WebhookSubscription;
}

export const updateWebhookSubscriptionRequestSchema: Schema<UpdateWebhookSubscriptionRequest> = object(
  {
    subscription: [
      'subscription',
      optional(lazy(() => webhookSubscriptionSchema)),
    ],
  }
);
