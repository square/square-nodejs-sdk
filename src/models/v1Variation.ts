import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1Variation */
export interface V1Variation {
  /** The item variation's unique ID. */
  id?: string;
  /** The item variation's name. */
  name?: string;
  /** The ID of the variation's associated item. */
  itemId?: string;
  /** Indicates the variation's list position when displayed in Square Point of Sale and the merchant dashboard. If more than one variation for the same item has the same ordinal value, those variations are displayed in alphabetical order */
  ordinal?: number;
  pricingType?: string;
  priceMoney?: V1Money;
  /** The item variation's SKU, if any. */
  sku?: string;
  /** If true, inventory tracking is active for the variation. */
  trackInventory?: boolean;
  inventoryAlertType?: string;
  /** If the inventory quantity for the variation is less than or equal to this value and inventory_alert_type is LOW_QUANTITY, the variation displays an alert in the merchant dashboard. */
  inventoryAlertThreshold?: number;
  /** Arbitrary metadata associated with the variation. Cannot exceed 255 characters. */
  userData?: string;
  /** The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. */
  v2Id?: string;
}

export const v1VariationSchema: Schema<V1Variation> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  itemId: ['item_id', optional(string())],
  ordinal: ['ordinal', optional(number())],
  pricingType: ['pricing_type', optional(string())],
  priceMoney: ['price_money', optional(lazy(() => v1MoneySchema))],
  sku: ['sku', optional(string())],
  trackInventory: ['track_inventory', optional(boolean())],
  inventoryAlertType: ['inventory_alert_type', optional(string())],
  inventoryAlertThreshold: ['inventory_alert_threshold', optional(number())],
  userData: ['user_data', optional(string())],
  v2Id: ['v2_id', optional(string())],
});
