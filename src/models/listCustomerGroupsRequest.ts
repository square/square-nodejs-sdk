import { object, optional, Schema, string } from '../schema';

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
}

export const listCustomerGroupsRequestSchema: Schema<ListCustomerGroupsRequest> = object(
  { cursor: ['cursor', optional(string())] }
);
