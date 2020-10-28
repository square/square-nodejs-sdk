
# V1 Settlement

V1Settlement

## Structure

`V1Settlement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The settlement's unique identifier. |
| `status` | [`string`](/doc/models/v1-settlement-status.md) | Optional | - |
| `total_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `initiated_at` | `string` | Optional | The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format. |
| `bank_account_id` | `string` | Optional | The Square-issued unique identifier for the bank account associated with the settlement. |
| `entries` | [`V1SettlementEntry[]`](/doc/models/v1-settlement-entry.md) | Optional | The entries included in this settlement. |

## Example (as JSON)

```json
{
  "id": "id0",
  "status": "FAILED",
  "total_money": {
    "amount": 250,
    "currency_code": "USS"
  },
  "initiated_at": "initiated_at2",
  "bank_account_id": "bank_account_id0"
}
```

