
# Balance Payment Details

Reflects the current status of a balance payment. Contains only non-confidential information.

## Structure

`BalancePaymentDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Optional | The ID of the account used to fund the payment. |
| `status` | `string` | Optional | The balance payment’s current state. The state can be COMPLETED or FAILED. |

## Example (as JSON)

```json
{
  "account_id": "account_id2",
  "status": "status8"
}
```

