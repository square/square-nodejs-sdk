
# Search Catalog Objects Response

## Structure

`SearchCatalogObjectsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request. If unset, this is the final response.<br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |
| `objects` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | The CatalogObjects returned. |
| `relatedObjects` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | A list of CatalogObjects referenced by the objects in the `objects` field. |
| `latestTime` | `string \| undefined` | Optional | When the associated product catalog was last updated. Will<br>match the value for `end_time` or `cursor` if either field is included in the `SearchCatalog` request. |

## Example (as JSON)

```json
{
  "objects": [
    {
      "id": "X5DZ5NWWAQ44CKBLKIFQGOWK",
      "is_deleted": false,
      "item_data": {
        "category_id": "E7CLE5RZZ744BHWVQQEAHI2C",
        "description": "A delicious blend of black tea.",
        "name": "Tea - Black",
        "product_type": "REGULAR",
        "tax_ids": [
          "ZXITPM6RWHZ7GZ7EIP3YKECM"
        ],
        "variations": [
          {
            "id": "5GSZPX6EU7MM75S57OONG3V5",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "X5DZ5NWWAQ44CKBLKIFQGOWK",
              "name": "Regular",
              "ordinal": 1,
              "price_money": {
                "amount": 150,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING"
            },
            "present_at_all_locations": true,
            "type": "ITEM_VARIATION",
            "updated_at": "2017-10-26T15:27:31.626Z",
            "version": 1509031651626
          },
          {
            "id": "XVLBN7DU6JTWHJTG5F265B43",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "X5DZ5NWWAQ44CKBLKIFQGOWK",
              "name": "Large",
              "ordinal": 2,
              "price_money": {
                "amount": 225,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING"
            },
            "present_at_all_locations": true,
            "type": "ITEM_VARIATION",
            "updated_at": "2017-10-26T15:27:31.626Z",
            "version": 1509031651626
          }
        ],
        "visibility": "PRIVATE"
      },
      "present_at_all_locations": true,
      "type": "ITEM",
      "updated_at": "2017-10-26T15:41:32.337Z",
      "version": 1509032492337,
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
      "id": "NNNEM3LA656Q46NXLWCNI7S5",
      "is_deleted": false,
      "item_data": {
        "category_id": "E7CLE5RZZ744BHWVQQEAHI2C",
        "description": "Relaxing green herbal tea.",
        "name": "Tea - Green",
        "product_type": "REGULAR",
        "tax_ids": [
          "ZXITPM6RWHZ7GZ7EIP3YKECM"
        ],
        "variations": [
          {
            "id": "FHYBVIA6NVBCSOVETA62WEA4",
            "is_deleted": false,
            "item_variation_data": {
              "item_id": "NNNEM3LA656Q46NXLWCNI7S5",
              "name": "Regular",
              "ordinal": 1,
              "price_money": {
                "amount": 150,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING"
            },
            "present_at_all_locations": true,
            "type": "ITEM_VARIATION",
            "updated_at": "2017-10-26T15:29:00.524Z",
            "version": 1509031740524
          }
        ],
        "visibility": "PRIVATE"
      },
      "present_at_all_locations": true,
      "type": "ITEM",
      "updated_at": "2017-10-26T15:41:23.232Z",
      "version": 1509032483232,
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
    }
  ],
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ],
  "cursor": "cursor6",
  "related_objects": [
    {
      "type": "CATEGORY",
      "id": "id8",
      "updated_at": "updated_at6",
      "version": 170,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name1",
          "string_value": "string_value5",
          "custom_attribute_definition_id": "custom_attribute_definition_id1",
          "type": "SELECTION",
          "number_value": "number_value1"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id2",
          "location_id": "location_id2"
        },
        {
          "catalog_v1_id": "catalog_v1_id3",
          "location_id": "location_id3"
        }
      ]
    },
    {
      "type": "IMAGE",
      "id": "id9",
      "updated_at": "updated_at5",
      "version": 169,
      "is_deleted": true,
      "custom_attribute_values": {
        "key0": {
          "name": "name0",
          "string_value": "string_value4",
          "custom_attribute_definition_id": "custom_attribute_definition_id2",
          "type": "STRING",
          "number_value": "number_value0"
        },
        "key1": {
          "name": "name1",
          "string_value": "string_value5",
          "custom_attribute_definition_id": "custom_attribute_definition_id1",
          "type": "SELECTION",
          "number_value": "number_value1"
        },
        "key2": {
          "name": "name2",
          "string_value": "string_value6",
          "custom_attribute_definition_id": "custom_attribute_definition_id0",
          "type": "NUMBER",
          "number_value": "number_value2"
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
        },
        {
          "catalog_v1_id": "catalog_v1_id5",
          "location_id": "location_id5"
        }
      ]
    },
    {
      "type": "ITEM",
      "id": "id0",
      "updated_at": "updated_at4",
      "version": 168,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name9",
          "string_value": "string_value3",
          "custom_attribute_definition_id": "custom_attribute_definition_id3",
          "type": "BOOLEAN",
          "number_value": "number_value9"
        },
        "key1": {
          "name": "name0",
          "string_value": "string_value4",
          "custom_attribute_definition_id": "custom_attribute_definition_id2",
          "type": "STRING",
          "number_value": "number_value0"
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
  "latest_time": "latest_time8"
}
```

