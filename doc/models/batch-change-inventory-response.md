
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
  "errors": []
}
```

