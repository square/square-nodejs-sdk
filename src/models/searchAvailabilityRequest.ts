import { lazy, object, Schema } from '../schema';
import {
  SearchAvailabilityQuery,
  searchAvailabilityQuerySchema,
} from './searchAvailabilityQuery';

export interface SearchAvailabilityRequest {
  /** The query used to search for buyer-accessible availabilities of bookings. */
  query: SearchAvailabilityQuery;
}

export const searchAvailabilityRequestSchema: Schema<SearchAvailabilityRequest> = object(
  { query: ['query', lazy(() => searchAvailabilityQuerySchema)] }
);
