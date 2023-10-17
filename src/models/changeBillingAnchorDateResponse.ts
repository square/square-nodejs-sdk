import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';
import {
  SubscriptionAction,
  subscriptionActionSchema,
} from './subscriptionAction';

/**
 * Defines output parameters in a request to the
 * [ChangeBillingAnchorDate]($e/Subscriptions/ChangeBillingAnchorDate) endpoint.
 */
export interface ChangeBillingAnchorDateResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription purchased by a customer.
   * For more information, see
   * [Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
  /** A list of a single billing anchor date change for the subscription. */
  actions?: SubscriptionAction[];
}

export const changeBillingAnchorDateResponseSchema: Schema<ChangeBillingAnchorDateResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
    actions: ['actions', optional(array(lazy(() => subscriptionActionSchema)))],
  }
);
