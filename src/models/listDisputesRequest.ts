import { array, nullable, object, optional, Schema, string } from '../schema';

/** Defines the request parameters for the `ListDisputes` endpoint. */
export interface ListDisputesRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * The dispute states used to filter the result. If not specified, the endpoint returns all disputes.
   * See [DisputeState](#type-disputestate) for possible values
   */
  states?: string[] | null;
  /**
   * The ID of the location for which to return a list of disputes.
   * If not specified, the endpoint returns disputes associated with all locations.
   */
  locationId?: string | null;
}

export const listDisputesRequestSchema: Schema<ListDisputesRequest> = object({
  cursor: ['cursor', optional(nullable(string()))],
  states: ['states', optional(nullable(array(string())))],
  locationId: ['location_id', optional(nullable(string()))],
});
