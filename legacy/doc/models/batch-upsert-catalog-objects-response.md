
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
      "object_id": "67GA7XA2FWMRYY2VCONTYZJR"
    },
    {
      "client_object_id": "#Coffee",
      "object_id": "MQ4TZKOG3SR2EQI3TWEK4AH7"
    },
    {
      "client_object_id": "#Beverages",
      "object_id": "XCS4SCGN4WQYE2VU4U3TKXEH"
    },
    {
      "client_object_id": "#SalesTax",
      "object_id": "HP5VNYPKZKTNCKZ2Z5NPUH6A"
    },
    {
      "client_object_id": "#Tea_Mug",
      "object_id": "CAJBHUIQH7ONTSZI2KTVOUP6"
    },
    {
      "client_object_id": "#Coffee_Regular",
      "object_id": "GY2GXJTVVPQAPW43GFRR3NG6"
    },
    {
      "client_object_id": "#Coffee_Large",
      "object_id": "JE6VHPSRQL6IWSN26C36CJ7W"
    }
  ],
  "objects": [
    {
      "created_at": "2023-11-30T19:24:35.4Z",
      "id": "67GA7XA2FWMRYY2VCONTYZJR",
      "is_deleted": false,
      "item_data": {
        "categories": [
          {
            "id": "XCS4SCGN4WQYE2VU4U3TKXEH",
            "ordinal": -2251731094208512
          }
        ],
        "description": "Hot Leaf Juice",
        "description_html": "<p><strong>Hot</strong> Leaf Juice</p>",
        "description_plaintext": "Hot Leaf Juice",
        "is_archived": false,
        "is_taxable": true,
        "name": "Tea",
        "product_type": "REGULAR",
        "tax_ids": [
          "HP5VNYPKZKTNCKZ2Z5NPUH6A"
        ],
        "variations": [
          {
            "created_at": "2023-11-30T19:24:35.4Z",
            "id": "CAJBHUIQH7ONTSZI2KTVOUP6",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "67GA7XA2FWMRYY2VCONTYZJR",
              "name": "Mug",
              "ordinal": 0,
              "price_money": {
                "amount": 150,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING",
              "sellable": true,
              "stockable": true
            },
            "present_at_all_locations": true,
            "type": "ITEM_VARIATION",
            "updated_at": "2023-11-30T19:24:35.4Z",
            "version": 1701372275400
          }
        ]
      },
      "present_at_all_locations": true,
      "type": "ITEM",
      "updated_at": "2023-11-30T19:24:35.4Z",
      "version": 1701372275400,
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
      "created_at": "2023-11-30T19:24:35.4Z",
      "id": "MQ4TZKOG3SR2EQI3TWEK4AH7",
      "is_deleted": false,
      "item_data": {
        "categories": [
          {
            "id": "XCS4SCGN4WQYE2VU4U3TKXEH",
            "ordinal": -2251662374731776
          }
        ],
        "description": "Hot Bean Juice",
        "description_html": "<p>Hot <em>Bean Juice</em></p>",
        "description_plaintext": "Hot Bean Juice",
        "is_archived": false,
        "is_taxable": true,
        "name": "Coffee",
        "product_type": "REGULAR",
        "tax_ids": [
          "HP5VNYPKZKTNCKZ2Z5NPUH6A"
        ],
        "variations": [
          {
            "created_at": "2023-11-30T19:24:35.4Z",
            "id": "GY2GXJTVVPQAPW43GFRR3NG6",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "MQ4TZKOG3SR2EQI3TWEK4AH7",
              "name": "Regular",
              "ordinal": 0,
              "price_money": {
                "amount": 250,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING",
              "sellable": true,
              "stockable": true
            },
            "present_at_all_locations": true,
            "type": "ITEM_VARIATION",
            "updated_at": "2023-11-30T19:24:35.4Z",
            "version": 1701372275400
          },
          {
            "created_at": "2023-11-30T19:24:35.4Z",
            "id": "JE6VHPSRQL6IWSN26C36CJ7W",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "MQ4TZKOG3SR2EQI3TWEK4AH7",
              "name": "Large",
              "ordinal": 1,
              "price_money": {
                "amount": 350,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING",
              "sellable": true,
              "stockable": true
            },
            "present_at_all_locations": true,
            "type": "ITEM_VARIATION",
            "updated_at": "2023-11-30T19:24:35.4Z",
            "version": 1701372275400
          }
        ]
      },
      "present_at_all_locations": true,
      "type": "ITEM",
      "updated_at": "2023-11-30T19:24:35.4Z",
      "version": 1701372275400,
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
      "category_data": {
        "category_type": "REGULAR_CATEGORY",
        "is_top_level": true,
        "name": "Beverages",
        "online_visibility": true,
        "parent_category": {
          "ordinal": -2250837741010944
        }
      },
      "created_at": "2023-11-30T19:24:35.4Z",
      "id": "XCS4SCGN4WQYE2VU4U3TKXEH",
      "is_deleted": false,
      "present_at_all_locations": true,
      "type": "CATEGORY",
      "updated_at": "2023-11-30T19:24:35.4Z",
      "version": 1701372275400,
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
      "created_at": "2023-11-30T19:24:35.4Z",
      "id": "HP5VNYPKZKTNCKZ2Z5NPUH6A",
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
      "updated_at": "2023-11-30T19:24:35.4Z",
      "version": 1701372275400,
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
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "updated_at": "updated_at6"
}
```

