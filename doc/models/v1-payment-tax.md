
# V1 Payment Tax

V1PaymentTax

## Structure

`V1PaymentTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `name` | `string \| undefined` | Optional | The merchant-defined name of the tax. |
| `appliedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `rate` | `string \| undefined` | Optional | The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. |
| `inclusionType` | [`string \| undefined`](../../doc/models/v1-payment-tax-inclusion-type.md) | Optional | - |
| `feeId` | `string \| undefined` | Optional | The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID. |

## Example (as JSON)

```json
{
  "errors": null,
  "name": null,
  "applied_money": null,
  "rate": null,
  "inclusion_type": null,
  "fee_id": null
}
```

