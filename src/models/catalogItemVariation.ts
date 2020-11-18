import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CatalogItemOptionValueForItemVariation,
  catalogItemOptionValueForItemVariationSchema,
} from './catalogItemOptionValueForItemVariation';
import {
  ItemVariationLocationOverrides,
  itemVariationLocationOverridesSchema,
} from './itemVariationLocationOverrides';
import { Money, moneySchema } from './money';

/**
 * An item variation (i.e., product) in the Catalog object model. Each item
 * may have a maximum of 250 item variations.
 */
export interface CatalogItemVariation {
  /** The ID of the `CatalogItem` associated with this item variation. */
  itemId?: string;
  /** The item variation's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string;
  /** The item variation's SKU, if any. This is a searchable attribute for use in applicable query filters. */
  sku?: string;
  /**
   * The universal product code (UPC) of the item variation, if any. This is a searchable attribute for use in applicable query filters.
   * The value of this attribute should be a number of 12-14 digits long.  This restriction is enforced on the Square Seller Dashboard,
   * Square Point of Sale or Retail Point of Sale apps, where this attribute shows in the GTIN field. If a non-compliant UPC value is assigned
   * to this attribute using the API, the value is not editable on the Seller Dashboard, Square Point of Sale or Retail Point of Sale apps
   * unless it is updated to fit the expected format.
   */
  upc?: string;
  /**
   * The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal
   * for each item variation within a parent `CatalogItem` is set according to the item variations's
   * position. On reads, the value is not guaranteed to be sequential or unique.
   */
  ordinal?: number;
  /** Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale. */
  pricingType?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  priceMoney?: Money;
  /** Per-location price and inventory overrides. */
  locationOverrides?: ItemVariationLocationOverrides[];
  /** If `true`, inventory tracking is active for the variation. */
  trackInventory?: boolean;
  /** Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low. */
  inventoryAlertType?: string;
  /**
   * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
   * is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.
   * This value is always an integer.
   */
  inventoryAlertThreshold?: number;
  /** Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points. */
  userData?: string;
  /**
   * If the `CatalogItem` that owns this item variation is of type
   * `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For
   * example, a 30 minute appointment would have the value `1800000`, which is equal to
   * 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
   */
  serviceDuration?: number;
  /**
   * If the `CatalogItem` that owns this item variation is of type
   * `APPOINTMENTS_SERVICE`, a bool representing whether this service is available for booking.
   */
  availableForBooking?: boolean;
  /**
   * List of item option values associated with this item variation. Listed
   * in the same order as the item options of the parent item.
   */
  itemOptionValues?: CatalogItemOptionValueForItemVariation[];
  /**
   * ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity
   * sold of this item variation. If left unset, the item will be sold in
   * whole quantities.
   */
  measurementUnitId?: string;
  /**
   * Tokens of employees that can perform the service represented by this variation. Only valid for
   * variations of type `APPOINTMENTS_SERVICE`.
   */
  teamMemberIds?: string[];
}

export const catalogItemVariationSchema: Schema<CatalogItemVariation> = object({
  itemId: ['item_id', optional(string())],
  name: ['name', optional(string())],
  sku: ['sku', optional(string())],
  upc: ['upc', optional(string())],
  ordinal: ['ordinal', optional(number())],
  pricingType: ['pricing_type', optional(string())],
  priceMoney: ['price_money', optional(lazy(() => moneySchema))],
  locationOverrides: [
    'location_overrides',
    optional(array(lazy(() => itemVariationLocationOverridesSchema))),
  ],
  trackInventory: ['track_inventory', optional(boolean())],
  inventoryAlertType: ['inventory_alert_type', optional(string())],
  inventoryAlertThreshold: ['inventory_alert_threshold', optional(number())],
  userData: ['user_data', optional(string())],
  serviceDuration: ['service_duration', optional(number())],
  availableForBooking: ['available_for_booking', optional(boolean())],
  itemOptionValues: [
    'item_option_values',
    optional(array(lazy(() => catalogItemOptionValueForItemVariationSchema))),
  ],
  measurementUnitId: ['measurement_unit_id', optional(string())],
  teamMemberIds: ['team_member_ids', optional(array(string()))],
});
