import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  SearchSubscriptionsQuery,
  searchSubscriptionsQuerySchema,
} from './searchSubscriptionsQuery';

/**
 * Defines parameters in a
 * [SearchSubscriptions](#endpoint-subscriptions-searchsubscriptions) endpoint
 * request.
 */
export interface SearchSubscriptionsRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /**
   * The upper limit on the number of subscriptions to return
   * in the response.
   * Default: `200`
   */
  limit?: number;
  /** Represents a query (including filtering criteria) used to search for subscriptions. */
  query?: SearchSubscriptionsQuery;
}

export const searchSubscriptionsRequestSchema: Schema<SearchSubscriptionsRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
    query: ['query', optional(lazy(() => searchSubscriptionsQuerySchema))],
  }
);
