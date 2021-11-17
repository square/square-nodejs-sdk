import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines output parameters in a response from the
 * [RetrieveSubscription]($e/Subscriptions/RetrieveSubscription) endpoint.
 */
export interface RetrieveSubscriptionResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription to a subscription plan by a subscriber.
   * For an overview of the `Subscription` type, see
   * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
   */
  subscription?: Subscription;
}

export const retrieveSubscriptionResponseSchema: Schema<RetrieveSubscriptionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
  }
);
