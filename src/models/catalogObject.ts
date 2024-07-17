import {
  array,
  bigint,
  boolean,
  dict,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CatalogAvailabilityPeriod,
  catalogAvailabilityPeriodSchema,
} from './catalogAvailabilityPeriod';
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
import {
  CatalogSubscriptionPlanVariation,
  catalogSubscriptionPlanVariationSchema,
} from './catalogSubscriptionPlanVariation';
import { CatalogTax, catalogTaxSchema } from './catalogTax';
import {
  CatalogTimePeriod,
  catalogTimePeriodSchema,
} from './catalogTimePeriod';
import { CatalogV1Id, catalogV1IdSchema } from './catalogV1Id';

/**
 * The wrapper object for the catalog entries of a given object type.
 * Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data to yield the corresponding type of catalog object.
 * For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem` instance.
 * In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting `CatalogObject` instance is also a `Catalog<ObjectType>` instance.
 * For a more detailed discussion of the Catalog data model, please see the
 * [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
 */
export interface CatalogObject {
  /**
   * Possible types of CatalogObjects returned from the catalog, each
   * containing type-specific properties in the `*_data` field corresponding to the specified object type.
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
  version?: bigint;
  /**
   * If `true`, the object has been deleted from the database. Must be `false` for new objects
   * being inserted. When deleted, the `updated_at` field will equal the deletion time.
   */
  isDeleted?: boolean | null;
  /**
   * A map (key-value pairs) of application-defined custom attribute values. The value of a key-value pair
   * is a [CatalogCustomAttributeValue](entity:CatalogCustomAttributeValue) object. The key is the `key` attribute
   * value defined in the associated [CatalogCustomAttributeDefinition](entity:CatalogCustomAttributeDefinition)
   * object defined by the application making the request.
   * If the `CatalogCustomAttributeDefinition` object is
   * defined by another application, the `CatalogCustomAttributeDefinition`'s key attribute value is prefixed by
   * the defining application ID. For example, if the `CatalogCustomAttributeDefinition` has a `key` attribute of
   * `"cocoa_brand"` and the defining application ID is `"abcd1234"`, the key in the map is `"abcd1234:cocoa_brand"`
   * if the application making the request is different from the application defining the custom attribute definition.
   * Otherwise, the key used in the map is simply `"cocoa_brand"`.
   * Application-defined custom attributes are set at a global (location-independent) level.
   * Custom attribute values are intended to store additional information about a catalog object
   * or associations with an entity in another system. Do not use custom attributes
   * to store any sensitive information (personally identifiable information, card details, etc.).
   */
  customAttributeValues?: Record<string, CatalogCustomAttributeValue> | null;
  /**
   * The Connect v1 IDs for this object at each location where it is present, where they
   * differ from the object's Connect V2 ID. The field will only be present for objects that
   * have been created or modified by legacy APIs.
   */
  catalogV1Ids?: CatalogV1Id[] | null;
  /**
   * If `true`, this object is present at all locations (including future locations), except where specified in
   * the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations),
   * except where specified in the `present_at_location_ids` field. If not specified, defaults to `true`.
   */
  presentAtAllLocations?: boolean | null;
  /**
   * A list of locations where the object is present, even if `present_at_all_locations` is `false`.
   * This can include locations that are deactivated.
   */
  presentAtLocationIds?: string[] | null;
  /**
   * A list of locations where the object is not present, even if `present_at_all_locations` is `true`.
   * This can include locations that are deactivated.
   */
  absentAtLocationIds?: string[] | null;
  /** A [CatalogObject]($m/CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog. */
  itemData?: CatalogItem;
  /** A category to which a `CatalogItem` instance belongs. */
  categoryData?: CatalogCategory;
  /**
   * An item variation, representing a product for sale, in the Catalog object model. Each [item]($m/CatalogItem) must have at least one
   * item variation and can have at most 250 item variations.
   * An item variation can be sellable, stockable, or both if it has a unit of measure for its count for the sold number of the variation, the stocked
   * number of the variation, or both. For example, when a variation representing wine is stocked and sold by the bottle, the variation is both
   * stockable and sellable. But when a variation of the wine is sold by the glass, the sold units cannot be used as a measure of the stocked units. This by-the-glass
   * variation is sellable, but not stockable. To accurately keep track of the wine's inventory count at any time, the sellable count must be
   * converted to stockable count. Typically, the seller defines this unit conversion. For example, 1 bottle equals 5 glasses. The Square API exposes
   * the `stockable_conversion` property on the variation to specify the conversion. Thus, when two glasses of the wine are sold, the sellable count
   * decreases by 2, and the stockable count automatically decreases by 0.4 bottle according to the conversion.
   */
  itemVariationData?: CatalogItemVariation;
  /** A tax applicable to an item. */
  taxData?: CatalogTax;
  /** A discount applicable to items. */
  discountData?: CatalogDiscount;
  /**
   * For a text-based modifier, this encapsulates the modifier's text when its `modifier_type` is `TEXT`.
   * For example, to sell T-shirts with custom prints, a text-based modifier can be used to capture the buyer-supplied
   * text string to be selected for the T-shirt at the time of sale.
   * For non text-based modifiers, this encapsulates a non-empty list of modifiers applicable to items
   * at the time of sale. Each element of the modifier list is a `CatalogObject` instance of the `MODIFIER` type.
   * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
   * may contain "Ketchup", "Mustard", and "Relish" modifiers.
   * A non text-based modifier can be applied to the modified item once or multiple times, if the `selection_type` field
   * is set to `SINGLE` or `MULTIPLE`, respectively. On the other hand, a text-based modifier can be applied to the item
   * only once and the `selection_type` field is always set to `SINGLE`.
   */
  modifierListData?: CatalogModifierList;
  /** A modifier applicable to items at the time of sale. An example of a modifier is a Cheese add-on to a Burger item. */
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
   * An image file to use in Square catalogs. It can be associated with
   * `CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, and `CatalogModifierList` objects.
   * Only the images on items and item variations are exposed in Dashboard.
   * Only the first image on an item is displayed in Square Point of Sale (SPOS).
   * Images on items and variations are displayed through Square Online Store.
   * Images on other object types are for use by 3rd party application developers.
   */
  imageData?: CatalogImage;
  /**
   * Represents the unit used to measure a `CatalogItemVariation` and
   * specifies the precision for decimal quantities.
   */
  measurementUnitData?: CatalogMeasurementUnit;
  /**
   * Describes a subscription plan. A subscription plan represents what you want to sell in a subscription model, and includes references to each of the associated subscription plan variations.
   * For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
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
  /**
   * Describes a subscription plan variation. A subscription plan variation represents how the subscription for a product or service is sold.
   * For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
   */
  subscriptionPlanVariationData?: CatalogSubscriptionPlanVariation;
  /** Represents a time period of availability. */
  availabilityPeriodData?: CatalogAvailabilityPeriod;
}

export const catalogObjectSchema: Schema<CatalogObject> = object({
  type: ['type', string()],
  id: ['id', string()],
  updatedAt: ['updated_at', optional(string())],
  version: ['version', optional(bigint())],
  isDeleted: ['is_deleted', optional(nullable(boolean()))],
  customAttributeValues: [
    'custom_attribute_values',
    optional(nullable(dict(lazy(() => catalogCustomAttributeValueSchema)))),
  ],
  catalogV1Ids: [
    'catalog_v1_ids',
    optional(nullable(array(lazy(() => catalogV1IdSchema)))),
  ],
  presentAtAllLocations: [
    'present_at_all_locations',
    optional(nullable(boolean())),
  ],
  presentAtLocationIds: [
    'present_at_location_ids',
    optional(nullable(array(string()))),
  ],
  absentAtLocationIds: [
    'absent_at_location_ids',
    optional(nullable(array(string()))),
  ],
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
  subscriptionPlanVariationData: [
    'subscription_plan_variation_data',
    optional(lazy(() => catalogSubscriptionPlanVariationSchema)),
  ],
  availabilityPeriodData: [
    'availability_period_data',
    optional(lazy(() => catalogAvailabilityPeriodSchema)),
  ],
});
