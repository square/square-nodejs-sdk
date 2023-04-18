
# V1 Payment Modifier

V1PaymentModifier

## Structure

`V1PaymentModifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The modifier option's name. |
| `appliedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `modifierOptionId` | `string \| undefined` | Optional | The ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID. |

## Example (as JSON)

```json
{
  "name": "name0",
  "applied_money": {
    "amount": 196,
    "currency_code": "LYD"
  },
  "modifier_option_id": "modifier_option_id6"
}
```

