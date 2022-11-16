import { nullable, number, object, optional, Schema, string } from '../schema';

export interface ListCashDrawerShiftsRequest {
  /** The ID of the location to query for a list of cash drawer shifts. */
  locationId: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
  /** The inclusive start time of the query on opened_at, in ISO 8601 format. */
  beginTime?: string | null;
  /** The exclusive end date of the query on opened_at, in ISO 8601 format. */
  endTime?: string | null;
  /**
   * Number of cash drawer shift events in a page of results (200 by
   * default, 1000 max).
   */
  limit?: number | null;
  /** Opaque cursor for fetching the next page of results. */
  cursor?: string | null;
}

export const listCashDrawerShiftsRequestSchema: Schema<ListCashDrawerShiftsRequest> = object(
  {
    locationId: ['location_id', string()],
    sortOrder: ['sort_order', optional(string())],
    beginTime: ['begin_time', optional(nullable(string()))],
    endTime: ['end_time', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
  }
);
