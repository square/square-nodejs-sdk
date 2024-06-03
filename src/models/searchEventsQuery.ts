import { lazy, object, optional, Schema } from '../schema';
import {
  SearchEventsFilter,
  searchEventsFilterSchema,
} from './searchEventsFilter';
import { SearchEventsSort, searchEventsSortSchema } from './searchEventsSort';

/** Contains query criteria for the search. */
export interface SearchEventsQuery {
  /** Criteria to filter events by. */
  filter?: SearchEventsFilter;
  /** Criteria to sort events by. */
  sort?: SearchEventsSort;
}

export const searchEventsQuerySchema: Schema<SearchEventsQuery> = object({
  filter: ['filter', optional(lazy(() => searchEventsFilterSchema))],
  sort: ['sort', optional(lazy(() => searchEventsSortSchema))],
});
