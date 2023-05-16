
# Cancel Terminal Checkout Response

## Structure

`CancelTerminalCheckoutResponse`

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
      "amount": 123,
      "currency": "USD"
    },
    "app_id": "APP_ID",
    "cancel_reason": "SELLER_CANCELED",
    "created_at": "2020-03-16T15:31:19.934Z",
    "deadline_duration": "PT10M",
    "device_options": {
      "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003",
      "skip_receipt_screen": true,
      "tip_settings": {
        "allow_tipping": true,
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
    "id": "S1yDlPQx7slqO",
    "reference_id": "id36815",
    "status": "CANCELED",
    "updated_at": "2020-03-16T15:31:45.787Z",
    "note": "note8",
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
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

