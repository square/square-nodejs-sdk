import { lazy, object, Schema } from '../schema';
import {
  SearchAvailabilityQuery,
  searchAvailabilityQuerySchema,
} from './searchAvailabilityQuery';

export interface SearchAvailabilityRequest {
  /** Query conditions to search for availabilities of bookings. */
  query: SearchAvailabilityQuery;
}

export const searchAvailabilityRequestSchema: Schema<SearchAvailabilityRequest> = object(
  { query: ['query', lazy(() => searchAvailabilityQuerySchema)] }
);
