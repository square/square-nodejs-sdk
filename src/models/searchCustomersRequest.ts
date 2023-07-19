import {
  bigint,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CustomerQuery, customerQuerySchema } from './customerQuery';

/**
 * Defines the fields that are included in the request body of a request to the
 * `SearchCustomers` endpoint.
 */
export interface SearchCustomersRequest {
  /**
   * Include the pagination cursor in subsequent calls to this endpoint to retrieve
   * the next set of results associated with the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /**
   * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.
   * If the specified limit is invalid, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 100.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  limit?: bigint;
  /** Represents filtering and sorting criteria for a [SearchCustomers]($e/Customers/SearchCustomers) request. */
  query?: CustomerQuery;
  /**
   * Indicates whether to return the total count of matching customers in the `count` field of the response.
   * The default value is `false`.
   */
  count?: boolean;
}

export const searchCustomersRequestSchema: Schema<SearchCustomersRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(bigint())],
    query: ['query', optional(lazy(() => customerQuerySchema))],
    count: ['count', optional(boolean())],
  }
);
