
# Update Merchant Settings Response

## Structure

`UpdateMerchantSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred when updating the merchant settings. |
| `merchantSettings` | [`CheckoutMerchantSettings \| undefined`](../../doc/models/checkout-merchant-settings.md) | Optional | - |

## Example (as JSON)

```json
{
  "merchant_settings": {
    "merchant_id": "MERCHANT_ID",
    "payment_methods": {
      "afterpay_clearpay": {
        "available": true,
        "enabled": true,
        "item_eligibility_range": {
          "max": {
            "amount": 10000,
            "currency": "USD"
          },
          "min": {
            "amount": 100,
            "currency": "USD"
          }
        },
        "order_eligibility_range": {
          "max": {
            "amount": 10000,
            "currency": "USD"
          },
          "min": {
            "amount": 100,
            "currency": "USD"
          }
        }
      },
      "apple_pay": {
        "available": true,
        "enabled": false
      },
      "cash_app_pay": {
        "available": true,
        "enabled": true
      },
      "google_pay": {
        "available": true,
        "enabled": true
      },
      "cash_app": {
        "enabled": false
      }
    },
    "updated_at": "2022-06-16T22:25:35Z"
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

