
# Cancel Payment by Idempotency Key Request

Describes a request to cancel a payment using
[CancelPaymentByIdempotencyKey](../../doc/api/payments.md#cancel-payment-by-idempotency-key).

## Structure

`CancelPaymentByIdempotencyKeyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | The `idempotency_key` identifying the payment to be canceled.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "idempotency_key": "a7e36d40-d24b-11e8-b568-0800200c9a66"
}
```

