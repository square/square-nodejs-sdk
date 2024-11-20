
# Dismiss Terminal Checkout Response

## Structure

`DismissTerminalCheckoutResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
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
    "created_at": "2023-11-29T14:59:50.682Z",
    "deadline_duration": "PT5M",
    "device_options": {
      "collect_signature": true,
      "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003",
      "loyalty_settings": {
        "loyalty_screen_max_display_duration": "PT60S",
        "show_card_linked_reward_redemption_screen": false,
        "show_loyalty_screen": false,
        "show_non_qualifying_loyalty_screen": false
      },
      "skip_receipt_screen": false,
      "tip_settings": {
        "allow_tipping": true,
        "custom_tip_field": false,
        "separate_tip_screen": true,
        "tip_percentages": [
          48
        ],
        "smart_tipping": false
      },
      "show_itemized_cart": false
    },
    "id": "LmZEKbo3SBfqO",
    "location_id": "LOCATION_ID",
    "payment_ids": [
      "D7vLJqMkvSoAlX4yyFzUitOy4EPZY"
    ],
    "payment_options": {
      "autocomplete": true,
      "delay_duration": "delay_duration2",
      "accept_partial_authorization": false,
      "delay_action": "CANCEL"
    },
    "payment_type": "CARD_PRESENT",
    "status": "COMPLETED",
    "updated_at": "2023-11-29T15:00:18.936Z",
    "reference_id": "reference_id0",
    "note": "note8",
    "order_id": "order_id6"
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

