
# Tender

Represents a tender (i.e., a method of payment) used in a Square transaction.

## Structure

`Tender`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The tender's unique ID.<br>**Constraints**: *Maximum Length*: `192` |
| `locationId` | `string` | Optional | The ID of the transaction's associated location.<br>**Constraints**: *Maximum Length*: `50` |
| `transactionId` | `string` | Optional | The ID of the tender's associated transaction.<br>**Constraints**: *Maximum Length*: `192` |
| `createdAt` | `string` | Optional | The timestamp for when the tender was created, in RFC 3339 format.<br>**Constraints**: *Maximum Length*: `32` |
| `note` | `string` | Optional | An optional note associated with the tender at the time of payment.<br>**Constraints**: *Maximum Length*: `500` |
| `amountMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `tipMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `processingFeeMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `customerId` | `string` | Optional | If the tender is associated with a customer or represents a customer's card on file,<br>this is the ID of the associated customer.<br>**Constraints**: *Maximum Length*: `191` |
| `type` | [`string`](/doc/models/tender-type.md) |  | Indicates a tender's type. |
| `cardDetails` | [`TenderCardDetails`](/doc/models/tender-card-details.md) | Optional | Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` |
| `cashDetails` | [`TenderCashDetails`](/doc/models/tender-cash-details.md) | Optional | Represents the details of a tender with `type` `CASH`. |
| `additionalRecipients` | [`AdditionalRecipient[]`](/doc/models/additional-recipient.md) | Optional | Additional recipients (other than the merchant) receiving a portion of this tender.<br>For example, fees assessed on the purchase by a third party integration. |
| `paymentId` | `string` | Optional | The ID of the [Payment](#type-payment) that corresponds to this tender.<br>This value is only present for payments created with the v2 Payments API.<br>**Constraints**: *Maximum Length*: `192` |

## Example (as JSON)

```json
{
  "id": "id0",
  "location_id": "location_id4",
  "transaction_id": "transaction_id8",
  "created_at": "created_at2",
  "note": "note4",
  "type": "WALLET"
}
```

