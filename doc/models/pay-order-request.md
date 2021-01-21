
# Pay Order Request

Defines the fields that are included in requests to the
[PayOrder](#endpoint-payorder) endpoint.

## Structure

`PayOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` |  | A value you specify that uniquely identifies this request among requests you've sent. If<br>you're unsure whether a particular payment request was completed successfully, you can reattempt<br>it with the same idempotency key without worrying about duplicate payments.<br><br>See [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `192` |
| `orderVersion` | `number` | Optional | The version of the order being paid. If not supplied, the latest version will be paid. |
| `paymentIds` | `string[]` | Optional | The IDs of the [payments](#type-payment) to collect.<br>The payment total must match the order total. |

## Example (as JSON)

```json
{
  "idempotency_key": "c043a359-7ad9-4136-82a9-c3f1d66dcbff",
  "payment_ids": [
    "EnZdNAlWCmfh6Mt5FMNST1o7taB",
    "0LRiVlbXVwe8ozu4KbZxd12mvaB"
  ]
}
```

