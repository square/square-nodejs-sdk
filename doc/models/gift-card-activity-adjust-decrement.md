
# Gift Card Activity Adjust Decrement

Describes a gift card activity of the ADJUST_DECREMENT type.

## Structure

`GiftCardActivityAdjustDecrement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountMoney` | [`Money`](../../doc/models/money.md) | Required | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `reason` | [`string`](../../doc/models/gift-card-activity-adjust-decrement-reason.md) | Required | - |

## Example (as JSON)

```json
{
  "amount_money": {
    "amount": null,
    "currency": null
  },
  "reason": "BALANCE_ACCIDENTALLY_INCREASED"
}
```

