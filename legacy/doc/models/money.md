
# Money

Represents an amount of money. `Money` fields can be signed or unsigned.
Fields that do not explicitly define whether they are signed or unsigned are
considered unsigned and can only hold positive amounts. For signed fields, the
sign of the value indicates the purpose of the money transfer. See
[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
for more information.

## Structure

`Money`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `bigint \| null \| undefined` | Optional | The amount of money, in the smallest denomination of the currency<br>indicated by `currency`. For example, when `currency` is `USD`, `amount` is<br>in cents. Monetary amounts can be positive or negative. See the specific<br>field description to determine the meaning of the sign in a particular case. |
| `currency` | [`string \| undefined`](../../doc/models/currency.md) | Optional | Indicates the associated currency for an amount of money. Values correspond<br>to [ISO 4217](https://wikipedia.org/wiki/ISO_4217). |

## Example (as JSON)

```json
{
  "amount": 36,
  "currency": "AZN"
}
```

