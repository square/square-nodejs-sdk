
# Loyalty Program Reward Tier

Describes a loyalty program reward tier.

## Structure

`LoyaltyProgramRewardTier`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `id` | `string` | The Square-assigned ID of the reward tier. |
| `points` | `number` | The points exchanged for the reward tier. |
| `name` | `string` | The name of the reward tier. |
| `definition` | [`LoyaltyProgramRewardDefinition`](/doc/models/loyalty-program-reward-definition.md) | Provides details about the loyalty program reward tier definition. |
| `created_at` | `string` | The timestamp when the reward tier was created, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id0",
  "points": 236,
  "name": "name0",
  "definition": {
    "scope": "ORDER",
    "discount_type": "FIXED_AMOUNT",
    "percentage_discount": "percentage_discount2",
    "catalog_object_ids": [
      "catalog_object_ids6"
    ],
    "fixed_discount_money": {
      "amount": 132,
      "currency": "TRY"
    },
    "max_discount_money": {
      "amount": 176,
      "currency": "MYR"
    }
  },
  "created_at": "created_at2"
}
```

