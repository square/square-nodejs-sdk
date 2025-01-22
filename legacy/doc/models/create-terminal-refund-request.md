
# Create Terminal Refund Request

## Structure

`CreateTerminalRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A unique string that identifies this `CreateRefund` request. Keys can be any valid string but<br>must be unique for every `CreateRefund` request.<br><br>See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `refund` | [`TerminalRefund \| undefined`](../../doc/models/terminal-refund.md) | Optional | Represents a payment refund processed by the Square Terminal. Only supports Interac (Canadian debit network) payment refunds. |

## Example (as JSON)

```json
{
  "idempotency_key": "402a640b-b26f-401f-b406-46f839590c04",
  "refund": {
    "amount_money": {
      "amount": 111,
      "currency": "CAD"
    },
    "device_id": "f72dfb8e-4d65-4e56-aade-ec3fb8d33291",
    "payment_id": "5O5OvgkcNUhl7JBuINflcjKqUzXZY",
    "reason": "Returning items",
    "id": "id8",
    "refund_id": "refund_id2",
    "order_id": "order_id2",
    "deadline_duration": "deadline_duration0",
    "status": "status0"
  }
}
```

