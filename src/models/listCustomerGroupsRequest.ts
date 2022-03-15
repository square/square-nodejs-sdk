import { number, object, optional, Schema, string } from '../schema';

/**
 * Defines the query parameters that can be included in a request to the
 * [ListCustomerGroups]($e/CustomerGroups/ListCustomerGroups) endpoint.
 */
export interface ListCustomerGroupsRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for your original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /**
   * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.
   * If the limit is less than 1 or greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 50.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  limit?: number;
}

export const listCustomerGroupsRequestSchema: Schema<ListCustomerGroupsRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
  }
);
