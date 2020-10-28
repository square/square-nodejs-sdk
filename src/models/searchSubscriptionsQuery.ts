import { lazy, object, optional, Schema } from '../schema';
import {
  SearchSubscriptionsFilter,
  searchSubscriptionsFilterSchema,
} from './searchSubscriptionsFilter';

/** Represents a query (including filtering criteria) used to search for subscriptions. */
export interface SearchSubscriptionsQuery {
  /** Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions. */
  filter?: SearchSubscriptionsFilter;
}

export const searchSubscriptionsQuerySchema: Schema<SearchSubscriptionsQuery> = object(
  { filter: ['filter', optional(lazy(() => searchSubscriptionsFilterSchema))] }
);
