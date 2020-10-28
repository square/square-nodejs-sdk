import { object, optional, Schema, string } from '../schema';

/**
 * Defines the query parameters that can be provided in a request to the
 * [ListCustomerGroups](#endpoint-listcustomergroups) endpoint.
 */
export interface ListCustomerGroupsRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
   */
  cursor?: string;
}

export const listCustomerGroupsRequestSchema: Schema<ListCustomerGroupsRequest> = object(
  { cursor: ['cursor', optional(string())] }
);
