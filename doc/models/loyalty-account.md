
# Loyalty Account

Describes a loyalty account. For more information, see
[Manage Loyalty Accounts Using the Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview).

## Structure

`LoyaltyAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the loyalty account.<br>**Constraints**: *Maximum Length*: `36` |
| `programId` | `string` | Required | The Square-assigned ID of the [loyalty program](/doc/models/loyalty-program.md) to which the account belongs.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `balance` | `number \| undefined` | Optional | The available point balance in the loyalty account.<br><br>Your application should be able to handle loyalty accounts that have a negative point balance (`balance` is less than 0). This might occur if a seller makes a manual adjustment or as a result of a refund or exchange. |
| `lifetimePoints` | `number \| undefined` | Optional | The total points accrued during the lifetime of the account. |
| `customerId` | `string \| undefined` | Optional | The Square-assigned ID of the [customer](/doc/models/customer.md) that is associated with the account. |
| `enrolledAt` | `string \| undefined` | Optional | The timestamp when enrollment occurred, in RFC 3339 format. |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the loyalty account was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the loyalty account was last updated, in RFC 3339 format. |
| `mapping` | [`LoyaltyAccountMapping \| undefined`](/doc/models/loyalty-account-mapping.md) | Optional | Represents the mapping that associates a loyalty account with a buyer.<br><br>Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see<br>[Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview). |

## Example (as JSON)

```json
{
  "id": "id0",
  "program_id": "program_id0",
  "balance": 64,
  "lifetime_points": 88,
  "customer_id": "customer_id8",
  "enrolled_at": "enrolled_at0"
}
```

