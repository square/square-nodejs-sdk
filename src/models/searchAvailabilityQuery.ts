import { lazy, object, Schema } from '../schema';
import {
  SearchAvailabilityFilter,
  searchAvailabilityFilterSchema,
} from './searchAvailabilityFilter';

/** Query conditions to search for availabilities of bookings. */
export interface SearchAvailabilityQuery {
  /** A query filter to search for availabilities by. */
  filter: SearchAvailabilityFilter;
}

export const searchAvailabilityQuerySchema: Schema<SearchAvailabilityQuery> = object(
  { filter: ['filter', lazy(() => searchAvailabilityFilterSchema)] }
);
