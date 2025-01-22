
# Retrieve Inventory Adjustment Response

## Structure

`RetrieveInventoryAdjustmentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `adjustment` | [`InventoryAdjustment \| undefined`](../../doc/models/inventory-adjustment.md) | Optional | Represents a change in state or quantity of product inventory at a<br>particular time and location. |

## Example (as JSON)

```json
{
  "adjustment": {
    "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",
    "catalog_object_type": "ITEM_VARIATION",
    "created_at": "2016-11-17T13:02:15.142Z",
    "from_state": "IN_STOCK",
    "id": "UDMOEO78BG6GYWA2XDRYX3KB",
    "location_id": "C6W5YS5QM06F5",
    "occurred_at": "2016-11-16T25:44:22.837Z",
    "quantity": "7",
    "reference_id": "4a366069-4096-47a2-99a5-0084ac879509",
    "source": {
      "application_id": "416ff29c-86c4-4feb-b58c-9705f21f3ea0",
      "name": "Square Point of Sale 4.37",
      "product": "SQUARE_POS"
    },
    "team_member_id": "LRK57NSQ5X7PUD05",
    "to_state": "SOLD",
    "total_price_money": {
      "amount": 4550,
      "currency": "USD"
    }
  },
  "errors": []
}
```

