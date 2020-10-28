import { array, object, optional, Schema, string } from '../schema';

export interface BatchRetrieveInventoryChangesRequest {
  /**
   * Filters results by `CatalogObject` ID.
   * Only applied when set. Max size is 500 IDs. Default: unset.
   */
  catalogObjectIds?: string[];
  /**
   * Filters results by `Location` ID. Only
   * applied when set. Default: unset.
   */
  locationIds?: string[];
  /**
   * Filters results by `InventoryChangeType`.
   * Default: [`PHYSICAL_COUNT`, `ADJUSTMENT`]. `TRANSFER` is not supported as
   * a filter.
   * See [InventoryChangeType](#type-inventorychangetype) for possible values
   */
  types?: string[];
  /**
   * Filters `ADJUSTMENT` query results by
   * `InventoryState`. Only applied when set.
   * Default: unset.
   * See [InventoryState](#type-inventorystate) for possible values
   */
  states?: string[];
  /**
   * Provided as an RFC 3339 timestamp. Returns results whose
   * `created_at` or `calculated_at` value is after the given time.
   * Default: UNIX epoch (`1970-01-01T00:00:00Z`).
   */
  updatedAfter?: string;
  /**
   * Provided as an RFC 3339 timestamp. Returns results whose
   * `created_at` or `calculated_at` value is strictly before the given time.
   * Default: UNIX epoch (`1970-01-01T00:00:00Z`).
   */
  updatedBefore?: string;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string;
}

export const batchRetrieveInventoryChangesRequestSchema: Schema<BatchRetrieveInventoryChangesRequest> = object(
  {
    catalogObjectIds: ['catalog_object_ids', optional(array(string()))],
    locationIds: ['location_ids', optional(array(string()))],
    types: ['types', optional(array(string()))],
    states: ['states', optional(array(string()))],
    updatedAfter: ['updated_after', optional(string())],
    updatedBefore: ['updated_before', optional(string())],
    cursor: ['cursor', optional(string())],
  }
);
