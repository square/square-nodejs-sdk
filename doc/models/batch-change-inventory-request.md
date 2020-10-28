
# Batch Change Inventory Request

## Structure

`BatchChangeInventoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotency_key` | `string` | Optional | A client-supplied, universally unique identifier (UUID) for the<br>request.<br><br>See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) in the<br>[API Development 101](https://developer.squareup.com/docs/basics/api101/overview) section for more<br>information. |
| `changes` | [`InventoryChange[]`](/doc/models/inventory-change.md) | Optional | The set of physical counts and inventory adjustments to be made.<br>Changes are applied based on the client-supplied timestamp and may be sent<br>out of order. Max size is 100 changes. |
| `ignore_unchanged_counts` | `boolean` | Optional | Indicates whether the current physical count should be ignored if<br>the quantity is unchanged since the last physical count. Default: `true`. |

## Example (as JSON)

```json
{
  "idempotency_key": "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe",
  "changes": [
    {
      "type": "PHYSICAL_COUNT",
      "physical_count": {
        "reference_id": "1536bfbf-efed-48bf-b17d-a197141b2a92",
        "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",
        "state": "IN_STOCK",
        "location_id": "C6W5YS5QM06F5",
        "quantity": "53",
        "employee_id": "LRK57NSQ5X7PUD05",
        "occurred_at": "2016-11-16T22:25:24.878Z"
      }
    }
  ],
  "ignore_unchanged_counts": true
}
```

