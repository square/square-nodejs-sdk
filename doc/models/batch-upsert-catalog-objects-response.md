
# Batch Upsert Catalog Objects Response

## Structure

`BatchUpsertCatalogObjectsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on any errors that encountered. |
| `objects` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | The created successfully created CatalogObjects. |
| `updated_at` | `string` | Optional | The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". |
| `id_mappings` | [`CatalogIdMapping[]`](/doc/models/catalog-id-mapping.md) | Optional | The mapping between client and server IDs for this upsert. |

## Example (as JSON)

```json
{
  "objects": [
    {
      "type": "ITEM",
      "id": "ZSDZN34NAXDLC6D5ZQMNSOUM",
      "updated_at": "2017-05-10T18:48:39.798Z",
      "version": 1494442119798,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "Tea",
        "description": "Hot Leaf Juice",
        "category_id": "LYT72K3WGJFFCIMB63XARP3I",
        "tax_ids": [
          "XHSHLHNWSI3HVI4BW5ZUZXI3"
        ],
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "NAYHET5R52MIYCEF34ZMAHFM",
            "updated_at": "2017-05-10T18:48:39.798Z",
            "version": 1494442119798,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "ZSDZN34NAXDLC6D5ZQMNSOUM",
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
    {
      "type": "ITEM",
      "id": "PJMCEBHHUS3OKDB6PYUHLCPP",
      "updated_at": "2017-05-10T18:48:39.798Z",
      "version": 1494442119798,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "Coffee",
        "description": "Hot Bean Juice",
        "category_id": "LYT72K3WGJFFCIMB63XARP3I",
        "tax_ids": [
          "XHSHLHNWSI3HVI4BW5ZUZXI3"
        ],
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "OTYDX45SPG7LJQUVCBZI4INH",
            "updated_at": "2017-05-10T18:48:39.798Z",
            "version": 1494442119798,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "PJMCEBHHUS3OKDB6PYUHLCPP",
              "name": "Regular",
              "ordinal": 0,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 250,
                "currency": "USD"
              }
            }
          },
          {
            "type": "ITEM_VARIATION",
            "id": "GZDA3JB37FYVOPI4AOEBOITI",
            "updated_at": "2017-05-10T18:48:39.798Z",
            "version": 1494442119798,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "PJMCEBHHUS3OKDB6PYUHLCPP",
              "name": "Large",
              "ordinal": 1,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 350,
                "currency": "USD"
              }
            }
          }
        ]
      }
    },
    {
      "type": "CATEGORY",
      "id": "LYT72K3WGJFFCIMB63XARP3I",
      "updated_at": "2017-05-10T18:48:39.798Z",
      "version": 1494442119798,
      "is_deleted": false,
      "present_at_all_locations": true,
      "category_data": {
        "name": "Beverages"
      }
    },
    {
      "type": "TAX",
      "id": "XHSHLHNWSI3HVI4BW5ZUZXI3",
      "updated_at": "2017-05-10T18:48:39.798Z",
      "version": 1494442119798,
      "is_deleted": false,
      "present_at_all_locations": true,
      "tax_data": {
        "name": "Sales Tax",
        "calculation_phase": "TAX_SUBTOTAL_PHASE",
        "inclusion_type": "ADDITIVE",
        "percentage": "5.0",
        "applies_to_custom_amounts": true,
        "enabled": true
      }
    }
  ],
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
  ]
}
```

