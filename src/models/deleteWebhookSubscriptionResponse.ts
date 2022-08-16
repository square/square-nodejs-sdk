import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [DeleteWebhookSubscription]($e/WebhookSubscriptions/DeleteWebhookSubscription) endpoint.
 */
export interface DeleteWebhookSubscriptionResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
}

export const deleteWebhookSubscriptionResponseSchema: Schema<DeleteWebhookSubscriptionResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
