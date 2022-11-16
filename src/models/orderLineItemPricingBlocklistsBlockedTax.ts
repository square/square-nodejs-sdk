import { nullable, object, optional, Schema, string } from '../schema';

/**
 * A tax to block from applying to a line item. The tax must be
 * identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
 */
export interface OrderLineItemPricingBlocklistsBlockedTax {
  /** A unique ID of the `BlockedTax` within the order. */
  uid?: string | null;
  /**
   * The `uid` of the tax that should be blocked. Use this field to block
   * ad hoc taxes. For catalog, taxes use the `tax_catalog_object_id` field.
   */
  taxUid?: string | null;
  /**
   * The `catalog_object_id` of the tax that should be blocked.
   * Use this field to block catalog taxes. For ad hoc taxes, use the
   * `tax_uid` field.
   */
  taxCatalogObjectId?: string | null;
}

export const orderLineItemPricingBlocklistsBlockedTaxSchema: Schema<OrderLineItemPricingBlocklistsBlockedTax> = object(
  {
    uid: ['uid', optional(nullable(string()))],
    taxUid: ['tax_uid', optional(nullable(string()))],
    taxCatalogObjectId: ['tax_catalog_object_id', optional(nullable(string()))],
  }
);
