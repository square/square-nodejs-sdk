import { boolean, nullable, object, optional, Schema, string } from '../schema';

/**
 * Represents Square-estimated quantity of items in a particular state at a
 * particular seller location based on the known history of physical counts and
 * inventory adjustments.
 */
export interface InventoryCount {
  /**
   * The Square-generated ID of the
   * [CatalogObject](entity:CatalogObject) being tracked.
   */
  catalogObjectId?: string | null;
  /**
   * The [type](entity:CatalogObjectType) of the [CatalogObject](entity:CatalogObject) being tracked.
   * The Inventory API supports setting and reading the `"catalog_object_type": "ITEM_VARIATION"` field value.
   * In addition, it can also read the `"catalog_object_type": "ITEM"` field value that is set by the Square Restaurants app.
   */
  catalogObjectType?: string | null;
  /** Indicates the state of a tracked item quantity in the lifecycle of goods. */
  state?: string;
  /**
   * The Square-generated ID of the [Location](entity:Location) where the related
   * quantity of items is being tracked.
   */
  locationId?: string | null;
  /**
   * The number of items affected by the estimated count as a decimal string.
   * Can support up to 5 digits after the decimal point.
   */
  quantity?: string | null;
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
  catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
  catalogObjectType: ['catalog_object_type', optional(nullable(string()))],
  state: ['state', optional(string())],
  locationId: ['location_id', optional(nullable(string()))],
  quantity: ['quantity', optional(nullable(string()))],
  calculatedAt: ['calculated_at', optional(string())],
  isEstimated: ['is_estimated', optional(boolean())],
});
