
# Catalog Info Response

## Structure

`CatalogInfoResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `limits` | [`CatalogInfoResponseLimits \| undefined`](../../doc/models/catalog-info-response-limits.md) | Optional | - |
| `standardUnitDescriptionGroup` | [`StandardUnitDescriptionGroup \| undefined`](../../doc/models/standard-unit-description-group.md) | Optional | Group of standard measurement units. |

## Example (as JSON)

```json
{
  "limits": {
    "batch_delete_max_object_ids": 200,
    "batch_retrieve_max_object_ids": 1000,
    "batch_upsert_max_objects_per_batch": 1000,
    "batch_upsert_max_total_objects": 10000,
    "search_max_page_limit": 1000,
    "update_item_modifier_lists_max_item_ids": 1000,
    "update_item_modifier_lists_max_modifier_lists_to_disable": 1000,
    "update_item_modifier_lists_max_modifier_lists_to_enable": 1000,
    "update_item_taxes_max_item_ids": 1000,
    "update_item_taxes_max_taxes_to_disable": 1000,
    "update_item_taxes_max_taxes_to_enable": 1000
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "standard_unit_description_group": {
    "standard_unit_descriptions": [
      {
        "unit": {
          "custom_unit": {
            "name": "name2",
            "abbreviation": "abbreviation4"
          },
          "area_unit": "IMPERIAL_ACRE",
          "length_unit": "IMPERIAL_INCH",
          "volume_unit": "METRIC_MILLILITER",
          "weight_unit": "IMPERIAL_STONE"
        },
        "name": "name4",
        "abbreviation": "abbreviation6"
      },
      {
        "unit": {
          "custom_unit": {
            "name": "name2",
            "abbreviation": "abbreviation4"
          },
          "area_unit": "IMPERIAL_ACRE",
          "length_unit": "IMPERIAL_INCH",
          "volume_unit": "METRIC_MILLILITER",
          "weight_unit": "IMPERIAL_STONE"
        },
        "name": "name4",
        "abbreviation": "abbreviation6"
      }
    ],
    "language_code": "language_code6"
  }
}
```

