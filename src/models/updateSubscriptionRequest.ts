import { lazy, object, optional, Schema } from '../schema';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines input parameters in a request to the
 * [UpdateSubscription]($e/Subscriptions/UpdateSubscription) endpoint.
 */
export interface UpdateSubscriptionRequest {
  /**
   * Represents a subscription to a subscription plan by a subscriber.
   * For an overview of the `Subscription` type, see
   * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
   */
  subscription?: Subscription;
}

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> = object(
  { subscription: ['subscription', optional(lazy(() => subscriptionSchema))] }
);
