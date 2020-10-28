
# V1 Payment Modifier

V1PaymentModifier

## Structure

`V1PaymentModifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Optional | The modifier option's name. |
| `applied_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `modifier_option_id` | `string` | Optional | TThe ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID. |

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

