
# Search Catalog Objects Response

## Structure

`SearchCatalogObjectsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on any errors encountered. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request. If unset, this is the final response.<br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `objects` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | The CatalogObjects returned. |
| `related_objects` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | A list of CatalogObjects referenced by the objects in the `objects` field. |
| `latest_time` | `string` | Optional | When the associated product catalog was last updated. Will<br>match the value for `end_time` or `cursor` if either field is included in the `SearchCatalog` request. |

## Example (as JSON)

```json
{
  "objects": [
    {
      "type": "ITEM",
      "id": "X5DZ5NWWAQ44CKBLKIFQGOWK",
      "updated_at": "2017-10-26T15:41:32.337Z",
      "version": 1509032492337,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "Tea - Black",
        "description": "A delicious blend of black tea.",
        "category_id": "E7CLE5RZZ744BHWVQQEAHI2C",
        "product_type": "REGULAR",
        "tax_ids": [
          "ZXITPM6RWHZ7GZ7EIP3YKECM"
        ],
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "5GSZPX6EU7MM75S57OONG3V5",
            "updated_at": "2017-10-26T15:27:31.626Z",
            "version": 1509031651626,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "X5DZ5NWWAQ44CKBLKIFQGOWK",
              "name": "Regular",
              "ordinal": 1,
              "price_money": {
                "amount": 150,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING"
            }
          },
          {
            "type": "ITEM_VARIATION",
            "id": "XVLBN7DU6JTWHJTG5F265B43",
            "updated_at": "2017-10-26T15:27:31.626Z",
            "version": 1509031651626,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "X5DZ5NWWAQ44CKBLKIFQGOWK",
              "name": "Large",
              "ordinal": 2,
              "price_money": {
                "amount": 225,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING"
            }
          }
        ],
        "visibility": "PRIVATE"
      }
    },
    {
      "type": "ITEM",
      "id": "NNNEM3LA656Q46NXLWCNI7S5",
      "updated_at": "2017-10-26T15:41:23.232Z",
      "version": 1509032483232,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "Tea - Green",
        "description": "Relaxing green herbal tea.",
        "category_id": "E7CLE5RZZ744BHWVQQEAHI2C",
        "product_type": "REGULAR",
        "tax_ids": [
          "ZXITPM6RWHZ7GZ7EIP3YKECM"
        ],
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "FHYBVIA6NVBCSOVETA62WEA4",
            "updated_at": "2017-10-26T15:29:00.524Z",
            "version": 1509031740524,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "NNNEM3LA656Q46NXLWCNI7S5",
              "name": "Regular",
              "ordinal": 1,
              "price_money": {
                "amount": 150,
                "currency": "USD"
              },
              "pricing_type": "FIXED_PRICING"
            }
          }
        ],
        "visibility": "PRIVATE"
      }
    }
  ]
}
```

