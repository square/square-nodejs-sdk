import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  SubscriptionTestResult,
  subscriptionTestResultSchema,
} from './subscriptionTestResult';

/**
 * Defines the fields that are included in the response body of
 * a request to the [TestWebhookSubscription]($e/WebhookSubscriptions/TestWebhookSubscription) endpoint.
 * Note: If there are errors processing the request, the [SubscriptionTestResult]($m/SubscriptionTestResult) field is not
 * present.
 */
export interface TestWebhookSubscriptionResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents the details of a webhook subscription, including notification URL,
   * event types, and signature key.
   */
  subscriptionTestResult?: SubscriptionTestResult;
}

export const testWebhookSubscriptionResponseSchema: Schema<TestWebhookSubscriptionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscriptionTestResult: [
      'subscription_test_result',
      optional(lazy(() => subscriptionTestResultSchema)),
    ],
  }
);
