import { object, optional, Schema, string } from '../schema';

/**
 * A tax to block from applying to a line item. The tax must be
 * identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
 */
export interface OrderLineItemPricingBlocklistsBlockedTax {
  /** A unique ID of the `BlockedTax` within the order. */
  uid?: string;
  /**
   * The `uid` of the tax that should be blocked. Use this field to block
   * ad hoc taxes. For catalog, taxes use the `tax_catalog_object_id` field.
   */
  taxUid?: string;
  /**
   * The `catalog_object_id` of the tax that should be blocked.
   * Use this field to block catalog taxes. For ad hoc taxes, use the
   * `tax_uid` field.
   */
  taxCatalogObjectId?: string;
}

export const orderLineItemPricingBlocklistsBlockedTaxSchema: Schema<OrderLineItemPricingBlocklistsBlockedTax> = object(
  {
    uid: ['uid', optional(string())],
    taxUid: ['tax_uid', optional(string())],
    taxCatalogObjectId: ['tax_catalog_object_id', optional(string())],
  }
);
