
# Catalog Object

The wrapper object for the catalog entries of a given object type.

Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data to yield the corresponding type of catalog object.

For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem` instance.

In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting `CatalogObject` instance is also a `Catalog<ObjectType>` instance.

For a more detailed discussion of the Catalog data model, please see the
[Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.

## Structure

`CatalogObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`string`](../../doc/models/catalog-object-type.md) | Required | Possible types of CatalogObjects returned from the catalog, each<br>containing type-specific properties in the `*_data` field corresponding to the specified object type. |
| `id` | `string` | Required | An identifier to reference this object in the catalog. When a new `CatalogObject`<br>is inserted, the client should set the id to a temporary identifier starting with<br>a "`#`" character. Other objects being inserted or updated within the same request<br>may use this identifier to refer to the new object.<br><br>When the server receives the new object, it will supply a unique identifier that<br>replaces the temporary identifier for all future references.<br>**Constraints**: *Minimum Length*: `1` |
| `updatedAt` | `string \| undefined` | Optional | Last modification [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) in RFC 3339 format, e.g., `"2016-08-15T23:59:33.123Z"`<br>would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds. |
| `version` | `bigint \| undefined` | Optional | The version of the object. When updating an object, the version supplied<br>must match the version in the database, otherwise the write will be rejected as conflicting. |
| `isDeleted` | `boolean \| null \| undefined` | Optional | If `true`, the object has been deleted from the database. Must be `false` for new objects<br>being inserted. When deleted, the `updated_at` field will equal the deletion time. |
| `customAttributeValues` | [`Record<string, CatalogCustomAttributeValue> \| null \| undefined`](../../doc/models/catalog-custom-attribute-value.md) | Optional | A map (key-value pairs) of application-defined custom attribute values. The value of a key-value pair<br>is a [CatalogCustomAttributeValue](entity:CatalogCustomAttributeValue) object. The key is the `key` attribute<br>value defined in the associated [CatalogCustomAttributeDefinition](entity:CatalogCustomAttributeDefinition)<br>object defined by the application making the request.<br><br>If the `CatalogCustomAttributeDefinition` object is<br>defined by another application, the `CatalogCustomAttributeDefinition`'s key attribute value is prefixed by<br>the defining application ID. For example, if the `CatalogCustomAttributeDefinition` has a `key` attribute of<br>`"cocoa_brand"` and the defining application ID is `"abcd1234"`, the key in the map is `"abcd1234:cocoa_brand"`<br>if the application making the request is different from the application defining the custom attribute definition.<br>Otherwise, the key used in the map is simply `"cocoa_brand"`.<br><br>Application-defined custom attributes are set at a global (location-independent) level.<br>Custom attribute values are intended to store additional information about a catalog object<br>or associations with an entity in another system. Do not use custom attributes<br>to store any sensitive information (personally identifiable information, card details, etc.). |
| `catalogV1Ids` | [`CatalogV1Id[] \| null \| undefined`](../../doc/models/catalog-v1-id.md) | Optional | The Connect v1 IDs for this object at each location where it is present, where they<br>differ from the object's Connect V2 ID. The field will only be present for objects that<br>have been created or modified by legacy APIs. |
| `presentAtAllLocations` | `boolean \| null \| undefined` | Optional | If `true`, this object is present at all locations (including future locations), except where specified in<br>the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations),<br>except where specified in the `present_at_location_ids` field. If not specified, defaults to `true`. |
| `presentAtLocationIds` | `string[] \| null \| undefined` | Optional | A list of locations where the object is present, even if `present_at_all_locations` is `false`.<br>This can include locations that are deactivated. |
| `absentAtLocationIds` | `string[] \| null \| undefined` | Optional | A list of locations where the object is not present, even if `present_at_all_locations` is `true`.<br>This can include locations that are deactivated. |
| `itemData` | [`CatalogItem \| undefined`](../../doc/models/catalog-item.md) | Optional | A [CatalogObject](../../doc/models/catalog-object.md) instance of the `ITEM` type, also referred to as an item, in the catalog. |
| `categoryData` | [`CatalogCategory \| undefined`](../../doc/models/catalog-category.md) | Optional | A category to which a `CatalogItem` instance belongs. |
| `itemVariationData` | [`CatalogItemVariation \| undefined`](../../doc/models/catalog-item-variation.md) | Optional | An item variation, representing a product for sale, in the Catalog object model. Each [item](../../doc/models/catalog-item.md) must have at least one<br>item variation and can have at most 250 item variations.<br><br>An item variation can be sellable, stockable, or both if it has a unit of measure for its count for the sold number of the variation, the stocked<br>number of the variation, or both. For example, when a variation representing wine is stocked and sold by the bottle, the variation is both<br>stockable and sellable. But when a variation of the wine is sold by the glass, the sold units cannot be used as a measure of the stocked units. This by-the-glass<br>variation is sellable, but not stockable. To accurately keep track of the wine's inventory count at any time, the sellable count must be<br>converted to stockable count. Typically, the seller defines this unit conversion. For example, 1 bottle equals 5 glasses. The Square API exposes<br>the `stockable_conversion` property on the variation to specify the conversion. Thus, when two glasses of the wine are sold, the sellable count<br>decreases by 2, and the stockable count automatically decreases by 0.4 bottle according to the conversion. |
| `taxData` | [`CatalogTax \| undefined`](../../doc/models/catalog-tax.md) | Optional | A tax applicable to an item. |
| `discountData` | [`CatalogDiscount \| undefined`](../../doc/models/catalog-discount.md) | Optional | A discount applicable to items. |
| `modifierListData` | [`CatalogModifierList \| undefined`](../../doc/models/catalog-modifier-list.md) | Optional | For a text-based modifier, this encapsulates the modifier's text when its `modifier_type` is `TEXT`.<br>For example, to sell T-shirts with custom prints, a text-based modifier can be used to capture the buyer-supplied<br>text string to be selected for the T-shirt at the time of sale.<br><br>For non text-based modifiers, this encapsulates a non-empty list of modifiers applicable to items<br>at the time of sale. Each element of the modifier list is a `CatalogObject` instance of the `MODIFIER` type.  <br>For example, a "Condiments" modifier list applicable to a "Hot Dog" item<br>may contain "Ketchup", "Mustard", and "Relish" modifiers.<br><br>A non text-based modifier can be applied to the modified item once or multiple times, if the `selection_type` field<br>is set to `SINGLE` or `MULTIPLE`, respectively. On the other hand, a text-based modifier can be applied to the item<br>only once and the `selection_type` field is always set to `SINGLE`. |
| `modifierData` | [`CatalogModifier \| undefined`](../../doc/models/catalog-modifier.md) | Optional | A modifier applicable to items at the time of sale. An example of a modifier is a Cheese add-on to a Burger item. |
| `timePeriodData` | [`CatalogTimePeriod \| undefined`](../../doc/models/catalog-time-period.md) | Optional | Represents a time period - either a single period or a repeating period. |
| `productSetData` | [`CatalogProductSet \| undefined`](../../doc/models/catalog-product-set.md) | Optional | Represents a collection of catalog objects for the purpose of applying a<br>`PricingRule`. Including a catalog object will include all of its subtypes.<br>For example, including a category in a product set will include all of its<br>items and associated item variations in the product set. Including an item in<br>a product set will also include its item variations. |
| `pricingRuleData` | [`CatalogPricingRule \| undefined`](../../doc/models/catalog-pricing-rule.md) | Optional | Defines how discounts are automatically applied to a set of items that match the pricing rule<br>during the active time period. |
| `imageData` | [`CatalogImage \| undefined`](../../doc/models/catalog-image.md) | Optional | An image file to use in Square catalogs. It can be associated with<br>`CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, and `CatalogModifierList` objects.<br>Only the images on items and item variations are exposed in Dashboard.<br>Only the first image on an item is displayed in Square Point of Sale (SPOS).<br>Images on items and variations are displayed through Square Online Store.<br>Images on other object types are for use by 3rd party application developers. |
| `measurementUnitData` | [`CatalogMeasurementUnit \| undefined`](../../doc/models/catalog-measurement-unit.md) | Optional | Represents the unit used to measure a `CatalogItemVariation` and<br>specifies the precision for decimal quantities. |
| `subscriptionPlanData` | [`CatalogSubscriptionPlan \| undefined`](../../doc/models/catalog-subscription-plan.md) | Optional | Describes a subscription plan. A subscription plan represents what you want to sell in a subscription model, and includes references to each of the associated subscription plan variations.<br>For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations). |
| `itemOptionData` | [`CatalogItemOption \| undefined`](../../doc/models/catalog-item-option.md) | Optional | A group of variations for a `CatalogItem`. |
| `itemOptionValueData` | [`CatalogItemOptionValue \| undefined`](../../doc/models/catalog-item-option-value.md) | Optional | An enumerated value that can link a<br>`CatalogItemVariation` to an item option as one of<br>its item option values. |
| `customAttributeDefinitionData` | [`CatalogCustomAttributeDefinition \| undefined`](../../doc/models/catalog-custom-attribute-definition.md) | Optional | Contains information defining a custom attribute. Custom attributes are<br>intended to store additional information about a catalog object or to associate a<br>catalog object with an entity in another system. Do not use custom attributes<br>to store any sensitive information (personally identifiable information, card details, etc.).<br>[Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes) |
| `quickAmountsSettingsData` | [`CatalogQuickAmountsSettings \| undefined`](../../doc/models/catalog-quick-amounts-settings.md) | Optional | A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts. |
| `subscriptionPlanVariationData` | [`CatalogSubscriptionPlanVariation \| undefined`](../../doc/models/catalog-subscription-plan-variation.md) | Optional | Describes a subscription plan variation. A subscription plan variation represents how the subscription for a product or service is sold.<br>For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations). |
| `availabilityPeriodData` | [`CatalogAvailabilityPeriod \| undefined`](../../doc/models/catalog-availability-period.md) | Optional | Represents a time period of availability. |

## Example (as JSON)

```json
{
  "type": "TIME_PERIOD",
  "id": "id4",
  "category_data": {
    "object": {
      "category_data": {
        "name": "Beverages"
      },
      "id": "#Beverages",
      "present_at_all_locations": true,
      "type": "CATEGORY"
    }
  },
  "tax_data": {
    "object": {
      "id": "#SalesTax",
      "present_at_all_locations": true,
      "tax_data": {
        "calculation_phase": "TAX_SUBTOTAL_PHASE",
        "enabled": true,
        "fee_applies_to_custom_amounts": true,
        "inclusion_type": "ADDITIVE",
        "name": "Sales Tax",
        "percentage": "5.0"
      },
      "type": "TAX"
    }
  },
  "discount_data": {
    "object": {
      "discount_data": {
        "discount_type": "FIXED_PERCENTAGE",
        "label_color": "red",
        "name": "Welcome to the Dark(Roast) Side!",
        "percentage": "5.4",
        "pin_required": false
      },
      "id": "#Maythe4th",
      "present_at_all_locations": true,
      "type": "DISCOUNT"
    }
  },
  "modifier_data": {
    "object": {
      "modifier_data": {
        "name": "Almond Milk",
        "price_money": {
          "amount": 250,
          "currency": "USD"
        }
      },
      "present_at_all_locations": true,
      "type": "MODIFIER"
    }
  },
  "updated_at": "updated_at0",
  "version": 186,
  "is_deleted": false,
  "custom_attribute_values": {
    "key0": {
      "name": "name8",
      "string_value": "string_value2",
      "custom_attribute_definition_id": "custom_attribute_definition_id4",
      "type": "STRING",
      "number_value": "number_value8"
    },
    "key1": {
      "name": "name8",
      "string_value": "string_value2",
      "custom_attribute_definition_id": "custom_attribute_definition_id4",
      "type": "STRING",
      "number_value": "number_value8"
    },
    "key2": {
      "name": "name8",
      "string_value": "string_value2",
      "custom_attribute_definition_id": "custom_attribute_definition_id4",
      "type": "STRING",
      "number_value": "number_value8"
    }
  },
  "catalog_v1_ids": [
    {
      "catalog_v1_id": "catalog_v1_id4",
      "location_id": "location_id4"
    },
    {
      "catalog_v1_id": "catalog_v1_id4",
      "location_id": "location_id4"
    },
    {
      "catalog_v1_id": "catalog_v1_id4",
      "location_id": "location_id4"
    }
  ]
}
```

