
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
  "id": null,
  "status": null,
  "total_money": null,
  "initiated_at": null,
  "bank_account_id": null,
  "entries": null
}
```

