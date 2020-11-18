import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SearchOrdersQuery,
  searchOrdersQuerySchema,
} from './searchOrdersQuery';

/**
 * The request does not have any required fields. When given no query criteria,
 * SearchOrders will return all results for all of the merchant’s locations. When fetching additional
 * pages using a `cursor`, the `query` must be equal to the `query` used to fetch the first page of
 * results.
 */
export interface SearchOrdersRequest {
  /**
   * The location IDs for the orders to query. All locations must belong to
   * the same merchant.
   * Min: 1 location IDs.
   * Max: 10 location IDs.
   */
  locationIds?: string[];
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
  /** Contains query criteria for the search. */
  query?: SearchOrdersQuery;
  /**
   * Maximum number of results to be returned in a single page. It is
   * possible to receive fewer results than the specified limit on a given page.
   * Default: `500`
   */
  limit?: number;
  /**
   * Boolean that controls the format of the search results. If `true`,
   * SearchOrders will return [`OrderEntry`](#type-orderentry) objects. If `false`, SearchOrders
   * will return complete Order objects.
   * Default: `false`.
   */
  returnEntries?: boolean;
}

export const searchOrdersRequestSchema: Schema<SearchOrdersRequest> = object({
  locationIds: ['location_ids', optional(array(string()))],
  cursor: ['cursor', optional(string())],
  query: ['query', optional(lazy(() => searchOrdersQuerySchema))],
  limit: ['limit', optional(number())],
  returnEntries: ['return_entries', optional(boolean())],
});
