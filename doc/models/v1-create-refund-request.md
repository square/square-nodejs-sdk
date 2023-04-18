
# V1 Create Refund Request

V1CreateRefundRequest

## Structure

`V1CreateRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentId` | `string` | Required | The ID of the payment to refund. If you are creating a `PARTIAL`<br>refund for a split tender payment, instead provide the id of the<br>particular tender you want to refund. |
| `type` | [`string`](../../doc/models/v1-create-refund-request-type.md) | Required | - |
| `reason` | `string` | Required | The reason for the refund. |
| `refundedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `requestIdempotenceKey` | `string \| undefined` | Optional | An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once. |

## Example (as JSON)

```json
{
  "payment_id": "payment_id0",
  "type": "FULL",
  "reason": "reason4",
  "refunded_money": {
    "amount": 214,
    "currency_code": "CHW"
  },
  "request_idempotence_key": "request_idempotence_key8"
}
```

