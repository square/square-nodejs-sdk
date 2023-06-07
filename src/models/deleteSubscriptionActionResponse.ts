import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines output parameters in a response of the [DeleteSubscriptionAction]($e/Subscriptions/DeleteSubscriptionAction)
 * endpoint.
 */
export interface DeleteSubscriptionActionResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription purchased by a customer.
   * For more information, see
   * [Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
}

export const deleteSubscriptionActionResponseSchema: Schema<DeleteSubscriptionActionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
  }
);
