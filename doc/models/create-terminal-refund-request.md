
# Create Terminal Refund Request

## Structure

`CreateTerminalRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` |  | A unique string that identifies this `CreateRefund` request. Keys can be any valid string but<br>must be unique for every `CreateRefund` request.<br><br>See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. |
| `refund` | [`TerminalRefund`](/doc/models/terminal-refund.md) | Optional | - |

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
    "reason": "Returning items"
  }
}
```

