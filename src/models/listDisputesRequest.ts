import { array, object, optional, Schema, string } from '../schema';

/** Defines request parameters for the ListDisputes endpoint. */
export interface ListDisputesRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
   */
  cursor?: string;
  /**
   * The dispute states to filter the result.
   * If not specified, the endpoint
   * returns all open disputes (dispute status is not
   * `INQUIRY_CLOSED`, `WON`, or `LOST`).
   * See [DisputeState](#type-disputestate) for possible values
   */
  states?: string[];
  /**
   * The ID of the location for which to return
   * a list of disputes. If not specified,
   * the endpoint returns all open disputes
   * (dispute status is not `INQUIRY_CLOSED`, `WON`, or
   * `LOST`) associated with all locations.
   */
  locationId?: string;
}

export const listDisputesRequestSchema: Schema<ListDisputesRequest> = object({
  cursor: ['cursor', optional(string())],
  states: ['states', optional(array(string()))],
  locationId: ['location_id', optional(string())],
});
