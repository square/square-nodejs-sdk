
# Loyalty Event Redeem Reward

Provides metadata when the event `type` is `REDEEM_REWARD`.

## Structure

`LoyaltyEventRedeemReward`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyalty_program_id` | `string` |  | The ID of the [loyalty program](#type-LoyaltyProgram). |
| `reward_id` | `string` | Optional | The ID of the redeemed [loyalty reward](#type-LoyaltyReward).<br>This field is returned only if the event source is `LOYALTY_API`. |
| `order_id` | `string` | Optional | The ID of the [order](#type-Order) that redeemed the reward.<br>This field is returned only if the Orders API is used to process orders. |

## Example (as JSON)

```json
{
  "loyalty_program_id": "loyalty_program_id0",
  "reward_id": "reward_id4",
  "order_id": "order_id6"
}
```

