
# Loyalty Reward

## Structure

`LoyaltyReward`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The Square-assigned ID of the loyalty reward.<br>**Constraints**: *Maximum Length*: `36` |
| `status` | [`string`](/doc/models/loyalty-reward-status.md) | Optional | The status of the loyalty reward. |
| `loyaltyAccountId` | `string` | Required | The Square-assigned ID of the [loyalty account](#type-LoyaltyAccount) to which the reward belongs.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `rewardTierId` | `string` | Required | The Square-assigned ID of the [reward tier](#type-LoyaltyProgramRewardTier) used to create the reward.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `points` | `number` | Optional | The number of loyalty points used for the reward.<br>**Constraints**: `>= 1` |
| `orderId` | `string` | Optional | The Square-assigned ID of the [order](#type-Order) to which the reward is attached. |
| `createdAt` | `string` | Optional | The timestamp when the reward was created, in RFC 3339 format. |
| `updatedAt` | `string` | Optional | The timestamp when the reward was last updated, in RFC 3339 format. |
| `redeemedAt` | `string` | Optional | The timestamp when the reward was redeemed, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id0",
  "status": "DELETED",
  "loyalty_account_id": "loyalty_account_id0",
  "reward_tier_id": "reward_tier_id6",
  "points": 236,
  "order_id": "order_id6",
  "created_at": "created_at2"
}
```

