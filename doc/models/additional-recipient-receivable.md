
# Additional Recipient Receivable

Represents a monetary distribution of part of a [Transaction](#type-transaction)'s amount for Transactions which included additional recipients. The location of this receivable is that same as the one specified in the [AdditionalRecipient](#type-additionalrecipient).

## Structure

`AdditionalRecipientReceivable`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` |  | The additional recipient receivable's unique ID, issued by Square payments servers. |
| `transaction_id` | `string` |  | The ID of the transaction that the additional recipient receivable was applied to. |
| `transaction_location_id` | `string` |  | The ID of the location that created the receivable. This is the location ID on the associated transaction. |
| `amount_money` | [`Money`](/doc/models/money.md) |  | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `created_at` | `string` | Optional | The time when the additional recipient receivable was created, in RFC 3339 format. |
| `refunds` | [`AdditionalRecipientReceivableRefund[]`](/doc/models/additional-recipient-receivable-refund.md) | Optional | Any refunds of the receivable that have been applied. |

## Example (as JSON)

```json
{
  "id": "id0",
  "transaction_id": "transaction_id8",
  "transaction_location_id": "transaction_location_id6",
  "amount_money": {
    "amount": 186,
    "currency": "NGN"
  },
  "created_at": "created_at2",
  "refunds": [
    {
      "id": "id4",
      "receivable_id": "receivable_id4",
      "refund_id": "refund_id8",
      "transaction_location_id": "transaction_location_id0",
      "amount_money": {
        "amount": 186,
        "currency": "YER"
      },
      "created_at": "created_at2"
    },
    {
      "id": "id5",
      "receivable_id": "receivable_id5",
      "refund_id": "refund_id9",
      "transaction_location_id": "transaction_location_id1",
      "amount_money": {
        "amount": 187,
        "currency": "ZAR"
      },
      "created_at": "created_at3"
    },
    {
      "id": "id6",
      "receivable_id": "receivable_id6",
      "refund_id": "refund_id0",
      "transaction_location_id": "transaction_location_id2",
      "amount_money": {
        "amount": 188,
        "currency": "ZMK"
      },
      "created_at": "created_at4"
    }
  ]
}
```

