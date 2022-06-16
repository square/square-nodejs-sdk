
# Gift Card Activity Refund

Represents details about a `REFUND` [gift card activity type](../../doc/models/gift-card-activity-type.md).

## Structure

`GiftCardActivityRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `redeemActivityId` | `string \| undefined` | Optional | The ID of the refunded `REDEEM` gift card activity. Square populates this field if the<br>`payment_id` in the corresponding [RefundPayment](../../doc/api/refunds.md#refund-payment) request<br>represents a redemption made by the same gift card.<br><br>Applications that use a custom payment processing system can use this field in a<br>[CreateGiftCardActivity](../../doc/api/gift-card-activities.md#create-gift-card-activity)<br>request to link a refund with a `REDEEM` activity for the same gift card. |
| `amountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `referenceId` | `string \| undefined` | Optional | A client-specified ID that associates the gift card activity with an entity in another system.<br><br>Applications that use a custom payment processing system can use this field to track information<br>related to an order or payment. |
| `paymentId` | `string \| undefined` | Optional | The ID of the refunded payment. Square populates this field if the refund is for a<br>payment processed by Square. The payment source can be the same gift card or a cross-tender payment from a<br>credit card or a different gift card. Cross-tender payments can only be refunded from Square Point of Sale<br>or other Square products. |

## Example (as JSON)

```json
{
  "redeem_activity_id": null,
  "amount_money": null,
  "reference_id": null,
  "payment_id": null
}
```

