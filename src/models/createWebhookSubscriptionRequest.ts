import { lazy, object, optional, Schema, string } from '../schema';
import {
  WebhookSubscription,
  webhookSubscriptionSchema,
} from './webhookSubscription';

/** Creates a [Subscription]($m/WebhookSubscription). */
export interface CreateWebhookSubscriptionRequest {
  /** A unique string that identifies the [CreateWebhookSubscription](api-endpoint:WebhookSubscriptions-CreateWebhookSubscription) request. */
  idempotencyKey?: string;
  /**
   * Represents the details of a webhook subscription, including notification URL,
   * event types, and signature key.
   */
  subscription: WebhookSubscription;
}

export const createWebhookSubscriptionRequestSchema: Schema<CreateWebhookSubscriptionRequest> = object(
  {
    idempotencyKey: ['idempotency_key', optional(string())],
    subscription: ['subscription', lazy(() => webhookSubscriptionSchema)],
  }
);
