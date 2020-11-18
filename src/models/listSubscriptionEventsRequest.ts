import { number, object, optional, Schema, string } from '../schema';

/**
 * Defines parameters in a
 * [ListSubscriptionEvents](#endpoint-subscriptions-listsubscriptionevents)
 * endpoint request.
 */
export interface ListSubscriptionEventsRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /**
   * The upper limit on the number of subscription events to return
   * in the response.
   * Default: `200`
   */
  limit?: number;
}

export const listSubscriptionEventsRequestSchema: Schema<ListSubscriptionEventsRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
  }
);
