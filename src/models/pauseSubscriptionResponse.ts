import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';
import {
  SubscriptionAction,
  subscriptionActionSchema,
} from './subscriptionAction';

/**
 * Defines output parameters in a response from the
 * [PauseSubscription]($e/Subscriptions/PauseSubscription) endpoint.
 */
export interface PauseSubscriptionResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription to a subscription plan by a subscriber.
   * For an overview of the `Subscription` type, see
   * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
   */
  subscription?: Subscription;
  /** The list of a `PAUSE` action and a possible `RESUME` action created by the request. */
  actions?: SubscriptionAction[];
}

export const pauseSubscriptionResponseSchema: Schema<PauseSubscriptionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
    actions: ['actions', optional(array(lazy(() => subscriptionActionSchema)))],
  }
);
