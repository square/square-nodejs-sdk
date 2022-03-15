import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomerGroup, customerGroupSchema } from './customerGroup';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [ListCustomerGroups]($e/CustomerGroups/ListCustomerGroups) endpoint.
 * Either `errors` or `groups` is present in a given response (never both).
 */
export interface ListCustomerGroupsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** A list of customer groups belonging to the current seller. */
  groups?: CustomerGroup[];
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint. This value is present only if the request
   * succeeded and additional results are available.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listCustomerGroupsResponseSchema: Schema<ListCustomerGroupsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    groups: ['groups', optional(array(lazy(() => customerGroupSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
