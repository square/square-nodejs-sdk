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
  CatalogItemFoodAndBeverageDetails,
  catalogItemFoodAndBeverageDetailsSchema,
} from './catalogItemFoodAndBeverageDetails';
import {
  CatalogItemModifierListInfo,
  catalogItemModifierListInfoSchema,
} from './catalogItemModifierListInfo';
import {
  CatalogItemOptionForItem,
  catalogItemOptionForItemSchema,
} from './catalogItemOptionForItem';
import { CatalogObject, catalogObjectSchema } from './catalogObject';
import {
  CatalogObjectCategory,
  catalogObjectCategorySchema,
} from './catalogObjectCategory';

/** A [CatalogObject]($m/CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog. */
export interface CatalogItem {
  /** The item's name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points. */
  name?: string | null;
  /**
   * The item's description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   * Deprecated at 2022-07-20, this field is planned to retire in 6 months. You should migrate to use `description_html` to set the description
   * of the [CatalogItem](entity:CatalogItem) instance.  The `description` and `description_html` field values are kept in sync. If you try to
   * set the both fields, the `description_html` text value overwrites the `description` value. Updates in one field are also reflected in the other,
   * except for when you use an early version before Square API 2022-07-20 and `description_html` is set to blank, setting the `description` value to null
   * does not nullify `description_html`.
   */
  description?: string | null;
  /**
   * The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.
   * This attribute is searchable, and its value length is of Unicode code points.
   */
  abbreviation?: string | null;
  /** The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code. */
  labelColor?: string | null;
  /** Indicates whether the item is taxable (`true`) or non-taxable (`false`). Default is `true`. */
  isTaxable?: boolean | null;
  /** If `true`, the item can be added to shipping orders from the merchant's online store. */
  availableOnline?: boolean | null;
  /** If `true`, the item can be added to pickup orders from the merchant's online store. */
  availableForPickup?: boolean | null;
  /** If `true`, the item can be added to electronically fulfilled orders from the merchant's online store. */
  availableElectronically?: boolean | null;
  /** The ID of the item's category, if any. Deprecated since 2023-12-13. Use `CatalogItem.categories`, instead. */
  categoryId?: string | null;
  /**
   * A set of IDs indicating the taxes enabled for
   * this item. When updating an item, any taxes listed here will be added to the item.
   * Taxes may also be added to or deleted from an item using `UpdateItemTaxes`.
   */
  taxIds?: string[] | null;
  /**
   * A set of `CatalogItemModifierListInfo` objects
   * representing the modifier lists that apply to this item, along with the overrides and min
   * and max limits that are specific to this item. Modifier lists
   * may also be added to or deleted from an item using `UpdateItemModifierLists`.
   */
  modifierListInfo?: CatalogItemModifierListInfo[] | null;
  /**
   * A list of [CatalogItemVariation](entity:CatalogItemVariation) objects for this item. An item must have
   * at least one variation.
   */
  variations?: CatalogObject[] | null;
  /** The type of a CatalogItem. Connect V2 only allows the creation of `REGULAR` or `APPOINTMENTS_SERVICE` items. */
  productType?: string;
  /**
   * If `false`, the Square Point of Sale app will present the `CatalogItem`'s
   * details screen immediately, allowing the merchant to choose `CatalogModifier`s
   * before adding the item to the cart.  This is the default behavior.
   * If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected
   * modifiers, and merchants can edit modifiers by drilling down onto the item's details.
   * Third-party clients are encouraged to implement similar behaviors.
   */
  skipModifierScreen?: boolean | null;
  /**
   * List of item options IDs for this item. Used to manage and group item
   * variations in a specified order.
   * Maximum: 6 item options.
   */
  itemOptions?: CatalogItemOptionForItem[] | null;
  /**
   * The IDs of images associated with this `CatalogItem` instance.
   * These images will be shown to customers in Square Online Store.
   * The first image will show up as the icon for this item in POS.
   */
  imageIds?: string[] | null;
  /**
   * A name to sort the item by. If this name is unspecified, namely, the `sort_name` field is absent, the regular `name` field is used for sorting.
   * Its value must not be empty.
   * It is currently supported for sellers of the Japanese locale only.
   */
  sortName?: string | null;
  /** The list of categories. */
  categories?: CatalogObjectCategory[] | null;
  /**
   * The item's description as expressed in valid HTML elements. The length of this field value, including those of HTML tags,
   * is of Unicode points. With application query filters, the text values of the HTML elements and attributes are searchable. Invalid or
   * unsupported HTML elements or attributes are ignored.
   * Supported HTML elements include:
   * - `a`: Link. Supports linking to website URLs, email address, and telephone numbers.
   * - `b`, `strong`:  Bold text
   * - `br`: Line break
   * - `code`: Computer code
   * - `div`: Section
   * - `h1-h6`: Headings
   * - `i`, `em`: Italics
   * - `li`: List element
   * - `ol`: Numbered list
   * - `p`: Paragraph
   * - `ul`: Bullet list
   * - `u`: Underline
   * Supported HTML attributes include:
   * - `align`: Alignment of the text content
   * - `href`: Link destination
   * - `rel`: Relationship between link's target and source
   * - `target`: Place to open the linked document
   */
  descriptionHtml?: string | null;
  /** A server-generated plaintext version of the `description_html` field, without formatting tags. */
  descriptionPlaintext?: string;
  /** A list of IDs representing channels, such as a Square Online site, where the item can be made visible or available. */
  channels?: string[] | null;
  /** Indicates whether this item is archived (`true`) or not (`false`). */
  isArchived?: boolean | null;
  /** SEO data for for a seller's Square Online store. */
  ecomSeoData?: CatalogEcomSeoData;
  /** The food and beverage-specific details of a `FOOD_AND_BEV` item. */
  foodAndBeverageDetails?: CatalogItemFoodAndBeverageDetails;
  /**
   * A category that can be assigned to an item or a parent category that can be assigned
   * to another category. For example, a clothing category can be assigned to a t-shirt item or
   * be made as the parent category to the pants category.
   */
  reportingCategory?: CatalogObjectCategory;
}

