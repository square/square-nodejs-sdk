
# Checkout Merchant Settings

## Structure

`CheckoutMerchantSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentMethods` | [`CheckoutMerchantSettingsPaymentMethods \| undefined`](../../doc/models/checkout-merchant-settings-payment-methods.md) | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the settings were last updated, in RFC 3339 format.<br>Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:<br>UTC: 2020-01-26T02:25:34Z<br>Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 |

## Example (as JSON)

```json
{
  "payment_methods": {
    "apple_pay": {
      "enabled": false
    },
    "google_pay": {
      "enabled": false
    },
    "cash_app": {
      "enabled": false
    },
    "afterpay_clearpay": {
      "order_eligibility_range": {
        "min": {
          "amount": 34,
          "currency": "OMR"
        },
        "max": {
          "amount": 140,
          "currency": "JPY"
        }
      },
      "item_eligibility_range": {
        "min": {
          "amount": 34,
          "currency": "OMR"
        },
        "max": {
          "amount": 140,
          "currency": "JPY"
        }
      },
      "enabled": false
    }
  },
  "updated_at": "updated_at0"
}
```

