
# Checkout Merchant Settings Payment Methods

## Structure

`CheckoutMerchantSettingsPaymentMethods`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applePay` | [`CheckoutMerchantSettingsPaymentMethodsPaymentMethod \| undefined`](../../doc/models/checkout-merchant-settings-payment-methods-payment-method.md) | Optional | The settings allowed for a payment method. |
| `googlePay` | [`CheckoutMerchantSettingsPaymentMethodsPaymentMethod \| undefined`](../../doc/models/checkout-merchant-settings-payment-methods-payment-method.md) | Optional | The settings allowed for a payment method. |
| `cashApp` | [`CheckoutMerchantSettingsPaymentMethodsPaymentMethod \| undefined`](../../doc/models/checkout-merchant-settings-payment-methods-payment-method.md) | Optional | The settings allowed for a payment method. |
| `afterpayClearpay` | [`CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay \| undefined`](../../doc/models/checkout-merchant-settings-payment-methods-afterpay-clearpay.md) | Optional | The settings allowed for AfterpayClearpay. |

## Example (as JSON)

```json
{
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
}
```