export const catalogItemSchema: Schema<CatalogItem> = object({
  name: ['name', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  abbreviation: ['abbreviation', optional(nullable(string()))],
  labelColor: ['label_color', optional(nullable(string()))],
  isTaxable: ['is_taxable', optional(nullable(boolean()))],
  availableOnline: ['available_online', optional(nullable(boolean()))],
  availableForPickup: ['available_for_pickup', optional(nullable(boolean()))],
  availableElectronically: [
    'available_electronically',
    optional(nullable(boolean())),
  ],
  categoryId: ['category_id', optional(nullable(string()))],
  taxIds: ['tax_ids', optional(nullable(array(string())))],
  modifierListInfo: [
    'modifier_list_info',
    optional(nullable(array(lazy(() => catalogItemModifierListInfoSchema)))),
  ],
  variations: [
    'variations',
    optional(nullable(array(lazy(() => catalogObjectSchema)))),
  ],
  productType: ['product_type', optional(string())],
  skipModifierScreen: ['skip_modifier_screen', optional(nullable(boolean()))],
  itemOptions: [
    'item_options',
    optional(nullable(array(lazy(() => catalogItemOptionForItemSchema)))),
  ],
  imageIds: ['image_ids', optional(nullable(array(string())))],
  sortName: ['sort_name', optional(nullable(string()))],
  categories: [
    'categories',
    optional(nullable(array(lazy(() => catalogObjectCategorySchema)))),
  ],
  descriptionHtml: ['description_html', optional(nullable(string()))],
  descriptionPlaintext: ['description_plaintext', optional(string())],
  channels: ['channels', optional(nullable(array(string())))],
  isArchived: ['is_archived', optional(nullable(boolean()))],
  ecomSeoData: [
    'ecom_seo_data',
    optional(lazy(() => catalogEcomSeoDataSchema)),
  ],
  foodAndBeverageDetails: [
    'food_and_beverage_details',
    optional(lazy(() => catalogItemFoodAndBeverageDetailsSchema)),
  ],
  reportingCategory: [
    'reporting_category',
    optional(lazy(() => catalogObjectCategorySchema)),
  ],
});
