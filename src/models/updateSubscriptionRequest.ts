import { lazy, object, optional, Schema } from '../schema';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines input parameters in a request to the
 * [UpdateSubscription]($e/Subscriptions/UpdateSubscription) endpoint.
 */
export interface UpdateSubscriptionRequest {
  /**
   * Represents a subscription purchased by a customer.
   * For more information, see
   * [Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
}

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> = object(
  { subscription: ['subscription', optional(lazy(() => subscriptionSchema))] }
);
