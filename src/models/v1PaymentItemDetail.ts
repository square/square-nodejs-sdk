import { object, optional, Schema, string } from '../schema';

/** V1PaymentItemDetail */
export interface V1PaymentItemDetail {
  /** The name of the item's merchant-defined category, if any. */
  categoryName?: string;
  /** The item's merchant-defined SKU, if any. */
  sku?: string;
  /** The unique ID of the item purchased, if any. */
  itemId?: string;
  /** The unique ID of the item variation purchased, if any. */
  itemVariationId?: string;
}

export const v1PaymentItemDetailSchema: Schema<V1PaymentItemDetail> = object({
  categoryName: ['category_name', optional(string())],
  sku: ['sku', optional(string())],
  itemId: ['item_id', optional(string())],
  itemVariationId: ['item_variation_id', optional(string())],
});
