
# Get Terminal Checkout Response

## Structure

`GetTerminalCheckoutResponse`

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
          196,
          195,
          194
        ],
        "smart_tipping": false
      },
      "collect_signature": false,
      "show_itemized_cart": false
    },
    "id": "08YceKh7B3ZqO",
    "location_id": "LOCATION_ID",
    "note": "A brief note",
    "reference_id": "id11572",
    "status": "IN_PROGRESS",
    "updated_at": "2020-04-06T16:39:323.001Z",
    "order_id": "order_id6",
    "payment_options": {
      "autocomplete": false,
      "delay_duration": "delay_duration0",
      "accept_partial_authorization": false,
      "delay_action": "CANCEL"
    }
  },
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

