import { lazy, number, object, optional, Schema, string } from '../schema';
import { ShiftQuery, shiftQuerySchema } from './shiftQuery';

/** A request for a filtered and sorted set of `Shift` objects. */
export interface SearchShiftsRequest {
  /** The parameters of a `Shift` search query, which includes filter and sort options. */
  query?: ShiftQuery;
  /** The number of resources in a page (200 by default). */
  limit?: number;
  /** An opaque cursor for fetching the next page. */
  cursor?: string;
}

export const searchShiftsRequestSchema: Schema<SearchShiftsRequest> = object({
  query: ['query', optional(lazy(() => shiftQuerySchema))],
  limit: ['limit', optional(number())],
  cursor: ['cursor', optional(string())],
});
