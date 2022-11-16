import { nullable, object, optional, Schema, string } from '../schema';

/**
 * An option that can be assigned to an item.
 * For example, a t-shirt item may offer a color option or a size option.
 */
export interface CatalogItemOptionForItem {
  /** The unique id of the item option, used to form the dimensions of the item option matrix in a specified order. */
  itemOptionId?: string | null;
}

export const catalogItemOptionForItemSchema: Schema<CatalogItemOptionForItem> = object(
  { itemOptionId: ['item_option_id', optional(nullable(string()))] }
);
