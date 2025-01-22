
# Retrieve Catalog Object Response

## Structure

`RetrieveCatalogObjectResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `object` | [`CatalogObject \| undefined`](../../doc/models/catalog-object.md) | Optional | The wrapper object for the catalog entries of a given object type.<br><br>Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data to yield the corresponding type of catalog object.<br><br>For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem` instance.<br><br>In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting `CatalogObject` instance is also a `Catalog<ObjectType>` instance.<br><br>For a more detailed discussion of the Catalog data model, please see the<br>[Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide. |
| `relatedObjects` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | A list of `CatalogObject`s referenced by the object in the `object` field. |

## Example (as JSON)

```json
{
  "object": {
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
      }
    ]
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
    }
  ]
}
```

