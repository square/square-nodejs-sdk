
# Retrieve Merchant Settings Response

## Structure

`RetrieveMerchantSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `merchantSettings` | [`CheckoutMerchantSettings \| undefined`](../../doc/models/checkout-merchant-settings.md) | Optional | - |

## Example (as JSON)

```json
{
  "merchant_settings": {
    "merchant_id": "MERCHANT_ID",
    "payment_methods": {
      "afterpay_clearpay": {
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
        "enabled": true
      },
      "cash_app_pay": {
        "enabled": true
      },
      "google_pay": {
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
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

