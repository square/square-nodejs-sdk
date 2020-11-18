
# Search Orders State Filter

Filter by current Order `state`.

## Structure

`SearchOrdersStateFilter`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `states` | [`string[]`](/doc/models/order-state.md) | States to filter for.<br>See [OrderState](#type-orderstate) for possible values |

## Example (as JSON)

```json
{
  "states": [
    "CANCELED",
    "OPEN"
  ]
}
```

