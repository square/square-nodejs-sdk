import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';
import {
  SubscriptionAction,
  subscriptionActionSchema,
} from './subscriptionAction';

/**
 * Defines output parameters in a response of the
 * [SwapPlan]($e/Subscriptions/SwapPlan) endpoint.
 */
export interface SwapPlanResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription purchased by a customer.
   * For more information, see
   * [Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
  /** A list of a `SWAP_PLAN` action created by the request. */
  actions?: SubscriptionAction[];
}

export const swapPlanResponseSchema: Schema<SwapPlanResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
  actions: ['actions', optional(array(lazy(() => subscriptionActionSchema)))],
});
