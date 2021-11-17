import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';
import {
  SubscriptionAction,
  subscriptionActionSchema,
} from './subscriptionAction';

/**
 * Defines output parameters in a response from the
 * [CancelSubscription]($e/Subscriptions/CancelSubscription) endpoint.
 */
export interface CancelSubscriptionResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription to a subscription plan by a subscriber.
   * For an overview of the `Subscription` type, see
   * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
   */
  subscription?: Subscription;
  /** A list of a single `CANCEL` action scheduled for the subscription. */
  actions?: SubscriptionAction[];
}

export const cancelSubscriptionResponseSchema: Schema<CancelSubscriptionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
    actions: ['actions', optional(array(lazy(() => subscriptionActionSchema)))],
  }
);
