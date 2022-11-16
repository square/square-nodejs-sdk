import { nullable, number, object, optional, Schema, string } from '../schema';

/**
 * An enumerated value that can link a
 * `CatalogItemVariation` to an item option as one of
 * its item option values.
 */
export interface CatalogItemOptionValue {
  /** Unique ID of the associated item option. */
  itemOptionId?: string | null;
  /** Name of this item option value. This is a searchable attribute for use in applicable query filters. */
  name?: string | null;
  /** A human-readable description for the option value. This is a searchable attribute for use in applicable query filters. */
  description?: string | null;
  /**
   * The HTML-supported hex color for the item option (e.g., "#ff8d4e85").
   * Only displayed if `show_colors` is enabled on the parent `ItemOption`. When
   * left unset, `color` defaults to white ("#ffffff") when `show_colors` is
   * enabled on the parent `ItemOption`.
   */
  color?: string | null;
  /** Determines where this option value appears in a list of option values. */
  ordinal?: number | null;
}

export const catalogItemOptionValueSchema: Schema<CatalogItemOptionValue> = object(
  {
    itemOptionId: ['item_option_id', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    color: ['color', optional(nullable(string()))],
    ordinal: ['ordinal', optional(nullable(number()))],
  }
);
