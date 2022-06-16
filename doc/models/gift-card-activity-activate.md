
# Gift Card Activity Activate

Represents details about an `ACTIVATE` [gift card activity type](../../doc/models/gift-card-activity-type.md).

## Structure

`GiftCardActivityActivate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `orderId` | `string \| undefined` | Optional | The ID of the [order](../../doc/models/order.md) that contains the `GIFT_CARD` line item.<br><br>Applications that use the Square Orders API to process orders must specify the order ID<br>[CreateGiftCardActivity](../../doc/api/gift-card-activities.md#create-gift-card-activity) request. |
| `lineItemUid` | `string \| undefined` | Optional | The UID of the `GIFT_CARD` line item in the order that represents the gift card purchase.<br><br>Applications that use the Square Orders API to process orders must specify the line item UID<br>in the [CreateGiftCardActivity](../../doc/api/gift-card-activities.md#create-gift-card-activity) request. |
| `referenceId` | `string \| undefined` | Optional | A client-specified ID that associates the gift card activity with an entity in another system.<br><br>Applications that use a custom order processing system can use this field to track information<br>related to an order or payment. |
| `buyerPaymentInstrumentIds` | `string[] \| undefined` | Optional | The payment instrument IDs used to process the gift card purchase, such as a credit card ID<br>or bank account ID.<br><br>Applications that use a custom order processing system must specify payment instrument IDs in<br>the [CreateGiftCardActivity](../../doc/api/gift-card-activities.md#create-gift-card-activity) request.<br>Square uses this information to perform compliance checks.<br><br>For applications that use the Square Orders API to process payments, Square has the necessary<br>instrument IDs to perform compliance checks. |

## Example (as JSON)

```json
{
  "amount_money": null,
  "order_id": null,
  "line_item_uid": null,
  "reference_id": null,
  "buyer_payment_instrument_ids": null
}
```

