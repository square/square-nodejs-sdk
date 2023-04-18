import { nullable, object, optional, Schema, string } from '../schema';

/** Updates a [Subscription]($m/WebhookSubscription) by replacing the existing signature key with a new one. */
export interface UpdateWebhookSubscriptionSignatureKeyRequest {
  /** A unique string that identifies the [UpdateWebhookSubscriptionSignatureKey](api-endpoint:WebhookSubscriptions-UpdateWebhookSubscriptionSignatureKey) request. */
  idempotencyKey?: string | null;
}

export const updateWebhookSubscriptionSignatureKeyRequestSchema: Schema<UpdateWebhookSubscriptionSignatureKeyRequest> = object(
  { idempotencyKey: ['idempotency_key', optional(nullable(string()))] }
);
