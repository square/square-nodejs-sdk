import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines parameters in a
 * [ResumeSubscription]($e/Subscriptions/ResumeSubscription) endpoint
 * response.
 */
export interface ResumeSubscriptionResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a customer subscription to a subscription plan.
   * For an overview of the `Subscription` type, see
   * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
   */
  subscription?: Subscription;
}

export const resumeSubscriptionResponseSchema: Schema<ResumeSubscriptionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
  }
);
