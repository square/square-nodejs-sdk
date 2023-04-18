import {
  array,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface BatchRetrieveInventoryChangesRequest {
  /**
   * The filter to return results by `CatalogObject` ID.
   * The filter is only applicable when set. The default value is null.
   */
  catalogObjectIds?: string[] | null;
  /**
   * The filter to return results by `Location` ID.
   * The filter is only applicable when set. The default value is null.
   */
  locationIds?: string[] | null;
  /**
   * The filter to return results by `InventoryChangeType` values other than `TRANSFER`.
   * The default value is `[PHYSICAL_COUNT, ADJUSTMENT]`.
   */
  types?: string[] | null;
  /**
   * The filter to return `ADJUSTMENT` query results by
   * `InventoryState`. This filter is only applied when set.
   * The default value is null.
   */
  states?: string[] | null;
  /**
   * The filter to return results with their `calculated_at` value
   * after the given time as specified in an RFC 3339 timestamp.
   * The default value is the UNIX epoch of (`1970-01-01T00:00:00Z`).
   */
  updatedAfter?: string | null;
  /**
   * The filter to return results with their `created_at` or `calculated_at` value
   * strictly before the given time as specified in an RFC 3339 timestamp.
   * The default value is the UNIX epoch of (`1970-01-01T00:00:00Z`).
   */
  updatedBefore?: string | null;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string | null;
  /** The number of [records](entity:InventoryChange) to return. */
  limit?: number | null;
}

export const batchRetrieveInventoryChangesRequestSchema: Schema<BatchRetrieveInventoryChangesRequest> = object(
  {
    catalogObjectIds: [
      'catalog_object_ids',
      optional(nullable(array(string()))),
    ],
    locationIds: ['location_ids', optional(nullable(array(string())))],
    types: ['types', optional(nullable(array(string())))],
    states: ['states', optional(nullable(array(string())))],
    updatedAfter: ['updated_after', optional(nullable(string()))],
    updatedBefore: ['updated_before', optional(nullable(string()))],
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
  }
);
