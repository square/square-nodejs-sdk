import { number, object, optional, Schema, string } from '../schema';

/**
 * Defines the query parameters that can be included in a request to the
 * [ListCustomerGroups]($e/CustomerGroups/ListCustomerGroups) endpoint.
 */
export interface ListCustomerGroupsRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for your original query.
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

export const listCustomerGroupsRequestSchema: Schema<ListCustomerGroupsRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
  }
);
