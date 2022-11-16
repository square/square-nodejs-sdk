import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  SourceApplication,
  sourceApplicationSchema,
} from './sourceApplication';

/**
 * Represents the transfer of a quantity of product inventory at a
 * particular time from one location to another.
 */
export interface InventoryTransfer {
  /**
   * A unique ID generated by Square for the
   * `InventoryTransfer`.
   */
  id?: string;
  /**
   * An optional ID provided by the application to tie the
   * `InventoryTransfer` to an external system.
   */
  referenceId?: string | null;
  /** Indicates the state of a tracked item quantity in the lifecycle of goods. */
  state?: string;
  /**
   * The Square-generated ID of the [Location]($m/Location) where the related
   * quantity of items was tracked before the transfer.
   */
  fromLocationId?: string | null;
  /**
   * The Square-generated ID of the [Location]($m/Location) where the related
   * quantity of items was tracked after the transfer.
   */
  toLocationId?: string | null;
  /**
   * The Square-generated ID of the
   * [CatalogObject]($m/CatalogObject) being tracked.
   */
  catalogObjectId?: string | null;
  /**
   * The [type]($m/CatalogObjectType) of the [CatalogObject]($m/CatalogObject) being tracked.
   * The Inventory API supports setting and reading the `"catalog_object_type": "ITEM_VARIATION"` field value.
   * In addition, it can also read the `"catalog_object_type": "ITEM"` field value that is set by the Square Restaurants app.
   */
  catalogObjectType?: string | null;
  /**
   * The number of items affected by the transfer as a decimal string.
   * Can support up to 5 digits after the decimal point.
   */
  quantity?: string | null;
  /**
   * A client-generated RFC 3339-formatted timestamp that indicates when
   * the transfer took place. For write actions, the `occurred_at` timestamp
   * cannot be older than 24 hours or in the future relative to the time of the
   * request.
   */
  occurredAt?: string | null;
  /**
   * An RFC 3339-formatted timestamp that indicates when Square
   * received the transfer request.
   */
  createdAt?: string;
  /** Represents information about the application used to generate a change. */
  source?: SourceApplication;
  /**
   * The Square-generated ID of the [Employee]($m/Employee) responsible for the
   * inventory transfer.
   */
  employeeId?: string | null;
  /**
   * The Square-generated ID of the [Team Member]($m/TeamMember) responsible for the
   * inventory transfer.
   */
  teamMemberId?: string | null;
}

export const inventoryTransferSchema: Schema<InventoryTransfer> = object({
  id: ['id', optional(string())],
  referenceId: ['reference_id', optional(nullable(string()))],
  state: ['state', optional(string())],
  fromLocationId: ['from_location_id', optional(nullable(string()))],
  toLocationId: ['to_location_id', optional(nullable(string()))],
  catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
  catalogObjectType: ['catalog_object_type', optional(nullable(string()))],
  quantity: ['quantity', optional(nullable(string()))],
  occurredAt: ['occurred_at', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  source: ['source', optional(lazy(() => sourceApplicationSchema))],
  employeeId: ['employee_id', optional(nullable(string()))],
  teamMemberId: ['team_member_id', optional(nullable(string()))],
});
