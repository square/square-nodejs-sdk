import { array, nullable, object, optional, Schema, string } from '../schema';

/** A category to which a `CatalogItem` instance belongs. */
export interface CatalogCategory {
  /** The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string | null;
  /**
   * The IDs of images associated with this `CatalogCategory` instance.
   * Currently these images are not displayed by Square, but are free to be displayed in 3rd party applications.
   */
  imageIds?: string[] | null;
}

export const catalogCategorySchema: Schema<CatalogCategory> = object({
  name: ['name', optional(nullable(string()))],
  imageIds: ['image_ids', optional(nullable(array(string())))],
});
