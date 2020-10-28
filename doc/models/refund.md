
# Refund

Represents a refund processed for a Square transaction.

## Structure

`Refund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` |  | The refund's unique ID. |
| `location_id` | `string` |  | The ID of the refund's associated location. |
| `transaction_id` | `string` |  | The ID of the transaction that the refunded tender is part of. |
| `tender_id` | `string` |  | The ID of the refunded tender. |
| `created_at` | `string` | Optional | The timestamp for when the refund was created, in RFC 3339 format. |
| `reason` | `string` |  | The reason for the refund being issued. |
| `amount_money` | [`Money`](/doc/models/money.md) |  | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `status` | [`string`](/doc/models/refund-status.md) |  | Indicates a refund's current status. |
| `processing_fee_money` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `additional_recipients` | [`AdditionalRecipient[]`](/doc/models/additional-recipient.md) | Optional | Additional recipients (other than the merchant) receiving a portion of this refund.<br>For example, fees assessed on a refund of a purchase by a third party integration. |

## Example (as JSON)

```json
{
  "id": "id0",
  "location_id": "location_id4",
  "transaction_id": "transaction_id8",
  "tender_id": "tender_id8",
  "created_at": "created_at2",
  "reason": "reason4",
  "amount_money": {
    "amount": 186,
    "currency": "NGN"
  },
  "status": "PENDING",
  "processing_fee_money": {
    "amount": 112,
    "currency": "XBB"
  },
  "additional_recipients": [
    {
      "location_id": "location_id3",
      "description": "description9",
      "amount_money": {
        "amount": 83,
        "currency": "ALL"
      },
      "receivable_id": "receivable_id9"
    },
    {
      "location_id": "location_id4",
      "description": "description0",
      "amount_money": {
        "amount": 84,
        "currency": "AMD"
      },
      "receivable_id": "receivable_id0"
    },
    {
      "location_id": "location_id5",
      "description": "description1",
      "amount_money": {
        "amount": 85,
        "currency": "ANG"
      },
      "receivable_id": "receivable_id1"
    }
  ]
}
```

