
# V1 Payment Tax

V1PaymentTax

## Structure

`V1PaymentTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| null \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `name` | `string \| null \| undefined` | Optional | The merchant-defined name of the tax. |
| `appliedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `rate` | `string \| null \| undefined` | Optional | The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. |
| `inclusionType` | [`string \| undefined`](../../doc/models/v1-payment-tax-inclusion-type.md) | Optional | - |
| `feeId` | `string \| null \| undefined` | Optional | The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID. |

## Example (as JSON)

```json
{
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
  ],
  "name": "name0",
  "applied_money": {
    "amount": 196,
    "currency_code": "IQD"
  },
  "rate": "rate0",
  "inclusion_type": "ADDITIVE"
}
```

