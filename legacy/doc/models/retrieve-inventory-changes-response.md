
# Retrieve Inventory Changes Response

## Structure

`RetrieveInventoryChangesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `changes` | [`InventoryChange[] \| undefined`](../../doc/models/inventory-change.md) | Optional | The set of inventory changes for the requested object and locations. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request. If unset,<br>this is the final response.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |

## Example (as JSON)

```json
{
  "changes": [
    {
      "adjustment": {
        "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",
        "catalog_object_type": "ITEM_VARIATION",
        "created_at": "2016-11-16T22:25:24.878Z",
        "from_state": "IN_STOCK",
        "id": "OJKJIUANKLMLQANZADNPLKAD",
        "location_id": "C6W5YS5QM06F5",
        "occurred_at": "2016-11-16T22:25:24.878Z",
        "quantity": "3",
        "reference_id": "d8207693-168f-4b44-a2fd-a7ff533ddd26",
        "source": {
          "application_id": "416ff29c-86c4-4feb-b58c-9705f21f3ea0",
          "name": "Square Point of Sale 4.37",
          "product": "SQUARE_POS"
        },
        "team_member_id": "AV7YRCGI2H1J5NQ8E1XIZCNA",
        "to_state": "SOLD",
        "total_price_money": {
          "amount": 5000,
          "currency": "USD"
        },
        "transaction_id": "5APV6JYK1SNCZD11AND2RX1Z"
      },
      "type": "ADJUSTMENT",
      "physical_count": {
        "id": "id2",
        "reference_id": "reference_id0",
        "catalog_object_id": "catalog_object_id6",
        "catalog_object_type": "catalog_object_type6",
        "state": "SUPPORTED_BY_NEWER_VERSION"
      },
      "transfer": {
        "id": "id8",
        "reference_id": "reference_id6",
        "state": "RESERVED_FOR_SALE",
        "from_location_id": "from_location_id0",
        "to_location_id": "to_location_id0"
      },
      "measurement_unit": {
        "measurement_unit": {
          "custom_unit": {
            "name": "name2",
            "abbreviation": "abbreviation4"
          },
          "area_unit": "IMPERIAL_ACRE",
          "length_unit": "IMPERIAL_INCH",
          "volume_unit": "METRIC_LITER",
          "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
        },
        "precision": 184
      }
    }
  ],
  "errors": [],
  "cursor": "cursor0"
}
```

