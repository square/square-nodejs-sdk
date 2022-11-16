import { array, nullable, object, optional, Schema, string } from '../schema';

/** The query filter to return the item variations containing the specified item option value IDs. */
export interface CatalogQueryItemVariationsForItemOptionValues {
  /**
   * A set of `CatalogItemOptionValue` IDs to be used to find associated
   * `CatalogItemVariation`s. All ItemVariations that contain all of the given
   * Item Option Values (in any order) will be returned.
   */
  itemOptionValueIds?: string[] | null;
}

export const catalogQueryItemVariationsForItemOptionValuesSchema: Schema<CatalogQueryItemVariationsForItemOptionValues> = object(
  {
    itemOptionValueIds: [
      'item_option_value_ids',
      optional(nullable(array(string()))),
    ],
  }
);
