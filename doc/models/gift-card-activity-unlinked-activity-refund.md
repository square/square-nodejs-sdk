
# Gift Card Activity Unlinked Activity Refund

Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND.

## Structure

`GiftCardActivityUnlinkedActivityRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountMoney` | [`Money`](/doc/models/money.md) | Required | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `referenceId` | `string \| undefined` | Optional | A client-specified ID to associate an entity, in another system, with this gift card<br>activity. This can be used to track the order or payment related information when the Square Orders<br>API is not being used. |
| `paymentId` | `string \| undefined` | Optional | When the Square Payments API is used, Refund is not called on the Gift Cards API.<br>However, when Square reads a Refund activity from the Gift Cards API, the developer needs to know<br>the ID of the payment (made using this gift card) that is being refunded. |

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

