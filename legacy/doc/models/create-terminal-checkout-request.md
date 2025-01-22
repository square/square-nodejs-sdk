
# Create Terminal Checkout Request

## Structure

`CreateTerminalCheckoutRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A unique string that identifies this `CreateCheckout` request. Keys can be any valid string but<br>must be unique for every `CreateCheckout` request.<br><br>See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `checkout` | [`TerminalCheckout`](../../doc/models/terminal-checkout.md) | Required | Represents a checkout processed by the Square Terminal. |

## Example (as JSON)

```json
{
  "checkout": {
    "amount_money": {
      "amount": 2610,
      "currency": "USD"
    },
    "device_options": {
      "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003",
      "skip_receipt_screen": false,
      "collect_signature": false,
      "tip_settings": {
        "allow_tipping": false,
        "separate_tip_screen": false,
        "custom_tip_field": false,
        "tip_percentages": [
          48
        ],
        "smart_tipping": false
      },
      "show_itemized_cart": false
    },
    "note": "A brief note",
    "reference_id": "id11572",
    "id": "id2",
    "order_id": "order_id6",
    "payment_options": {
      "autocomplete": false,
      "delay_duration": "delay_duration2",
      "accept_partial_authorization": false,
      "delay_action": "CANCEL"
    }
  },
  "idempotency_key": "28a0c3bc-7839-11ea-bc55-0242ac130003"
}
```

