import { array, object, optional, Schema, string } from '../schema';

export interface BatchRetrieveInventoryChangesRequest {
  /**
   * The filter to return results by `CatalogObject` ID.
   * The filter is only applicable when set. The default value is null.
   */
  catalogObjectIds?: string[];
  /**
   * The filter to return results by `Location` ID.
   * The filter is only applicable when set. The default value is null.
   */
  locationIds?: string[];
  /**
   * The filter to return results by `InventoryChangeType` values other than `TRANSFER`.
   * The default value is `[PHYSICAL_COUNT, ADJUSTMENT]`.
   */
  types?: string[];
  /**
   * The filter to return `ADJUSTMENT` query results by
   * `InventoryState`. This filter is only applied when set.
   * The default value is null.
   */
  states?: string[];
  /**
   * The filter to return results with their `calculated_at` value
   * after the given time as specified in an RFC 3339 timestamp.
   * The default value is the UNIX epoch of (`1970-01-01T00:00:00Z`).
   */
  updatedAfter?: string;
  /**
   * The filter to return results with their `created_at` or `calculated_at` value
   * strictly before the given time as specified in an RFC 3339 timestamp.
   * The default value is the UNIX epoch of (`1970-01-01T00:00:00Z`).
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
