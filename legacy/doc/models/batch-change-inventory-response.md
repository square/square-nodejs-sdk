
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
        "id": "id2",
        "reference_id": "reference_id0",
        "catalog_object_id": "catalog_object_id6",
        "catalog_object_type": "catalog_object_type6",
        "state": "SUPPORTED_BY_NEWER_VERSION"
      },
      "adjustment": {
        "id": "id4",
        "reference_id": "reference_id2",
        "from_state": "IN_TRANSIT_TO",
        "to_state": "SOLD",
        "location_id": "location_id8"
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
  ]
}
```

