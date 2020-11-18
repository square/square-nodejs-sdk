
# Retrieve Catalog Object Response

## Structure

`RetrieveCatalogObjectResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `object` | [`CatalogObject`](/doc/models/catalog-object.md) | Optional | The wrapper object for the Catalog entries of a given object type.<br><br>The type of a particular `CatalogObject` is determined by the value of the<br>`type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.<br>For example, the following list shows some instances of `CatalogObject` of a given `type` and<br>their corresponding data atrribute that can be set:<br><br>- For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.<br>- For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.<br>- For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.<br>- For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.<br>- For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.<br>- For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.<br>- For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.<br>- For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.<br>- For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.<br>- For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.<br>- For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.<br>- For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.<br>- For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.<br><br>For a more detailed discussion of the Catalog data model, please see the<br>[Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide. |
| `relatedObjects` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | A list of `CatalogObject`s referenced by the object in the `object` field. |

## Example (as JSON)

```json
{
  "object": {
    "id": "W62UWFY35CWMYGVWK6TWJDNI",
    "is_deleted": false,
    "item_data": {
      "category_id": "BJNQCF2FJ6S6UIDT65ABHLRX",
      "description": "Hot Leaf Juice",
      "name": "Tea",
      "tax_ids": [
        "HURXQOOAIC4IZSI2BEXQRYFY"
      ],
      "variations": [
        {
          "id": "2TZFAOHWGG7PAK2QEXWYPZSP",
          "is_deleted": false,
          "item_variation_data": {
            "item_id": "W62UWFY35CWMYGVWK6TWJDNI",
            "name": "Mug",
            "ordinal": 0,
            "price_money": {
              "amount": 150,
              "currency": "USD"
            },
            "pricing_type": "FIXED_PRICING"
          },
          "present_at_all_locations": true,
          "type": "ITEM_VARIATION",
          "updated_at": "2016-11-16T22:25:24.878Z",
          "version": 1479335124878
        }
      ]
    },
    "present_at_all_locations": true,
    "type": "ITEM",
    "updated_at": "2016-11-16T22:25:24.878Z",
    "version": 1479335124878
  },
  "related_objects": [
    {
      "category_data": {
        "name": "Beverages"
      },
      "id": "BJNQCF2FJ6S6UIDT65ABHLRX",
      "is_deleted": false,
      "present_at_all_locations": true,
      "type": "CATEGORY",
      "updated_at": "2016-11-16T22:25:24.878Z",
      "version": 1479335124878
    },
    {
      "id": "HURXQOOAIC4IZSI2BEXQRYFY",
      "is_deleted": false,
      "present_at_all_locations": true,
      "tax_data": {
        "calculation_phase": "TAX_SUBTOTAL_PHASE",
        "enabled": true,
        "inclusion_type": "ADDITIVE",
        "name": "Sales Tax",
        "percentage": "5.0"
      },
      "type": "TAX",
      "updated_at": "2016-11-16T22:25:24.878Z",
      "version": 1479335124878
    }
  ]
}
```

