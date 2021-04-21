
# Catalog Object Type

Possible types of CatalogObjects returned from the Catalog, each
containing type-specific properties in the `*_data` field corresponding to the object type.

## Enumeration

`CatalogObjectType`

## Fields

| Name | Description |
|  --- | --- |
| `ITEM` | An item, corresponding to `CatalogItem`. The item-specific data<br>will be stored in the `item_data` field. |
| `IMAGE` | An image, corresponding to `CatalogImage`. The image-specific data<br>will be stored in the `image_data` field. |
| `CATEGORY` | A category, corresponding to `CatalogCategory`. The category-specific data<br>will be stored in the `category_data` field. |
| `ITEM_VARIATION` | An item variation, corresponding to `CatalogItemVariation`. The<br>item variation-specific data will be stored in the `item_variation_data` field. |
| `TAX` | A tax, corresponding to `CatalogTax`. The tax-specific data<br>will be stored in the `tax_data` field. |
| `DISCOUNT` | A discount, corresponding to `CatalogDiscount`. The discount-specific data<br>will be stored in the `discount_data` field. |
| `MODIFIER_LIST` | A modifier list, corresponding to `CatalogModifierList`.<br>The modifier list-specific data will be stored in the `modifier_list_data` field. |
| `MODIFIER` | A modifier, corresponding to `CatalogModifier`. The modifier-specific data<br>will be stored in the `modifier_data` field. |
| `PRICING_RULE` | A pricing rule, corresponding to `CatalogPricingRule`. The pricing-rule-specific data<br>will be stored in the `pricing_rule_data` field. |
| `PRODUCT_SET` | A product set, corresponding to `CatalogProductSet`.<br>The product-set-specific data will be stored in the `product_set_data` field. |
| `TIME_PERIOD` | A time period, corresponding to `CatalogTimePeriod`.<br>The time-period-specific data will be stored in the `time_period_data` field. |
| `MEASUREMENT_UNIT` | A measurement unit, corresponding to `CatalogMeasurementUnit`. The unit of<br>measure and precision in which an item variation should be sold. |
| `SUBSCRIPTION_PLAN` | A subscription plan, corresponding to<br>[CatalogSubscriptionPlan](/doc/models/catalog-subscription-plan.md).<br><br>The subscription plan data is stored in the `subscription_plan_data` field of the<br>[CatalogObject](/doc/models/catalog-object.md). |
| `ITEM_OPTION` | Represents a list of item option values that can be assigned to item<br>variations. For example, a color option or size option for a t-shirt. |
| `ITEM_OPTION_VAL` | Represents an option value associated with one or more item options.<br>For example, an item option of "Size" may have item option values such as<br>"Small" or "Medium". |
| `CUSTOM_ATTRIBUTE_DEFINITION` | Represents the definition of a custom attribute |
| `QUICK_AMOUNTS_SETTINGS` | Represents a set of Quick Amounts and their settings at each location.<br>For example, a location may have a list of both AUTO and MANUAL quick amounts that are set to DISABLED. |

