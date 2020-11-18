import {
  array,
  boolean,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CatalogCategory, catalogCategorySchema } from './catalogCategory';
import {
  CatalogCustomAttributeDefinition,
  catalogCustomAttributeDefinitionSchema,
} from './catalogCustomAttributeDefinition';
import {
  CatalogCustomAttributeValue,
  catalogCustomAttributeValueSchema,
} from './catalogCustomAttributeValue';
import { CatalogDiscount, catalogDiscountSchema } from './catalogDiscount';
import { CatalogImage, catalogImageSchema } from './catalogImage';
import { CatalogItem, catalogItemSchema } from './catalogItem';
import {
  CatalogItemOption,
  catalogItemOptionSchema,
} from './catalogItemOption';
import {
  CatalogItemOptionValue,
  catalogItemOptionValueSchema,
} from './catalogItemOptionValue';
import {
  CatalogItemVariation,
  catalogItemVariationSchema,
} from './catalogItemVariation';
import {
  CatalogMeasurementUnit,
  catalogMeasurementUnitSchema,
} from './catalogMeasurementUnit';
import { CatalogModifier, catalogModifierSchema } from './catalogModifier';
import {
  CatalogModifierList,
  catalogModifierListSchema,
} from './catalogModifierList';
import {
  CatalogPricingRule,
  catalogPricingRuleSchema,
} from './catalogPricingRule';
import {
  CatalogProductSet,
  catalogProductSetSchema,
} from './catalogProductSet';
import {
  CatalogQuickAmountsSettings,
  catalogQuickAmountsSettingsSchema,
} from './catalogQuickAmountsSettings';
import {
  CatalogSubscriptionPlan,
  catalogSubscriptionPlanSchema,
} from './catalogSubscriptionPlan';
import { CatalogTax, catalogTaxSchema } from './catalogTax';
import {
  CatalogTimePeriod,
  catalogTimePeriodSchema,
} from './catalogTimePeriod';
import { CatalogV1Id, catalogV1IdSchema } from './catalogV1Id';

/**
 * The wrapper object for the Catalog entries of a given object type.
 * The type of a particular `CatalogObject` is determined by the value of the
 * `type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.
 * For example, the following list shows some instances of `CatalogObject` of a given `type` and
 * their corresponding data atrribute that can be set:
 * - For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.
 * - For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.
 * - For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.
 * - For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.
 * - For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.
 * - For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.
 * - For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.
 * - For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.
 * - For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.
 * - For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.
 * - For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.
 * - For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.
 * - For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.
 * For a more detailed discussion of the Catalog data model, please see the
 * [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
 */
export interface CatalogObject {
  /**
   * Possible types of CatalogObjects returned from the Catalog, each
   * containing type-specific properties in the `*_data` field corresponding to the object type.
   */
  type: string;
  /**
   * An identifier to reference this object in the catalog. When a new `CatalogObject`
   * is inserted, the client should set the id to a temporary identifier starting with
   * a "`#`" character. Other objects being inserted or updated within the same request
   * may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that
   * replaces the temporary identifier for all future references.
   */
  id: string;
  /**
   * Last modification [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) in RFC 3339 format, e.g., `"2016-08-15T23:59:33.123Z"`
   * would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
   */
  updatedAt?: string;
  /**
   * The version of the object. When updating an object, the version supplied
   * must match the version in the database, otherwise the write will be rejected as conflicting.
   */
  version?: number;
  /**
   * If `true`, the object has been deleted from the database. Must be `false` for new objects
   * being inserted. When deleted, the `updated_at` field will equal the deletion time.
   */
  isDeleted?: boolean;
  /**
   * A map (key-value pairs) of application-defined custom attribute values. The value of a key-value pair
   * is a [CatalogCustomAttributeValue](#type-CatalogCustomAttributeValue) object. The key is the `key` attribute
   * value defined in the associated [CatalogCustomAttributeDefinition](#type-CatalogCustomAttributeDefinition)
   * object defined by the application making the request.
   * If the `CatalogCustomAttributeDefinition` object is
   * defined by another application, the `CatalogCustomAttributeDefinition`'s key attribute value is prefixed by
   * the defining application ID. For example, if the `CatalogCustomAttributeDefinition` has a `key` attribute of
   * `"cocoa_brand"` and the defining application ID is `"abcd1234"`, the key in the map is `"abcd1234:cocoa_brand"`
   * if the application making the request is different from the application defining the custom attribute definition.
   * Otherwise, the key used in the map is simply `"cocoa_brand"`.
   * Application-defined custom attributes that are set at a global (location-independent) level.
   * Custom attribute values are intended to store additional information about a catalog object
   * or associations with an entity in another system. Do not use custom attributes
   * to store any sensitive information (personally identifiable information, card details, etc.).
   */
  customAttributeValues?: Record<string, CatalogCustomAttributeValue>;
  /**
   * The Connect v1 IDs for this object at each location where it is present, where they
   * differ from the object's Connect V2 ID. The field will only be present for objects that
   * have been created or modified by legacy APIs.
   */
  catalogV1Ids?: CatalogV1Id[];
  /**
   * If `true`, this object is present at all locations (including future locations), except where specified in
   * the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations),
   * except where specified in the `present_at_location_ids` field. If not specified, defaults to `true`.
   */
  presentAtAllLocations?: boolean;
  /** A list of locations where the object is present, even if `present_at_all_locations` is `false`. */
  presentAtLocationIds?: string[];
  /** A list of locations where the object is not present, even if `present_at_all_locations` is `true`. */
  absentAtLocationIds?: string[];
  /** Identifies the `CatalogImage` attached to this `CatalogObject`. */
  imageId?: string;
  /** A [CatalogObject](#type-CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog. */
  itemData?: CatalogItem;
  /** A category to which a `CatalogItem` instance belongs. */
  categoryData?: CatalogCategory;
  /**
   * An item variation (i.e., product) in the Catalog object model. Each item
   * may have a maximum of 250 item variations.
   */
  itemVariationData?: CatalogItemVariation;
  /** A tax applicable to an item. */
  taxData?: CatalogTax;
  /** A discount applicable to items. */
  discountData?: CatalogDiscount;
  /**
   * A list of modifiers applicable to items at the time of sale.
   * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
   * may contain "Ketchup", "Mustard", and "Relish" modifiers.
   * Use the `selection_type` field to specify whether or not multiple selections from
   * the modifier list are allowed.
   */
  modifierListData?: CatalogModifierList;
  /** A modifier applicable to items at the time of sale. */
  modifierData?: CatalogModifier;
  /** Represents a time period - either a single period or a repeating period. */
  timePeriodData?: CatalogTimePeriod;
  /**
   * Represents a collection of catalog objects for the purpose of applying a
   * `PricingRule`. Including a catalog object will include all of its subtypes.
   * For example, including a category in a product set will include all of its
   * items and associated item variations in the product set. Including an item in
   * a product set will also include its item variations.
   */
  productSetData?: CatalogProductSet;
  /**
   * Defines how discounts are automatically applied to a set of items that match the pricing rule
   * during the active time period.
   */
  pricingRuleData?: CatalogPricingRule;
  /**
   * An image file to use in Square catalogs. It can be associated with catalog
   * items, item variations, and categories.
   */
  imageData?: CatalogImage;
  /**
   * Represents the unit used to measure a `CatalogItemVariation` and
   * specifies the precision for decimal quantities.
   */
  measurementUnitData?: CatalogMeasurementUnit;
  /**
   * Describes a subscription plan. For more information, see
   * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
   */
  subscriptionPlanData?: CatalogSubscriptionPlan;
  /** A group of variations for a `CatalogItem`. */
  itemOptionData?: CatalogItemOption;
  /**
   * An enumerated value that can link a
   * `CatalogItemVariation` to an item option as one of
   * its item option values.
   */
  itemOptionValueData?: CatalogItemOptionValue;
  /**
   * Contains information defining a custom attribute. Custom attributes are
   * intended to store additional information about a catalog object or to associate a
   * catalog object with an entity in another system. Do not use custom attributes
   * to store any sensitive information (personally identifiable information, card details, etc.).
   * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
   */
  customAttributeDefinitionData?: CatalogCustomAttributeDefinition;
  /** A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts. */
  quickAmountsSettingsData?: CatalogQuickAmountsSettings;
}

