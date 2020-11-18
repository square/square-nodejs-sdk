import { boolean, object, optional, Schema } from '../schema';

/**
 * Pricing options for an order. The options affect how the order's price is calculated.
 * They can be used, for example, to apply automatic price adjustments that are based on pre-configured
 * [pricing rules](https://developer.squareup.com/docs/reference/square/objects/CatalogPricingRule).
 */
export interface OrderPricingOptions {
  /**
   * The option to determine whether or not pricing rule-based
   * discounts are automatically applied to an order.
   */
  autoApplyDiscounts?: boolean;
}

export const orderPricingOptionsSchema: Schema<OrderPricingOptions> = object({
  autoApplyDiscounts: ['auto_apply_discounts', optional(boolean())],
});
