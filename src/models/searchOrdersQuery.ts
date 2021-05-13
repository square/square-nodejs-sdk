import { lazy, object, optional, Schema } from '../schema';
import {
  SearchOrdersFilter,
  searchOrdersFilterSchema,
} from './searchOrdersFilter';
import { SearchOrdersSort, searchOrdersSortSchema } from './searchOrdersSort';

/** Contains query criteria for the search. */
export interface SearchOrdersQuery {
  /**
   * Filtering criteria to use for a `SearchOrders` request. Multiple filters
   * are ANDed together.
   */
  filter?: SearchOrdersFilter;
  /**
   * Sorting criteria for a `SearchOrders` request. Results can only be sorted
   * by a timestamp field.
   */
  sort?: SearchOrdersSort;
}

export const searchOrdersQuerySchema: Schema<SearchOrdersQuery> = object({
  filter: ['filter', optional(lazy(() => searchOrdersFilterSchema))],
  sort: ['sort', optional(lazy(() => searchOrdersSortSchema))],
});
