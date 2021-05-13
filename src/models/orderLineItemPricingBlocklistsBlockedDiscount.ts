import { object, optional, Schema, string } from '../schema';

/**
 * A discount to block from applying to a line item. The discount must be
 * identified by either `discount_uid` or `discount_catalog_object_id`, but not both.
 */
export interface OrderLineItemPricingBlocklistsBlockedDiscount {
  /** A unique ID of the `BlockedDiscount` within the order. */
  uid?: string;
  /**
   * The `uid` of the discount that should be blocked. Use this field to block
   * ad hoc discounts. For catalog discounts, use the `discount_catalog_object_id` field.
   */
  discountUid?: string;
  /**
   * The `catalog_object_id` of the discount that should be blocked.
   * Use this field to block catalog discounts. For ad hoc discounts, use the
   * `discount_uid` field.
   */
  discountCatalogObjectId?: string;
}

export const orderLineItemPricingBlocklistsBlockedDiscountSchema: Schema<OrderLineItemPricingBlocklistsBlockedDiscount> = object(
  {
    uid: ['uid', optional(string())],
    discountUid: ['discount_uid', optional(string())],
    discountCatalogObjectId: ['discount_catalog_object_id', optional(string())],
  }
);
