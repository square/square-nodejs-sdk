import { number, object, optional, Schema, string } from '../schema';

/** A request for a filtered set of `BreakType` objects. */
export interface ListBreakTypesRequest {
  /**
   * Filter the returned `BreakType` results to only those that are associated with the
   * specified location.
   */
  locationId?: string;
  /**
   * The maximum number of `BreakType` results to return per page. The number can range between 1
   * and 200. The default is 200.
   */
  limit?: number;
  /** A pointer to the next page of `BreakType` results to fetch. */
  cursor?: string;
}

export const listBreakTypesRequestSchema: Schema<ListBreakTypesRequest> = object(
  {
    locationId: ['location_id', optional(string())],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
