import { object, optional, Schema, string } from '../schema';

/** A category to which a `CatalogItem` instance belongs. */
export interface CatalogCategory {
  /** The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string;
}

export const catalogCategorySchema: Schema<CatalogCategory> = object({
  name: ['name', optional(string())],
});
