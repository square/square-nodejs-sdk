import { lazy, object, Schema } from '../schema';
import {
  SearchAvailabilityFilter,
  searchAvailabilityFilterSchema,
} from './searchAvailabilityFilter';

/** The query used to search for buyer-accessible availabilities of bookings. */
export interface SearchAvailabilityQuery {
  /** A query filter to search for buyer-accessible availabilities by. */
  filter: SearchAvailabilityFilter;
}

export const searchAvailabilityQuerySchema: Schema<SearchAvailabilityQuery> = object(
  { filter: ['filter', lazy(() => searchAvailabilityFilterSchema)] }
);
