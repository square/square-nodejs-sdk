
# Gift Card Activity Unlinked Activity Refund

Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND.

## Structure

`GiftCardActivityUnlinkedActivityRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountMoney` | [`Money`](../../doc/models/money.md) | Required | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `referenceId` | `string \| undefined` | Optional | A client-specified ID to associate an entity, in another system, with this gift card<br>activity. This can be used to track the order or payment related information when the Square Payments<br>API is not being used. |
| `paymentId` | `string \| undefined` | Optional | When using the Square Payments API, the ID of the payment that was refunded to this gift<br>card. |

## Example (as JSON)

```json
{
  "amount_money": {
    "amount": 186,
    "currency": "NGN"
  },
  "reference_id": "reference_id2",
  "payment_id": "payment_id0"
}
```

