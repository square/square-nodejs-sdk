import { nullable, number, object, optional, Schema, string } from '../schema';

export interface ListCashDrawerShiftEventsRequest {
  /** The ID of the location to list cash drawer shifts for. */
  locationId: string;
  /**
   * Number of resources to be returned in a page of results (200 by
   * default, 1000 max).
   */
  limit?: number | null;
  /** Opaque cursor for fetching the next page of results. */
  cursor?: string | null;
}

export const listCashDrawerShiftEventsRequestSchema: Schema<ListCashDrawerShiftEventsRequest> = object(
  {
    locationId: ['location_id', string()],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
  }
);
