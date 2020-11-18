import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CatalogItemModifierListInfo,
  catalogItemModifierListInfoSchema,
} from './catalogItemModifierListInfo';
import {
  CatalogItemOptionForItem,
  catalogItemOptionForItemSchema,
} from './catalogItemOptionForItem';
import { CatalogObject, catalogObjectSchema } from './catalogObject';

/** A [CatalogObject](#type-CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog. */
export interface CatalogItem {
  /** The item's name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points. */
  name?: string;
  /** The item's description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  description?: string;
  /**
   * The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.
   * This attribute is searchable, and its value length is of Unicode code points.
   */
  abbreviation?: string;
  /** The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code. */
  labelColor?: string;
  /** If `true`, the item can be added to shipping orders from the merchant's online store. */
  availableOnline?: boolean;
  /** If `true`, the item can be added to pickup orders from the merchant's online store. */
  availableForPickup?: boolean;
  /** If `true`, the item can be added to electronically fulfilled orders from the merchant's online store. */
  availableElectronically?: boolean;
  /** The ID of the item's category, if any. */
  categoryId?: string;
  /**
   * A set of IDs indicating the taxes enabled for
   * this item. When updating an item, any taxes listed here will be added to the item.
   * Taxes may also be added to or deleted from an item using `UpdateItemTaxes`.
   */
  taxIds?: string[];
  /**
   * A set of `CatalogItemModifierListInfo` objects
   * representing the modifier lists that apply to this item, along with the overrides and min
   * and max limits that are specific to this item. Modifier lists
   * may also be added to or deleted from an item using `UpdateItemModifierLists`.
   */
  modifierListInfo?: CatalogItemModifierListInfo[];
  /** A list of CatalogObjects containing the `CatalogItemVariation`s for this item. */
  variations?: CatalogObject[];
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
  skipModifierScreen?: boolean;
  /**
   * List of item options IDs for this item. Used to manage and group item
   * variations in a specified order.
   * Maximum: 6 item options.
   */
  itemOptions?: CatalogItemOptionForItem[];
}

export const catalogItemSchema: Schema<CatalogItem> = object({
  name: ['name', optional(string())],
  description: ['description', optional(string())],
  abbreviation: ['abbreviation', optional(string())],
  labelColor: ['label_color', optional(string())],
  availableOnline: ['available_online', optional(boolean())],
  availableForPickup: ['available_for_pickup', optional(boolean())],
  availableElectronically: ['available_electronically', optional(boolean())],
  categoryId: ['category_id', optional(string())],
  taxIds: ['tax_ids', optional(array(string()))],
  modifierListInfo: [
    'modifier_list_info',
    optional(array(lazy(() => catalogItemModifierListInfoSchema))),
  ],
  variations: ['variations', optional(array(lazy(() => catalogObjectSchema)))],
  productType: ['product_type', optional(string())],
  skipModifierScreen: ['skip_modifier_screen', optional(boolean())],
  itemOptions: [
    'item_options',
    optional(array(lazy(() => catalogItemOptionForItemSchema))),
  ],
});
