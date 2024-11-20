
# Redeem Loyalty Reward Response

A response that includes the `LoyaltyEvent` published for redeeming the reward.

## Structure

`RedeemLoyaltyRewardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `event` | [`LoyaltyEvent \| undefined`](../../doc/models/loyalty-event.md) | Optional | Provides information about a loyalty event.<br>For more information, see [Search for Balance-Changing Loyalty Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events). |

## Example (as JSON)

```json
{
  "event": {
    "created_at": "2020-05-08T21:56:00Z",
    "id": "67377a6e-dbdc-369d-aa16-2e7ed422e71f",
    "location_id": "P034NEENMD09F",
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "redeem_reward": {
      "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
      "reward_id": "9f18ac21-233a-31c3-be77-b45840f5a810",
      "order_id": "order_id8"
    },
    "source": "LOYALTY_API",
    "type": "REDEEM_REWARD",
    "accumulate_points": {
      "loyalty_program_id": "loyalty_program_id8",
      "points": 118,
      "order_id": "order_id8"
    },
    "create_reward": {
      "loyalty_program_id": "loyalty_program_id2",
      "reward_id": "reward_id6",
      "points": 90
    },
    "delete_reward": {
      "loyalty_program_id": "loyalty_program_id4",
      "reward_id": "reward_id8",
      "points": 104
    },
    "adjust_points": {
      "loyalty_program_id": "loyalty_program_id2",
      "points": 96,
      "reason": "reason2"
    }
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

