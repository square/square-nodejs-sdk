
# Cancel Payment by Idempotency Key Request

Specifies idempotency key of a payment to cancel.

## Structure

`CancelPaymentByIdempotencyKeyRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `idempotency_key` | `string` | `idempotency_key` identifying the payment to be canceled. |

## Example (as JSON)

```json
{
  "idempotency_key": "a7e36d40-d24b-11e8-b568-0800200c9a66"
}
```

