
# Upsert Catalog Object Response

## Structure

`UpsertCatalogObjectResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `catalogObject` | [`CatalogObject \| undefined`](/doc/models/catalog-object.md) | Optional | The wrapper object for the Catalog entries of a given object type.<br><br>The type of a particular `CatalogObject` is determined by the value of the<br>`type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.<br>For example, the following list shows some instances of `CatalogObject` of a given `type` and<br>their corresponding data attribute that can be set:<br><br>- For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.<br>- For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.<br>- For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.<br>- For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.<br>- For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.<br>- For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.<br>- For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.<br>- For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.<br>- For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.<br>- For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.<br>- For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.<br>- For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.<br>- For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.<br><br>For a more detailed discussion of the Catalog data model, please see the<br>[Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide. |
| `idMappings` | [`CatalogIdMapping[] \| undefined`](/doc/models/catalog-id-mapping.md) | Optional | The mapping between client and server IDs for this upsert. |

## Example (as JSON)

```json
{
  "catalog_object": {
    "id": "R2TA2FOBUGCJZNIWJSOSNAI4",
    "is_deleted": false,
    "item_data": {
      "abbreviation": "Ch",
      "description": "Hot Chocolate",
      "name": "Cocoa",
      "product_type": "REGULAR",
      "variations": [
        {
          "id": "QRT53UP4LITLWGOGBZCUWP63",
          "is_deleted": false,
          "item_variation_data": {
            "item_id": "R2TA2FOBUGCJZNIWJSOSNAI4",
            "name": "Small",
            "ordinal": 0,
            "pricing_type": "VARIABLE_PRICING",
            "stockable": true
          },
          "present_at_all_locations": true,
          "type": "ITEM_VARIATION",
          "updated_at": "2021-06-14T15:51:39.021Z",
          "version": 1623685899021
        },
        {
          "id": "NS77DKEIQ3AEQTCP727DSA7U",
          "is_deleted": false,
          "item_variation_data": {
            "item_id": "R2TA2FOBUGCJZNIWJSOSNAI4",
            "name": "Large",
            "ordinal": 1,
            "price_money": {
              "amount": 400,
              "currency": "USD"
            },
            "pricing_type": "FIXED_PRICING",
            "stockable": true
          },
          "present_at_all_locations": true,
          "type": "ITEM_VARIATION",
          "updated_at": "2021-06-14T15:51:39.021Z",
          "version": 1623685899021
        }
      ]
    },
    "present_at_all_locations": true,
    "type": "ITEM",
    "updated_at": "2021-06-14T15:51:39.021Z",
    "version": 1623685899021
  },
  "id_mappings": [
    {
      "client_object_id": "#Cocoa",
      "object_id": "R2TA2FOBUGCJZNIWJSOSNAI4"
    },
    {
      "client_object_id": "#Small",
      "object_id": "QRT53UP4LITLWGOGBZCUWP63"
    },
    {
      "client_object_id": "#Large",
      "object_id": "NS77DKEIQ3AEQTCP727DSA7U"
    }
  ]
}
```

