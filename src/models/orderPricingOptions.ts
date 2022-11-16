import { boolean, nullable, object, optional, Schema } from '../schema';

/**
 * Pricing options for an order. The options affect how the order's price is calculated.
 * They can be used, for example, to apply automatic price adjustments that are based on preconfigured
 * [pricing rules]($m/CatalogPricingRule).
 */
export interface OrderPricingOptions {
  /**
   * The option to determine whether pricing rule-based
   * discounts are automatically applied to an order.
   */
  autoApplyDiscounts?: boolean | null;
  /**
   * The option to determine whether rule-based taxes are automatically
   * applied to an order when the criteria of the corresponding rules are met.
   */
  autoApplyTaxes?: boolean | null;
}

export const orderPricingOptionsSchema: Schema<OrderPricingOptions> = object({
  autoApplyDiscounts: ['auto_apply_discounts', optional(nullable(boolean()))],
  autoApplyTaxes: ['auto_apply_taxes', optional(nullable(boolean()))],
});
