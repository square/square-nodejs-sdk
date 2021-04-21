import { lazy, object, optional, Schema } from '../schema';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines parameters in a
 * [UpdateSubscription]($e/Subscriptions/UpdateSubscription) endpoint
 * request.
 */
export interface UpdateSubscriptionRequest {
  /**
   * Represents a customer subscription to a subscription plan.
   * For an overview of the `Subscription` type, see
   * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
   */
  subscription?: Subscription;
}

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> = object(
  { subscription: ['subscription', optional(lazy(() => subscriptionSchema))] }
);
