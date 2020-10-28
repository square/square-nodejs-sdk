
# Batch Change Inventory Response

## Structure

`BatchChangeInventoryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `counts` | [`InventoryCount[]`](/doc/models/inventory-count.md) | Optional | The current counts for all objects referenced in the request. |

## Example (as JSON)

```json
{
  "errors": [],
  "counts": [
    {
      "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",
      "catalog_object_type": "ITEM_VARIATION",
      "state": "IN_STOCK",
      "location_id": "C6W5YS5QM06F5",
      "quantity": "53",
      "calculated_at": "2016-11-16T22:28:01.223Z"
    }
  ]
}
```

