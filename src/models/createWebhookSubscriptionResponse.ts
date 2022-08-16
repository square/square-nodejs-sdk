import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  WebhookSubscription,
  webhookSubscriptionSchema,
} from './webhookSubscription';

/**
 * Defines the fields that are included in the response body of
 * a request to the [CreateWebhookSubscription]($e/WebhookSubscriptions/CreateWebhookSubscription) endpoint.
 * Note: if there are errors processing the request, the [Subscription]($m/WebhookSubscription) will not be
 * present.
 */
export interface CreateWebhookSubscriptionResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents the details of a webhook subscription, including notification URL,
   * event types, and signature key.
   */
  subscription?: WebhookSubscription;
}

export const createWebhookSubscriptionResponseSchema: Schema<CreateWebhookSubscriptionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: [
      'subscription',
      optional(lazy(() => webhookSubscriptionSchema)),
    ],
  }
);