export const catalogObjectSchema: Schema<CatalogObject> = object({
  type: ['type', string()],
  id: ['id', string()],
  updatedAt: ['updated_at', optional(string())],
  version: ['version', optional(number())],
  isDeleted: ['is_deleted', optional(boolean())],
  customAttributeValues: [
    'custom_attribute_values',
    optional(dict(lazy(() => catalogCustomAttributeValueSchema))),
  ],
  catalogV1Ids: [
    'catalog_v1_ids',
    optional(array(lazy(() => catalogV1IdSchema))),
  ],
  presentAtAllLocations: ['present_at_all_locations', optional(boolean())],
  presentAtLocationIds: ['present_at_location_ids', optional(array(string()))],
  absentAtLocationIds: ['absent_at_location_ids', optional(array(string()))],
  imageId: ['image_id', optional(string())],
  itemData: ['item_data', optional(lazy(() => catalogItemSchema))],
  categoryData: ['category_data', optional(lazy(() => catalogCategorySchema))],
  itemVariationData: [
    'item_variation_data',
    optional(lazy(() => catalogItemVariationSchema)),
  ],
  taxData: ['tax_data', optional(lazy(() => catalogTaxSchema))],
  discountData: ['discount_data', optional(lazy(() => catalogDiscountSchema))],
  modifierListData: [
    'modifier_list_data',
    optional(lazy(() => catalogModifierListSchema)),
  ],
  modifierData: ['modifier_data', optional(lazy(() => catalogModifierSchema))],
  timePeriodData: [
    'time_period_data',
    optional(lazy(() => catalogTimePeriodSchema)),
  ],
  productSetData: [
    'product_set_data',
    optional(lazy(() => catalogProductSetSchema)),
  ],
  pricingRuleData: [
    'pricing_rule_data',
    optional(lazy(() => catalogPricingRuleSchema)),
  ],
  imageData: ['image_data', optional(lazy(() => catalogImageSchema))],
  measurementUnitData: [
    'measurement_unit_data',
    optional(lazy(() => catalogMeasurementUnitSchema)),
  ],
  subscriptionPlanData: [
    'subscription_plan_data',
    optional(lazy(() => catalogSubscriptionPlanSchema)),
  ],
  itemOptionData: [
    'item_option_data',
    optional(lazy(() => catalogItemOptionSchema)),
  ],
  itemOptionValueData: [
    'item_option_value_data',
    optional(lazy(() => catalogItemOptionValueSchema)),
  ],
  customAttributeDefinitionData: [
    'custom_attribute_definition_data',
    optional(lazy(() => catalogCustomAttributeDefinitionSchema)),
  ],
  quickAmountsSettingsData: [
    'quick_amounts_settings_data',
    optional(lazy(() => catalogQuickAmountsSettingsSchema)),
  ],
});
