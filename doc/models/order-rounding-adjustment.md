
# Order Rounding Adjustment

A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding
when the minimum unit of account is smaller than the lowest physical denomination of currency.

## Structure

`OrderRoundingAdjustment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Optional | Unique ID that identifies the rounding adjustment only within this order. |
| `name` | `string` | Optional | The name of the rounding adjustment from the original sale Order. |
| `amount_money` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "name": "name0",
  "amount_money": {
    "amount": 186,
    "currency": "NGN"
  }
}
```

