
# Retrieve Catalog Object Response

## Structure

`RetrieveCatalogObjectResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on any errors encountered. |
| `object` | [`CatalogObject`](/doc/models/catalog-object.md) | Optional | The wrapper object for the Catalog entries of a given object type.<br><br>The type of a particular `CatalogObject` is determined by the value of the<br>`type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.<br>For example, the following list shows some instances of `CatalogObject` of a given `type` and<br>their corresponding data atrribute that can be set:<br><br>- For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.<br>- For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.<br>- For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.<br>- For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.<br>- For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.<br>- For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.<br>- For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.<br>- For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.<br>- For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.<br>- For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.<br>- For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.<br>- For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.<br>- For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.<br><br>For a more detailed discussion of the Catalog data model, please see the<br>[Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide. |
| `related_objects` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | A list of CatalogObjects referenced by the object in the `object` field. |

## Example (as JSON)

```json
{
  "object": {
    "type": "ITEM",
    "id": "W62UWFY35CWMYGVWK6TWJDNI",
    "updated_at": "2016-11-16T22:25:24.878Z",
    "version": 1479335124878,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Tea",
      "description": "Hot Leaf Juice",
      "category_id": "BJNQCF2FJ6S6UIDT65ABHLRX",
      "tax_ids": [
        "HURXQOOAIC4IZSI2BEXQRYFY"
      ],
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "2TZFAOHWGG7PAK2QEXWYPZSP",
          "updated_at": "2016-11-16T22:25:24.878Z",
          "version": 1479335124878,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "W62UWFY35CWMYGVWK6TWJDNI",
            "name": "Mug",
            "ordinal": 0,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 150,
              "currency": "USD"
            }
          }
        }
      ]
    }
  },
  "related_objects": [
    {
      "type": "CATEGORY",
      "id": "BJNQCF2FJ6S6UIDT65ABHLRX",
      "updated_at": "2016-11-16T22:25:24.878Z",
      "version": 1479335124878,
      "is_deleted": false,
      "present_at_all_locations": true,
      "category_data": {
        "name": "Beverages"
      }
    },
    {
      "type": "TAX",
      "id": "HURXQOOAIC4IZSI2BEXQRYFY",
      "updated_at": "2016-11-16T22:25:24.878Z",
      "version": 1479335124878,
      "is_deleted": false,
      "present_at_all_locations": true,
      "tax_data": {
        "name": "Sales Tax",
        "calculation_phase": "TAX_SUBTOTAL_PHASE",
        "inclusion_type": "ADDITIVE",
        "percentage": "5.0",
        "enabled": true
      }
    }
  ]
}
```

