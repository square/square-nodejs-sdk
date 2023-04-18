
# V1 Update Order Request

V1UpdateOrderRequest

## Structure

`V1UpdateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`string`](../../doc/models/v1-update-order-request-action.md) | Required | - |
| `shippedTrackingNumber` | `string \| undefined` | Optional | The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. |
| `completedNote` | `string \| undefined` | Optional | A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. |
| `refundedNote` | `string \| undefined` | Optional | A merchant-specified note about the refunding of the order. Only valid if action is REFUND. |
| `canceledNote` | `string \| undefined` | Optional | A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. |

## Example (as JSON)

```json
{
  "action": "COMPLETE",
  "shipped_tracking_number": "shipped_tracking_number0",
  "completed_note": "completed_note0",
  "refunded_note": "refunded_note4",
  "canceled_note": "canceled_note0"
}
```

