import { number, object, optional, Schema, string } from '../schema';

/** Defines the valid parameters for requests to the `ListCustomerSegments` endpoint. */
export interface ListCustomerSegmentsRequest {
  /**
   * A pagination cursor returned by previous calls to `ListCustomerSegments`.
   * This cursor is used to retrieve the next set of query results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /**
   * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.
   * The limit is ignored if it is less than 1 or greater than 50. The default value is 50.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  limit?: number;
}

export const listCustomerSegmentsRequestSchema: Schema<ListCustomerSegmentsRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
  }
);
