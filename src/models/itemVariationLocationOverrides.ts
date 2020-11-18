import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** Price and inventory alerting overrides for a `CatalogItemVariation` at a specific `Location`. */
export interface ItemVariationLocationOverrides {
  /** The ID of the `Location`. */
  locationId?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  priceMoney?: Money;
  /** Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale. */
  pricingType?: string;
  /** If `true`, inventory tracking is active for the `CatalogItemVariation` at this `Location`. */
  trackInventory?: boolean;
  /** Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low. */
  inventoryAlertType?: string;
  /**
   * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
   * is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.
   * This value is always an integer.
   */
  inventoryAlertThreshold?: number;
}

export const itemVariationLocationOverridesSchema: Schema<ItemVariationLocationOverrides> = object(
  {
    locationId: ['location_id', optional(string())],
    priceMoney: ['price_money', optional(lazy(() => moneySchema))],
    pricingType: ['pricing_type', optional(string())],
    trackInventory: ['track_inventory', optional(boolean())],
    inventoryAlertType: ['inventory_alert_type', optional(string())],
    inventoryAlertThreshold: ['inventory_alert_threshold', optional(number())],
  }
);
