
# Tender

Represents a tender (i.e., a method of payment) used in a Square transaction.

## Structure

`Tender`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The tender's unique ID. It is the associated payment ID.<br>**Constraints**: *Maximum Length*: `192` |
| `locationId` | `string \| null \| undefined` | Optional | The ID of the transaction's associated location.<br>**Constraints**: *Maximum Length*: `50` |
| `transactionId` | `string \| null \| undefined` | Optional | The ID of the tender's associated transaction.<br>**Constraints**: *Maximum Length*: `192` |
| `createdAt` | `string \| undefined` | Optional | The timestamp for when the tender was created, in RFC 3339 format.<br>**Constraints**: *Maximum Length*: `32` |
| `note` | `string \| null \| undefined` | Optional | An optional note associated with the tender at the time of payment.<br>**Constraints**: *Maximum Length*: `500` |
| `amountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `tipMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `processingFeeMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `customerId` | `string \| null \| undefined` | Optional | If the tender is associated with a customer or represents a customer's card on file,<br>this is the ID of the associated customer.<br>**Constraints**: *Maximum Length*: `191` |
| `type` | [`string`](../../doc/models/tender-type.md) | Required | Indicates a tender's type. |
| `cardDetails` | [`TenderCardDetails \| undefined`](../../doc/models/tender-card-details.md) | Optional | Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` |
| `cashDetails` | [`TenderCashDetails \| undefined`](../../doc/models/tender-cash-details.md) | Optional | Represents the details of a tender with `type` `CASH`. |
| `bankAccountDetails` | [`TenderBankAccountDetails \| undefined`](../../doc/models/tender-bank-account-details.md) | Optional | Represents the details of a tender with `type` `BANK_ACCOUNT`.<br><br>See [BankAccountPaymentDetails](../../doc/models/bank-account-payment-details.md)<br>for more exposed details of a bank account payment. |
| `buyNowPayLaterDetails` | [`TenderBuyNowPayLaterDetails \| undefined`](../../doc/models/tender-buy-now-pay-later-details.md) | Optional | Represents the details of a tender with `type` `BUY_NOW_PAY_LATER`. |
| `squareAccountDetails` | [`TenderSquareAccountDetails \| undefined`](../../doc/models/tender-square-account-details.md) | Optional | Represents the details of a tender with `type` `SQUARE_ACCOUNT`. |
| `additionalRecipients` | [`AdditionalRecipient[] \| null \| undefined`](../../doc/models/additional-recipient.md) | Optional | Additional recipients (other than the merchant) receiving a portion of this tender.<br>For example, fees assessed on the purchase by a third party integration. |
| `paymentId` | `string \| null \| undefined` | Optional | The ID of the [Payment](entity:Payment) that corresponds to this tender.<br>This value is only present for payments created with the v2 Payments API.<br>**Constraints**: *Maximum Length*: `192` |

## Example (as JSON)

```json
{
  "id": "id8",
  "location_id": "location_id2",
  "transaction_id": "transaction_id6",
  "created_at": "created_at6",
  "note": "note4",
  "type": "SQUARE_ACCOUNT"
}
```

