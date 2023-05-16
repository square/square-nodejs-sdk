import { lazy, object, optional, Schema, string } from '../schema';
import {
  SearchVendorsRequestFilter,
  searchVendorsRequestFilterSchema,
} from './searchVendorsRequestFilter';
import {
  SearchVendorsRequestSort,
  searchVendorsRequestSortSchema,
} from './searchVendorsRequestSort';

/** Represents an input into a call to [SearchVendors]($e/Vendors/SearchVendors). */
export interface SearchVendorsRequest {
  /** Defines supported query expressions to search for vendors by. */
  filter?: SearchVendorsRequestFilter;
  /** Defines a sorter used to sort results from [SearchVendors]($e/Vendors/SearchVendors). */
  sort?: SearchVendorsRequestSort;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string;
}

export const searchVendorsRequestSchema: Schema<SearchVendorsRequest> = object({
  filter: ['filter', optional(lazy(() => searchVendorsRequestFilterSchema))],
  sort: ['sort', optional(lazy(() => searchVendorsRequestSortSchema))],
  cursor: ['cursor', optional(string())],
});
