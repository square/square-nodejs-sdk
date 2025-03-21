/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a single physical count, inventory, adjustment, or transfer
 * that is part of the history of inventory changes for a particular
 * [CatalogObject](entity:CatalogObject) instance.
 */
export interface InventoryChange {
    /**
     * Indicates how the inventory change is applied. See
     * [InventoryChangeType](entity:InventoryChangeType) for all possible values.
     * See [InventoryChangeType](#type-inventorychangetype) for possible values
     */
    type?: Square.InventoryChangeType;
    /**
     * Contains details about the physical count when `type` is
     * `PHYSICAL_COUNT`, and is unset for all other change types.
     */
    physicalCount?: Square.InventoryPhysicalCount;
    /**
     * Contains details about the inventory adjustment when `type` is
     * `ADJUSTMENT`, and is unset for all other change types.
     */
    adjustment?: Square.InventoryAdjustment;
    /**
     * Contains details about the inventory transfer when `type` is
     * `TRANSFER`, and is unset for all other change types.
     *
     * _Note:_ An [InventoryTransfer](entity:InventoryTransfer) object can only be set in the input to the
     * [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory) endpoint when the seller has an active Retail Plus subscription.
     */
    transfer?: Square.InventoryTransfer;
    /** The [CatalogMeasurementUnit](entity:CatalogMeasurementUnit) object representing the catalog measurement unit associated with the inventory change. */
    measurementUnit?: Square.CatalogMeasurementUnit;
    /** The ID of the [CatalogMeasurementUnit](entity:CatalogMeasurementUnit) object representing the catalog measurement unit associated with the inventory change. */
    measurementUnitId?: string;
}
