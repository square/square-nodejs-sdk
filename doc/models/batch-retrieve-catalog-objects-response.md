
# Batch Retrieve Catalog Objects Response

## Structure

`BatchRetrieveCatalogObjectsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `objects` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | A list of [CatalogObject](entity:CatalogObject)s returned. |
| `relatedObjects` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | A list of [CatalogObject](entity:CatalogObject)s referenced by the object in the `objects` field. |

## Example (as JSON)

```json
{
  "objects": [
    {
      "id": "W62UWFY35CWMYGVWK6TWJDNI",
      "is_deleted": false,
      "item_data": {
        "categories": [
          {
            "id": "BJNQCF2FJ6S6UIDT65ABHLRX",
            "ordinal": 0
          }
        ],
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
      "version": 1479335124878,
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
    },
    {
      "id": "AA27W3M2GGTF3H6AVPNB77CK",
      "is_deleted": false,
      "item_data": {
        "categories": [
          {
            "id": "BJNQCF2FJ6S6UIDT65ABHLRX",
            "ordinal": 0
          }
        ],
        "description": "Hot Bean Juice",
        "name": "Coffee",
        "tax_ids": [
          "HURXQOOAIC4IZSI2BEXQRYFY"
        ],
        "variations": [
          {
            "id": "LBTYIHNHU52WOIHWT7SNRIYH",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "AA27W3M2GGTF3H6AVPNB77CK",
              "name": "Regular",
              "ordinal": 0,
              "price_money": {
                "amount": 250,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING"
            },
            "present_at_all_locations": true,
            "type": "ITEM_VARIATION",
            "updated_at": "2016-11-16T22:25:24.878Z",
            "version": 1479335124878
          },
          {
            "id": "PKYIC7HGGKW5CYVSCVDEIMHY",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "AA27W3M2GGTF3H6AVPNB77CK",
              "name": "Large",
              "ordinal": 1,
              "price_money": {
                "amount": 350,
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
      "version": 1479335124878,
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
  ],
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
      "version": 1479335124878,
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
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        }
      ]
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
      "version": 1479335124878,
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
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        }
      ]
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

