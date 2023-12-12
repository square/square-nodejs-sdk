import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CatalogEcomSeoData,
  catalogEcomSeoDataSchema,
} from './catalogEcomSeoData';
import {
  CatalogObjectCategory,
  catalogObjectCategorySchema,
} from './catalogObjectCategory';
import {
  CategoryPathToRootNode,
  categoryPathToRootNodeSchema,
} from './categoryPathToRootNode';

/** A category to which a `CatalogItem` instance belongs. */
export interface CatalogCategory {
  /** The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string | null;
  /**
   * The IDs of images associated with this `CatalogCategory` instance.
   * Currently these images are not displayed by Square, but are free to be displayed in 3rd party applications.
   */
  imageIds?: string[] | null;
  /** Indicates the type of a category. */
  categoryType?: string;
  /**
   * A category that can be assigned to an item or a parent category that can be assigned
   * to another category. For example, a clothing category can be assigned to a t-shirt item or
   * be made as the parent category to the pants category.
   */
  parentCategory?: CatalogObjectCategory;
  /** Indicates whether a category is a top level category, which does not have any parent_category. */
  isTopLevel?: boolean | null;
  /** A list of IDs representing channels, such as a Square Online site, where the category can be made visible. */
  channels?: string[] | null;
  /** The IDs of the `CatalogAvailabilityPeriod` objects associated with the category. */
  availabilityPeriodIds?: string[] | null;
  /** Indicates whether the category is visible (`true`) or hidden (`false`) on all of the seller's Square Online sites. */
  onlineVisibility?: boolean | null;
  /** The top-level category in a category hierarchy. */
  rootCategory?: string;
  /** SEO data for for a seller's Square Online store. */
  ecomSeoData?: CatalogEcomSeoData;
  /**
   * The path from the category to its root category. The first node of the path is the parent of the category
   * and the last is the root category. The path is empty if the category is a root category.
   */
  pathToRoot?: CategoryPathToRootNode[] | null;
}

export const catalogCategorySchema: Schema<CatalogCategory> = object({
  name: ['name', optional(nullable(string()))],
  imageIds: ['image_ids', optional(nullable(array(string())))],
  categoryType: ['category_type', optional(string())],
  parentCategory: [
    'parent_category',
    optional(lazy(() => catalogObjectCategorySchema)),
  ],
  isTopLevel: ['is_top_level', optional(nullable(boolean()))],
  channels: ['channels', optional(nullable(array(string())))],
  availabilityPeriodIds: [
    'availability_period_ids',
    optional(nullable(array(string()))),
  ],
  onlineVisibility: ['online_visibility', optional(nullable(boolean()))],
  rootCategory: ['root_category', optional(string())],
  ecomSeoData: [
    'ecom_seo_data',
    optional(lazy(() => catalogEcomSeoDataSchema)),
  ],
  pathToRoot: [
    'path_to_root',
    optional(nullable(array(lazy(() => categoryPathToRootNodeSchema)))),
  ],
});
