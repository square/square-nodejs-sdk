import { boolean, object, optional, Schema, string } from '../schema';

/**
 * Represents Square-estimated quantity of items in a particular state at a
 * particular seller location based on the known history of physical counts and
 * inventory adjustments.
 */
export interface InventoryCount {
  /**
   * The Square-generated ID of the
   * [CatalogObject]($m/CatalogObject) being tracked.
   */
  catalogObjectId?: string;
  /**
   * The [type]($m/CatalogObjectType) of the
   * [CatalogObject]($m/CatalogObject) being tracked. Tracking is only
   * supported for the `ITEM_VARIATION` type.
   */
  catalogObjectType?: string;
  /** Indicates the state of a tracked item quantity in the lifecycle of goods. */
  state?: string;
  /**
   * The Square-generated ID of the [Location]($m/Location) where the related
   * quantity of items is being tracked.
   */
  locationId?: string;
  /**
   * The number of items affected by the estimated count as a decimal string.
   * Can support up to 5 digits after the decimal point.
   */
  quantity?: string;
  /**
   * An RFC 3339-formatted timestamp that indicates when the most recent physical count or adjustment affecting
   * the estimated count is received.
   */
  calculatedAt?: string;
  /**
   * Whether the inventory count is for composed variation (TRUE) or not (FALSE). If true, the inventory count will not be present in the response of
   * any of these endpoints: [BatchChangeInventory]($e/Inventory/BatchChangeInventory),
   * [BatchRetrieveInventoryChanges]($e/Inventory/BatchRetrieveInventoryChanges),
   * [BatchRetrieveInventoryCounts]($e/Inventory/BatchRetrieveInventoryCounts), and
   * [RetrieveInventoryChanges]($e/Inventory/RetrieveInventoryChanges).
   */
  isEstimated?: boolean;
}

export const inventoryCountSchema: Schema<InventoryCount> = object({
  catalogObjectId: ['catalog_object_id', optional(string())],
  catalogObjectType: ['catalog_object_type', optional(string())],
  state: ['state', optional(string())],
  locationId: ['location_id', optional(string())],
  quantity: ['quantity', optional(string())],
  calculatedAt: ['calculated_at', optional(string())],
  isEstimated: ['is_estimated', optional(boolean())],
});
