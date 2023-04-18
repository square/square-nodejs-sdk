
# V1 Settlement

V1Settlement

## Structure

`V1Settlement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The settlement's unique identifier. |
| `status` | [`string \| undefined`](../../doc/models/v1-settlement-status.md) | Optional | - |
| `totalMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `initiatedAt` | `string \| undefined` | Optional | The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format. |
| `bankAccountId` | `string \| undefined` | Optional | The Square-issued unique identifier for the bank account associated with the settlement. |
| `entries` | [`V1SettlementEntry[] \| undefined`](../../doc/models/v1-settlement-entry.md) | Optional | The entries included in this settlement. |

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
  "bank_account_id": "bank_account_id0",
  "entries": [
    {
      "payment_id": "payment_id5",
      "type": "PAID_SERVICE_FEE",
      "amount_money": {
        "amount": 91,
        "currency_code": "PEN"
      },
      "fee_money": {
        "amount": 203,
        "currency_code": "RON"
      }
    }
  ]
}
```

