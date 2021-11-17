import { number, object, optional, Schema, string } from '../schema';

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
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /**
   * The upper limit on the number of subscription events to return
   * in a paged response.
   */
  limit?: number;
}

export const listSubscriptionEventsRequestSchema: Schema<ListSubscriptionEventsRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
  }
);
