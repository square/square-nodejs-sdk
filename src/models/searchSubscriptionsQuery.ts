import { lazy, object, optional, Schema } from '../schema';
import {
  SearchSubscriptionsFilter,
  searchSubscriptionsFilterSchema,
} from './searchSubscriptionsFilter';

/** Represents a query, consisting of specified query expressions, used to search for subscriptions. */
export interface SearchSubscriptionsQuery {
  /**
   * Represents a set of query expressions (filters) to narrow the scope of targeted subscriptions returned by
   * the [SearchSubscriptions]($e/Subscriptions/SearchSubscriptions) endpoint.
   */
  filter?: SearchSubscriptionsFilter;
}

export const searchSubscriptionsQuerySchema: Schema<SearchSubscriptionsQuery> = object(
  { filter: ['filter', optional(lazy(() => searchSubscriptionsFilterSchema))] }
);
