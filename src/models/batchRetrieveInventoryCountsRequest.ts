import { array, object, optional, Schema, string } from '../schema';

export interface BatchRetrieveInventoryCountsRequest {
  /**
   * Filters results by `CatalogObject` ID.
   * Only applied when set. Max size is 1000 IDs. Default: unset.
   */
  catalogObjectIds?: string[];
  /**
   * Filters results by `Location` ID. Only
   * applied when set. Default: unset.
   */
  locationIds?: string[];
  /**
   * Provided as an RFC 3339 timestamp. Returns results whose
   * `calculated_at` value is after the given time. Default: UNIX epoch
   * (`1970-01-01T00:00:00Z`).
   */
  updatedAfter?: string;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string;
}

export const batchRetrieveInventoryCountsRequestSchema: Schema<BatchRetrieveInventoryCountsRequest> = object(
  {
    catalogObjectIds: ['catalog_object_ids', optional(array(string()))],
    locationIds: ['location_ids', optional(array(string()))],
    updatedAfter: ['updated_after', optional(string())],
    cursor: ['cursor', optional(string())],
  }
);
