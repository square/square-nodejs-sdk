import { nullable, object, optional, Schema, string } from '../schema';

/**
 * Defines input parameters in a request to the
 * [RetrieveSubscription]($e/Subscriptions/RetrieveSubscription) endpoint.
 */
export interface RetrieveSubscriptionRequest {
  /**
   * A query parameter to specify related information to be included in the response.
   * The supported query parameter values are:
   * - `actions`: to include scheduled actions on the targeted subscription.
   */
  include?: string | null;
}

export const retrieveSubscriptionRequestSchema: Schema<RetrieveSubscriptionRequest> = object(
  { include: ['include', optional(nullable(string()))] }
);
