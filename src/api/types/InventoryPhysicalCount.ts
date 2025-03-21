/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents the quantity of an item variation that is physically present
 * at a specific location, verified by a seller or a seller's employee. For example,
 * a physical count might come from an employee counting the item variations on
 * hand or from syncing with an external system.
 */
export interface InventoryPhysicalCount {
    /**
     * A unique Square-generated ID for the
     * [InventoryPhysicalCount](entity:InventoryPhysicalCount).
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the
     * [InventoryPhysicalCount](entity:InventoryPhysicalCount) to an external
     * system.
     */
    referenceId?: string | null;
    /**
     * The Square-generated ID of the
     * [CatalogObject](entity:CatalogObject) being tracked.
     */
    catalogObjectId?: string | null;
    /**
     * The [type](entity:CatalogObjectType) of the [CatalogObject](entity:CatalogObject) being tracked.
     *
     * The Inventory API supports setting and reading the `"catalog_object_type": "ITEM_VARIATION"` field value.
     * In addition, it can also read the `"catalog_object_type": "ITEM"` field value that is set by the Square Restaurants app.
     */
    catalogObjectType?: string | null;
    /**
     * The current [inventory state](entity:InventoryState) for the related
     * quantity of items.
     * See [InventoryState](#type-inventorystate) for possible values
     */
    state?: Square.InventoryState;
    /**
     * The Square-generated ID of the [Location](entity:Location) where the related
     * quantity of items is being tracked.
     */
    locationId?: string | null;
    /**
     * The number of items affected by the physical count as a decimal string.
     * The number can support up to 5 digits after the decimal point.
     */
    quantity?: string | null;
    /**
     * Information about the application with which the
     * physical count is submitted.
     */
    source?: Square.SourceApplication;
    /**
     * The Square-generated ID of the [Employee](entity:Employee) responsible for the
     * physical count.
     */
    employeeId?: string | null;
    /**
     * The Square-generated ID of the [Team Member](entity:TeamMember) responsible for the
     * physical count.
     */
    teamMemberId?: string | null;
    /**
     * A client-generated RFC 3339-formatted timestamp that indicates when
     * the physical count was examined. For physical count updates, the `occurred_at`
     * timestamp cannot be older than 24 hours or in the future relative to the
     * time of the request.
     */
    occurredAt?: string | null;
    /** An RFC 3339-formatted timestamp that indicates when the physical count is received. */
    createdAt?: string;
}
