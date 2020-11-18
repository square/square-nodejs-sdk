import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines the fields that are included in the response from the
 * [UpdateSubscription](#endpoint-subscriptions-updatesubscription) endpoint.
 */
export interface UpdateSubscriptionResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a customer subscription to a subscription plan.
   * For an overview of the `Subscription` type, see
   * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
   */
  subscription?: Subscription;
}

export const updateSubscriptionResponseSchema: Schema<UpdateSubscriptionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
  }
);
