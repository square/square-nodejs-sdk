import { number, object, optional, Schema, string } from '../schema';

/**
 * An enumerated value that can link a
 * `CatalogItemVariation` to an item option as one of
 * its item option values.
 */
export interface CatalogItemOptionValue {
  /** Unique ID of the associated item option. */
  itemOptionId?: string;
  /** Name of this item option value. This is a searchable attribute for use in applicable query filters. */
  name?: string;
  /** A human-readable description for the option value. This is a searchable attribute for use in applicable query filters. */
  description?: string;
  /**
   * The HTML-supported hex color for the item option (e.g., "#ff8d4e85").
   * Only displayed if `show_colors` is enabled on the parent `ItemOption`. When
   * left unset, `color` defaults to white ("#ffffff") when `show_colors` is
   * enabled on the parent `ItemOption`.
   */
  color?: string;
  /** Determines where this option value appears in a list of option values. */
  ordinal?: number;
  /**
   * The number of `CatalogItemVariation`s that
   * currently use this item option value. Present only if `retrieve_counts`
   * was specified on the request used to retrieve the parent item option of this
   * value.
   */
  itemVariationCount?: number;
}

export const catalogItemOptionValueSchema: Schema<CatalogItemOptionValue> = object(
  {
    itemOptionId: ['item_option_id', optional(string())],
    name: ['name', optional(string())],
    description: ['description', optional(string())],
    color: ['color', optional(string())],
    ordinal: ['ordinal', optional(number())],
    itemVariationCount: ['item_variation_count', optional(number())],
  }
);
