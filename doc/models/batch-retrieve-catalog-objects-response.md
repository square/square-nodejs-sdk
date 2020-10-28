
# Batch Retrieve Catalog Objects Response

## Structure

`BatchRetrieveCatalogObjectsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | The set of [Error](#type-error)s encountered. |
| `objects` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | A list of [CatalogObject](#type-catalogobject)s returned. |
| `related_objects` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `objects` field. |

## Example (as JSON)

```json
{
  "objects": [
    {
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
    {
      "type": "ITEM",
      "id": "AA27W3M2GGTF3H6AVPNB77CK",
      "updated_at": "2016-11-16T22:25:24.878Z",
      "version": 1479335124878,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "Coffee",
        "description": "Hot Bean Juice",
        "category_id": "BJNQCF2FJ6S6UIDT65ABHLRX",
        "tax_ids": [
          "HURXQOOAIC4IZSI2BEXQRYFY"
        ],
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "LBTYIHNHU52WOIHWT7SNRIYH",
            "updated_at": "2016-11-16T22:25:24.878Z",
            "version": 1479335124878,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "AA27W3M2GGTF3H6AVPNB77CK",
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
            "id": "PKYIC7HGGKW5CYVSCVDEIMHY",
            "updated_at": "2016-11-16T22:25:24.878Z",
            "version": 1479335124878,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "AA27W3M2GGTF3H6AVPNB77CK",
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
    }
  ],
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

