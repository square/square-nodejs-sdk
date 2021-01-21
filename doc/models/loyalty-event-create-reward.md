
# Loyalty Event Create Reward

Provides metadata when the event `type` is `CREATE_REWARD`.

## Structure

`LoyaltyEventCreateReward`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyProgramId` | `string` |  | The ID of the [loyalty program](#type-LoyaltyProgram).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `rewardId` | `string` | Optional | The Square-assigned ID of the created [loyalty reward](#type-LoyaltyReward).<br>This field is returned only if the event source is `LOYALTY_API`.<br>**Constraints**: *Maximum Length*: `36` |
| `points` | `number` |  | The loyalty points used to create the reward. |

## Example (as JSON)

```json
{
  "loyalty_program_id": "loyalty_program_id0",
  "reward_id": "reward_id4",
  "points": 236
}
```

