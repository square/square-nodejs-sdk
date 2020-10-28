import { number, object, optional, Schema, string } from '../schema';

/** V1InventoryEntry */
export interface V1InventoryEntry {
  /** The variation that the entry corresponds to. */
  variationId?: string;
  /** The current available quantity of the item variation. */
  quantityOnHand?: number;
}

export const v1InventoryEntrySchema: Schema<V1InventoryEntry> = object({
  variationId: ['variation_id', optional(string())],
  quantityOnHand: ['quantity_on_hand', optional(number())],
});
