
# V1 Adjust Inventory Request

V1AdjustInventoryRequest

## Structure

`V1AdjustInventoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `quantityDelta` | `number` | Optional | The number to adjust the variation's quantity by. |
| `adjustmentType` | [`string`](/doc/models/v1-adjust-inventory-request-adjustment-type.md) | Optional | - |
| `memo` | `string` | Optional | A note about the inventory adjustment. |

## Example (as JSON)

```json
{
  "quantity_delta": 223.58,
  "adjustment_type": "MANUAL_ADJUST",
  "memo": "memo4"
}
```

