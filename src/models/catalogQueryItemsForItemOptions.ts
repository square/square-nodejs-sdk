import { array, object, optional, Schema, string } from '../schema';

/** The query filter to return the items containing the specified item option IDs. */
export interface CatalogQueryItemsForItemOptions {
  /**
   * A set of `CatalogItemOption` IDs to be used to find associated
   * `CatalogItem`s. All Items that contain all of the given Item Options (in any order)
   * will be returned.
   */
  itemOptionIds?: string[];
}

export const catalogQueryItemsForItemOptionsSchema: Schema<CatalogQueryItemsForItemOptions> = object(
  { itemOptionIds: ['item_option_ids', optional(array(string()))] }
);
