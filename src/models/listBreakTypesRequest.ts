import { number, object, optional, Schema, string } from '../schema';

/** A request for a filtered set of `BreakType` objects */
export interface ListBreakTypesRequest {
  /**
   * Filter Break Types returned to only those that are associated with the
   * specified location.
   */
  locationId?: string;
  /**
   * Maximum number of Break Types to return per page. Can range between 1
   * and 200. The default is the maximum at 200.
   */
  limit?: number;
  /** Pointer to the next page of Break Type results to fetch. */
  cursor?: string;
}

export const listBreakTypesRequestSchema: Schema<ListBreakTypesRequest> = object(
  {
    locationId: ['location_id', optional(string())],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
