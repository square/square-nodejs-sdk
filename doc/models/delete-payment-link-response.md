
# Delete Payment Link Response

## Structure

`DeletePaymentLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The ID of the link that is deleted. |
| `cancelledOrderId` | `string \| undefined` | Optional | The ID of the order that is canceled. When a payment link is deleted, Square updates the<br>the `state` (of the order that the checkout link created) to CANCELED. |

## Example (as JSON)

```json
{
  "cancelled_order_id": "asx8LgZ6MRzD0fObfkJ6obBmSh4F",
  "id": "MQASNYL6QB6DFCJ3",
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

