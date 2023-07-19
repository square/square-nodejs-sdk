
# Batch Upsert Catalog Objects Response

## Structure

`BatchUpsertCatalogObjectsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `objects` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | The created successfully created CatalogObjects. |
| `updatedAt` | `string \| undefined` | Optional | The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". |
| `idMappings` | [`CatalogIdMapping[] \| undefined`](../../doc/models/catalog-id-mapping.md) | Optional | The mapping between client and server IDs for this upsert. |

## Example (as JSON)

```json
{
  "id_mappings": [
    {
      "client_object_id": "#Tea",
      "object_id": "ZSDZN34NAXDLC6D5ZQMNSOUM"
    },
    {
      "client_object_id": "#Coffee",
      "object_id": "PJMCEBHHUS3OKDB6PYUHLCPP"
    },
    {
      "client_object_id": "#Beverages",
      "object_id": "LYT72K3WGJFFCIMB63XARP3I"
    },
    {
      "client_object_id": "#SalesTax",
      "object_id": "XHSHLHNWSI3HVI4BW5ZUZXI3"
    },
    {
      "client_object_id": "#Tea_Mug",
      "object_id": "NAYHET5R52MIYCEF34ZMAHFM"
    },
    {
      "client_object_id": "#Coffee_Regular",
      "object_id": "OTYDX45SPG7LJQUVCBZI4INH"
    },
    {
      "client_object_id": "#Coffee_Large",
      "object_id": "GZDA3JB37FYVOPI4AOEBOITI"
    }
  ],
  "objects": [
    {
      "id": "ZSDZN34NAXDLC6D5ZQMNSOUM",
      "is_deleted": false,
      "item_data": {
        "category_id": "LYT72K3WGJFFCIMB63XARP3I",
        "description": "Hot Leaf Juice",
        "description_html": "<p><strong>Hot</strong> Leaf Juice</p>",
        "description_plaintext": "Hot Leaf Juice",
        "name": "Tea",
        "tax_ids": [
          "XHSHLHNWSI3HVI4BW5ZUZXI3"
        ],
        "variations": [
          {
            "id": "NAYHET5R52MIYCEF34ZMAHFM",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "ZSDZN34NAXDLC6D5ZQMNSOUM",
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
            "updated_at": "2017-05-10T18:48:39.798Z",
            "version": 1494442119798
          }
        ]
      },
      "present_at_all_locations": true,
      "type": "ITEM",
      "updated_at": "2017-05-10T18:48:39.798Z",
      "version": 1494442119798,
      "custom_attribute_values": {
        "key0": {
          "name": "name9",
          "string_value": "string_value3",
          "custom_attribute_definition_id": "custom_attribute_definition_id3",
          "type": "SELECTION",
          "number_value": "number_value9"
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
          "catalog_v1_id": "catalog_v1_id2",
          "location_id": "location_id2"
        }
      ]
    },
    {
      "id": "PJMCEBHHUS3OKDB6PYUHLCPP",
      "is_deleted": false,
      "item_data": {
        "category_id": "LYT72K3WGJFFCIMB63XARP3I",
        "description": "Hot Bean Juice",
        "description_html": "<p>Hot <em>Bean Juice</em></p>",
        "description_plaintext": "Hot Bean Juice",
        "name": "Coffee",
        "tax_ids": [
          "XHSHLHNWSI3HVI4BW5ZUZXI3"
        ],
        "variations": [
          {
            "id": "OTYDX45SPG7LJQUVCBZI4INH",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "PJMCEBHHUS3OKDB6PYUHLCPP",
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
            "updated_at": "2017-05-10T18:48:39.798Z",
            "version": 1494442119798
          },
          {
            "id": "GZDA3JB37FYVOPI4AOEBOITI",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "PJMCEBHHUS3OKDB6PYUHLCPP",
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
            "updated_at": "2017-05-10T18:48:39.798Z",
            "version": 1494442119798
          }
        ]
      },
      "present_at_all_locations": true,
      "type": "ITEM",
      "updated_at": "2017-05-10T18:48:39.798Z",
      "version": 1494442119798,
      "custom_attribute_values": {
        "key0": {
          "name": "name0",
          "string_value": "string_value4",
          "custom_attribute_definition_id": "custom_attribute_definition_id2",
          "type": "NUMBER",
          "number_value": "number_value0"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id3",
          "location_id": "location_id3"
        },
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        }
      ]
    },
    {
      "category_data": {
        "name": "Beverages"
      },
      "id": "LYT72K3WGJFFCIMB63XARP3I",
      "is_deleted": false,
      "present_at_all_locations": true,
      "type": "CATEGORY",
      "updated_at": "2017-05-10T18:48:39.798Z",
      "version": 1494442119798,
      "custom_attribute_values": {
        "key0": {
          "name": "name1",
          "string_value": "string_value5",
          "custom_attribute_definition_id": "custom_attribute_definition_id1",
          "type": "BOOLEAN",
          "number_value": "number_value1"
        },
        "key1": {
          "name": "name0",
          "string_value": "string_value4",
          "custom_attribute_definition_id": "custom_attribute_definition_id2",
          "type": "NUMBER",
          "number_value": "number_value0"
        },
        "key2": {
          "name": "name9",
          "string_value": "string_value3",
          "custom_attribute_definition_id": "custom_attribute_definition_id3",
          "type": "SELECTION",
          "number_value": "number_value9"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        },
        {
          "catalog_v1_id": "catalog_v1_id5",
          "location_id": "location_id5"
        },
        {
          "catalog_v1_id": "catalog_v1_id6",
          "location_id": "location_id6"
        }
      ]
    },
    {
      "id": "XHSHLHNWSI3HVI4BW5ZUZXI3",
      "is_deleted": false,
      "present_at_all_locations": true,
      "tax_data": {
        "applies_to_custom_amounts": true,
        "calculation_phase": "TAX_SUBTOTAL_PHASE",
        "enabled": true,
        "inclusion_type": "ADDITIVE",
        "name": "Sales Tax",
        "percentage": "5.0"
      },
      "type": "TAX",
      "updated_at": "2017-05-10T18:48:39.798Z",
      "version": 1494442119798,
      "custom_attribute_values": {
        "key0": {
          "name": "name2",
          "string_value": "string_value6",
          "custom_attribute_definition_id": "custom_attribute_definition_id0",
          "type": "STRING",
          "number_value": "number_value2"
        },
        "key1": {
          "name": "name1",
          "string_value": "string_value5",
          "custom_attribute_definition_id": "custom_attribute_definition_id1",
          "type": "BOOLEAN",
          "number_value": "number_value1"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id5",
          "location_id": "location_id5"
        }
      ]
    }
  ],
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ],
  "updated_at": "updated_at4"
}
```

