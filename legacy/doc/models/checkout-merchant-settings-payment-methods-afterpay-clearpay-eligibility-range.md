
# Checkout Merchant Settings Payment Methods Afterpay Clearpay Eligibility Range

A range of purchase price that qualifies.

## Structure

`CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `min` | [`Money`](../../doc/models/money.md) | Required | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `max` | [`Money`](../../doc/models/money.md) | Required | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "min": {
    "amount": 34,
    "currency": "OMR"
  },
  "max": {
    "amount": 140,
    "currency": "JPY"
  }
}
```

