
# Accepted Payment Methods

## Structure

`AcceptedPaymentMethods`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applePay` | `boolean \| null \| undefined` | Optional | Whether Apple Pay is accepted at checkout. |
| `googlePay` | `boolean \| null \| undefined` | Optional | Whether Google Pay is accepted at checkout. |
| `cashAppPay` | `boolean \| null \| undefined` | Optional | Whether Cash App Pay is accepted at checkout. |
| `afterpayClearpay` | `boolean \| null \| undefined` | Optional | Whether Afterpay/Clearpay is accepted at checkout. |

## Example (as JSON)

```json
{
  "apple_pay": false,
  "google_pay": false,
  "cash_app_pay": false,
  "afterpay_clearpay": false
}
```

