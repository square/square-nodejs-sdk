
# Update Payment Request

Describes a request to update a payment using
[UpdatePayment](#endpoint-payments-updatepayment).

## Structure

`UpdatePaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payment` | [`Payment`](/doc/models/payment.md) | Optional | Represents a payment processed by the Square API. |
| `idempotencyKey` | `string` | Required | A unique string that identifies this `UpdatePayment` request. Keys can be any valid string<br>but must be unique for every `UpdatePayment` request.<br><br>The maximum is 45 characters.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "idempotency_key": "3d3c3b22-9572-4fc6-1111-e4d2f41b4122",
  "payment": {
    "amount_money": {
      "amount": 1000,
      "currency": "USD"
    },
    "tip_money": {
      "amount": 300,
      "currency": "USD"
    },
    "version_token": "Z3okDzm2VRv5m5nE3WGx381ItTNhvjkB4VapByyz54h6o"
  }
}
```

