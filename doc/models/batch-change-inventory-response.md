
# Batch Change Inventory Response

## Structure

`BatchChangeInventoryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `counts` | [`InventoryCount[] \| undefined`](../../doc/models/inventory-count.md) | Optional | The current counts for all objects referenced in the request. |
| `changes` | [`InventoryChange[] \| undefined`](../../doc/models/inventory-change.md) | Optional | Changes created for the request. |

## Example (as JSON)

```json
{
  "counts": [
    {
      "calculated_at": "2016-11-16T22:28:01.223Z",
      "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",
      "catalog_object_type": "ITEM_VARIATION",
      "location_id": "C6W5YS5QM06F5",
      "quantity": "53",
      "state": "IN_STOCK"
    }
  ],
  "errors": [],
  "changes": [
    {
      "type": "TRANSFER",
      "physical_count": {
        "id": "id6",
        "reference_id": "reference_id4",
        "catalog_object_id": "catalog_object_id0",
        "catalog_object_type": "catalog_object_type0",
        "state": "RESERVED_FOR_SALE"
      },
      "adjustment": {
        "id": "id0",
        "reference_id": "reference_id8",
        "from_state": "SOLD",
        "to_state": "COMPOSED",
        "location_id": "location_id4"
      },
      "transfer": {
        "id": "id4",
        "reference_id": "reference_id8",
        "state": "SUPPORTED_BY_NEWER_VERSION",
        "from_location_id": "from_location_id6",
        "to_location_id": "to_location_id4"
      },
      "measurement_unit": {
        "measurement_unit": {
          "custom_unit": {
            "name": "name6",
            "abbreviation": "abbreviation8"
          },
          "area_unit": "IMPERIAL_SQUARE_FOOT",
          "length_unit": "METRIC_METER",
          "volume_unit": "IMPERIAL_CUBIC_INCH",
          "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
        },
        "precision": 118
      }
    }
  ]
}
```

