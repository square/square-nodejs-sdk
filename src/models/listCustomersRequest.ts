import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * Defines the query parameters that can be included in a request to the
 * `ListCustomers` endpoint.
 */
export interface ListCustomersRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for your original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.
   * If the specified limit is less than 1 or greater than 100, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 100.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  limit?: number | null;
  /** Specifies customer attributes as the sort key to customer profiles returned from a search. */
  sortField?: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
  /**
   * Indicates whether to return the total count of customers in the `count` field of the response.
   * The default value is `false`.
   */
  count?: boolean | null;
}

export const listCustomersRequestSchema: Schema<ListCustomersRequest> = object({
  cursor: ['cursor', optional(nullable(string()))],
  limit: ['limit', optional(nullable(number()))],
  sortField: ['sort_field', optional(string())],
  sortOrder: ['sort_order', optional(string())],
  count: ['count', optional(nullable(boolean()))],
});
