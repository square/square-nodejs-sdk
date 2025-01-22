
# V1 Update Order Request

V1UpdateOrderRequest

## Structure

`V1UpdateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`string`](../../doc/models/v1-update-order-request-action.md) | Required | - |
| `shippedTrackingNumber` | `string \| null \| undefined` | Optional | The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. |
| `completedNote` | `string \| null \| undefined` | Optional | A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. |
| `refundedNote` | `string \| null \| undefined` | Optional | A merchant-specified note about the refunding of the order. Only valid if action is REFUND. |
| `canceledNote` | `string \| null \| undefined` | Optional | A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. |

## Example (as JSON)

```json
{
  "action": "COMPLETE",
  "shipped_tracking_number": "shipped_tracking_number4",
  "completed_note": "completed_note4",
  "refunded_note": "refunded_note8",
  "canceled_note": "canceled_note6"
}
```

