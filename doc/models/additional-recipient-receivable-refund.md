
# Additional Recipient Receivable Refund

A refund of an [AdditionalRecipientReceivable](#type-additionalrecipientreceivable). This includes the ID of the additional recipient receivable associated to this object, as well as a reference to the [Refund](#type-refund) that created this receivable refund.

## Structure

`AdditionalRecipientReceivableRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` |  | The receivable refund's unique ID, issued by Square payments servers. |
| `receivable_id` | `string` |  | The ID of the receivable that the refund was applied to. |
| `refund_id` | `string` |  | The ID of the refund that is associated to this receivable refund. |
| `transaction_location_id` | `string` |  | The ID of the location that created the receivable. This is the location ID on the associated transaction. |
| `amount_money` | [`Money`](/doc/models/money.md) |  | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `created_at` | `string` | Optional | The time when the refund was created, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id0",
  "receivable_id": "receivable_id0",
  "refund_id": "refund_id4",
  "transaction_location_id": "transaction_location_id6",
  "amount_money": {
    "amount": 186,
    "currency": "NGN"
  },
  "created_at": "created_at2"
}
```

