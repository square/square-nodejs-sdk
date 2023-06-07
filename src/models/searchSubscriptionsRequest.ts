import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SearchSubscriptionsQuery,
  searchSubscriptionsQuerySchema,
} from './searchSubscriptionsQuery';

/**
 * Defines input parameters in a request to the
 * [SearchSubscriptions]($e/Subscriptions/SearchSubscriptions) endpoint.
 */
export interface SearchSubscriptionsRequest {
  /**
   * When the total number of resulting subscriptions exceeds the limit of a paged response,
   * specify the cursor returned from a preceding response here to fetch the next set of results.
   * If the cursor is unset, the response contains the last page of the results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /**
   * The upper limit on the number of subscriptions to return
   * in a paged response.
   */
  limit?: number;
  /** Represents a query, consisting of specified query expressions, used to search for subscriptions. */
  query?: SearchSubscriptionsQuery;
  /**
   * An option to include related information in the response.
   * The supported values are:
   * - `actions`: to include scheduled actions on the targeted subscriptions.
   */
  include?: string[];
}

export const searchSubscriptionsRequestSchema: Schema<SearchSubscriptionsRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
    query: ['query', optional(lazy(() => searchSubscriptionsQuerySchema))],
    include: ['include', optional(array(string()))],
  }
);
