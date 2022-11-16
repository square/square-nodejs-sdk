import { array, lazy, nullable, object, optional, Schema } from '../schema';
import {
  OrderLineItemPricingBlocklistsBlockedDiscount,
  orderLineItemPricingBlocklistsBlockedDiscountSchema,
} from './orderLineItemPricingBlocklistsBlockedDiscount';
import {
  OrderLineItemPricingBlocklistsBlockedTax,
  orderLineItemPricingBlocklistsBlockedTaxSchema,
} from './orderLineItemPricingBlocklistsBlockedTax';

/**
 * Describes pricing adjustments that are blocked from automatic
 * application to a line item. For more information, see
 * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
 */
export interface OrderLineItemPricingBlocklists {
  /**
   * A list of discounts blocked from applying to the line item.
   * Discounts can be blocked by the `discount_uid` (for ad hoc discounts) or
   * the `discount_catalog_object_id` (for catalog discounts).
   */
  blockedDiscounts?: OrderLineItemPricingBlocklistsBlockedDiscount[] | null;
  /**
   * A list of taxes blocked from applying to the line item.
   * Taxes can be blocked by the `tax_uid` (for ad hoc taxes) or
   * the `tax_catalog_object_id` (for catalog taxes).
   */
  blockedTaxes?: OrderLineItemPricingBlocklistsBlockedTax[] | null;
}

export const orderLineItemPricingBlocklistsSchema: Schema<OrderLineItemPricingBlocklists> = object(
  {
    blockedDiscounts: [
      'blocked_discounts',
      optional(
        nullable(
          array(lazy(() => orderLineItemPricingBlocklistsBlockedDiscountSchema))
        )
      ),
    ],
    blockedTaxes: [
      'blocked_taxes',
      optional(
        nullable(
          array(lazy(() => orderLineItemPricingBlocklistsBlockedTaxSchema))
        )
      ),
    ],
  }
);
