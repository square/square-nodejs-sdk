
# Create Terminal Checkout Request

## Structure

`CreateTerminalCheckoutRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `idempotency_key` | `string` | A unique string that identifies this CreateCheckout request. Keys can be any valid string but<br>must be unique for every CreateCheckout request.<br><br>See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. |
| `checkout` | [`TerminalCheckout`](/doc/models/terminal-checkout.md) | - |

## Example (as JSON)

```json
{
  "idempotency_key": "28a0c3bc-7839-11ea-bc55-0242ac130003",
  "checkout": {
    "amount_money": {
      "amount": 2610,
      "currency": "USD"
    },
    "reference_id": "id11572",
    "device_options": {
      "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003"
    },
    "note": "A brief note"
  }
}
```

