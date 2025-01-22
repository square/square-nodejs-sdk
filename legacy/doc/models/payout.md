
# Payout

An accounting of the amount owed the seller and record of the actual transfer to their
external bank account or to the Square balance.

## Structure

`Payout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A unique ID for the payout.<br>**Constraints**: *Minimum Length*: `1` |
| `status` | [`string \| undefined`](../../doc/models/payout-status.md) | Optional | Payout status types |
| `locationId` | `string` | Required | The ID of the location associated with the payout.<br>**Constraints**: *Minimum Length*: `1` |
| `createdAt` | `string \| undefined` | Optional | The timestamp of when the payout was created and submitted for deposit to the seller's banking destination, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp of when the payout was last updated, in RFC 3339 format. |
| `amountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `destination` | [`Destination \| undefined`](../../doc/models/destination.md) | Optional | Information about the destination against which the payout was made. |
| `version` | `number \| undefined` | Optional | The version number, which is incremented each time an update is made to this payout record.<br>The version number helps developers receive event notifications or feeds out of order. |
| `type` | [`string \| undefined`](../../doc/models/payout-type.md) | Optional | The type of payout: “BATCH” or “SIMPLE”.<br>BATCH payouts include a list of payout entries that can be considered settled.<br>SIMPLE payouts do not have any payout entries associated with them<br>and will show up as one of the payout entries in a future BATCH payout. |
| `payoutFee` | [`PayoutFee[] \| null \| undefined`](../../doc/models/payout-fee.md) | Optional | A list of transfer fees and any taxes on the fees assessed by Square for this payout. |
| `arrivalDate` | `string \| null \| undefined` | Optional | The calendar date, in ISO 8601 format (YYYY-MM-DD), when the payout is due to arrive in the seller’s banking destination. |
| `endToEndId` | `string \| null \| undefined` | Optional | A unique ID for each `Payout` object that might also appear on the seller’s bank statement. You can use this ID to automate the process of reconciling each payout with the corresponding line item on the bank statement. |

## Example (as JSON)

```json
{
  "id": "id4",
  "status": "SENT",
  "location_id": "location_id8",
  "created_at": "created_at2",
  "updated_at": "updated_at0",
  "amount_money": {
    "amount": 186,
    "currency": "AUD"
  },
  "destination": {
    "type": "BANK_ACCOUNT",
    "id": "id4"
  }
}
```

