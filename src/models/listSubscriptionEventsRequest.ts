import { nullable, number, object, optional, Schema, string } from '../schema';

/**
 * Defines input parameters in a request to the
 * [ListSubscriptionEvents]($e/Subscriptions/ListSubscriptionEvents)
 * endpoint.
 */
export interface ListSubscriptionEventsRequest {
  /**
   * When the total number of resulting subscription events exceeds the limit of a paged response,
   * specify the cursor returned from a preceding response here to fetch the next set of results.
   * If the cursor is unset, the response contains the last page of the results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * The upper limit on the number of subscription events to return
   * in a paged response.
   */
  limit?: number | null;
}

export const listSubscriptionEventsRequestSchema: Schema<ListSubscriptionEventsRequest> = object(
  {
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
  }
);
