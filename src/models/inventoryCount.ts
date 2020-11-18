import { object, optional, Schema, string } from '../schema';

/**
 * Represents Square's estimated quantity of items in a particular state at a
 * particular location based on the known history of physical counts and
 * inventory adjustments.
 */
export interface InventoryCount {
  /**
   * The Square generated ID of the
   * `CatalogObject` being tracked.
   */
  catalogObjectId?: string;
  /**
   * The `CatalogObjectType` of the
   * `CatalogObject` being tracked. Tracking is only
   * supported for the `ITEM_VARIATION` type.
   */
  catalogObjectType?: string;
  /** Indicates the state of a tracked item quantity in the lifecycle of goods. */
  state?: string;
  /**
   * The Square ID of the [Location](#type-location) where the related
   * quantity of items are being tracked.
   */
  locationId?: string;
  /**
   * The number of items affected by the estimated count as a decimal string.
   * Can support up to 5 digits after the decimal point.
   */
  quantity?: string;
  /**
   * A read-only timestamp in RFC 3339 format that indicates when Square
   * received the most recent physical count or adjustment that had an affect
   * on the estimated count.
   */
  calculatedAt?: string;
}

export const inventoryCountSchema: Schema<InventoryCount> = object({
  catalogObjectId: ['catalog_object_id', optional(string())],
  catalogObjectType: ['catalog_object_type', optional(string())],
  state: ['state', optional(string())],
  locationId: ['location_id', optional(string())],
  quantity: ['quantity', optional(string())],
  calculatedAt: ['calculated_at', optional(string())],
});
