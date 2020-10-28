
# Redeem Loyalty Reward Response

A response that includes the `LoyaltyEvent` published for redeeming the reward.

## Structure

`RedeemLoyaltyRewardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `event` | [`LoyaltyEvent`](/doc/models/loyalty-event.md) | Optional | Provides information about a loyalty event.<br>For more information, see [Loyalty events](https://developer.squareup.com/docs/docs/loyalty-api/overview/#loyalty-events). |

## Example (as JSON)

```json
{
  "event": {
    "id": "67377a6e-dbdc-369d-aa16-2e7ed422e71f",
    "type": "REDEEM_REWARD",
    "created_at": "2020-05-08T21:56:00Z",
    "redeem_reward": {
      "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
      "reward_id": "9f18ac21-233a-31c3-be77-b45840f5a810"
    },
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "location_id": "P034NEENMD09F",
    "source": "LOYALTY_API"
  }
}
```

