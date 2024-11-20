
# Gift Card Activity Refund

Represents details about a `REFUND` [gift card activity type](../../doc/models/gift-card-activity-type.md).

## Structure

`GiftCardActivityRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `redeemActivityId` | `string \| null \| undefined` | Optional | The ID of the refunded `REDEEM` gift card activity. Square populates this field if the<br>`payment_id` in the corresponding [RefundPayment](api-endpoint:Refunds-RefundPayment) request<br>represents a gift card redemption.<br><br>For applications that use a custom payment processing system, this field is required when creating<br>a `REFUND` activity. The provided `REDEEM` activity ID must be linked to the same gift card. |
| `amountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `referenceId` | `string \| null \| undefined` | Optional | A client-specified ID that associates the gift card activity with an entity in another system. |
| `paymentId` | `string \| undefined` | Optional | The ID of the refunded payment. Square populates this field if the refund is for a<br>payment processed by Square. This field matches the `payment_id` in the corresponding<br>[RefundPayment](api-endpoint:Refunds-RefundPayment) request. |

## Example (as JSON)

```json
{
  "redeem_activity_id": "redeem_activity_id4",
  "amount_money": {
    "amount": 186,
    "currency": "AUD"
  },
  "reference_id": "reference_id8",
  "payment_id": "payment_id4"
}
```

