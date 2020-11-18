import { number, object, optional, Schema, string } from '../schema';

export interface ListCashDrawerShiftEventsRequest {
  /** The ID of the location to list cash drawer shifts for. */
  locationId: string;
  /**
   * Number of resources to be returned in a page of results (200 by
   * default, 1000 max).
   */
  limit?: number;
  /** Opaque cursor for fetching the next page of results. */
  cursor?: string;
}

export const listCashDrawerShiftEventsRequestSchema: Schema<ListCashDrawerShiftEventsRequest> = object(
  {
    locationId: ['location_id', string()],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
