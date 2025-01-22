
# Create Terminal Checkout Response

## Structure

`CreateTerminalCheckoutResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `checkout` | [`TerminalCheckout \| undefined`](../../doc/models/terminal-checkout.md) | Optional | Represents a checkout processed by the Square Terminal. |

## Example (as JSON)

```json
{
  "checkout": {
    "amount_money": {
      "amount": 2610,
      "currency": "USD"
    },
    "app_id": "APP_ID",
    "created_at": "2020-04-06T16:39:32.545Z",
    "deadline_duration": "PT5M",
    "device_options": {
      "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003",
      "skip_receipt_screen": false,
      "tip_settings": {
        "allow_tipping": false,
        "separate_tip_screen": false,
        "custom_tip_field": false,
        "tip_percentages": [
          48
        ],
        "smart_tipping": false
      },
      "collect_signature": false,
      "show_itemized_cart": false
    },
    "id": "08YceKh7B3ZqO",
    "location_id": "LOCATION_ID",
    "note": "A brief note",
    "payment_type": "CARD_PRESENT",
    "reference_id": "id11572",
    "status": "PENDING",
    "updated_at": "2020-04-06T16:39:32.545Z",
    "order_id": "order_id6",
    "payment_options": {
      "autocomplete": false,
      "delay_duration": "delay_duration2",
      "accept_partial_authorization": false,
      "delay_action": "CANCEL"
    }
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

