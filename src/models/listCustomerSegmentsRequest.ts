import { nullable, number, object, optional, Schema, string } from '../schema';

/** Defines the valid parameters for requests to the `ListCustomerSegments` endpoint. */
export interface ListCustomerSegmentsRequest {
  /**
   * A pagination cursor returned by previous calls to `ListCustomerSegments`.
   * This cursor is used to retrieve the next set of query results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.
   * If the specified limit is less than 1 or greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 50.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  limit?: number | null;
}

export const listCustomerSegmentsRequestSchema: Schema<ListCustomerSegmentsRequest> = object(
  {
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
  }
);
