import { nullable, object, optional, Schema, string } from '../schema';

/** V1PaymentItemDetail */
export interface V1PaymentItemDetail {
  /** The name of the item's merchant-defined category, if any. */
  categoryName?: string | null;
  /** The item's merchant-defined SKU, if any. */
  sku?: string | null;
  /** The unique ID of the item purchased, if any. */
  itemId?: string | null;
  /** The unique ID of the item variation purchased, if any. */
  itemVariationId?: string | null;
}

export const v1PaymentItemDetailSchema: Schema<V1PaymentItemDetail> = object({
  categoryName: ['category_name', optional(nullable(string()))],
  sku: ['sku', optional(nullable(string()))],
  itemId: ['item_id', optional(nullable(string()))],
  itemVariationId: ['item_variation_id', optional(nullable(string()))],
});
