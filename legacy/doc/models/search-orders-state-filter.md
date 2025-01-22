
# Search Orders State Filter

Filter by the current order `state`.

## Structure

`SearchOrdersStateFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `states` | [`string[]`](../../doc/models/order-state.md) | Required | States to filter for.<br>See [OrderState](#type-orderstate) for possible values |

## Example (as JSON)

```json
{
  "states": [
    "CANCELED",
    "DRAFT",
    "OPEN"
  ]
}
```

