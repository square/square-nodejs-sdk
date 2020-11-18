import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines fields that are included in a
 * [CancelSubscription](#endpoint-subscriptions-cancelsubscription) response.
 */
export interface CancelSubscriptionResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a customer subscription to a subscription plan.
   * For an overview of the `Subscription` type, see
   * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
   */
  subscription?: Subscription;
}

export const cancelSubscriptionResponseSchema: Schema<CancelSubscriptionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
  }
);
