
# Loyalty Reward

Represents a contract to redeem loyalty points for a [reward tier](../../doc/models/loyalty-program-reward-tier.md) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state.
For more information, see [Manage loyalty rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).

## Structure

`LoyaltyReward`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the loyalty reward.<br>**Constraints**: *Maximum Length*: `36` |
| `status` | [`string \| undefined`](../../doc/models/loyalty-reward-status.md) | Optional | The status of the loyalty reward. |
| `loyaltyAccountId` | `string` | Required | The Square-assigned ID of the [loyalty account](entity:LoyaltyAccount) to which the reward belongs.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `rewardTierId` | `string` | Required | The Square-assigned ID of the [reward tier](entity:LoyaltyProgramRewardTier) used to create the reward.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `points` | `number \| undefined` | Optional | The number of loyalty points used for the reward.<br>**Constraints**: `>= 1` |
| `orderId` | `string \| null \| undefined` | Optional | The Square-assigned ID of the [order](entity:Order) to which the reward is attached. |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the reward was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the reward was last updated, in RFC 3339 format. |
| `redeemedAt` | `string \| undefined` | Optional | The timestamp when the reward was redeemed, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id6",
  "status": "DELETED",
  "loyalty_account_id": "loyalty_account_id4",
  "reward_tier_id": "reward_tier_id2",
  "points": 114,
  "order_id": "order_id0",
  "created_at": "created_at4"
}
```

