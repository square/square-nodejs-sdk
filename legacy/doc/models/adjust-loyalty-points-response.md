
# Adjust Loyalty Points Response

Represents an [AdjustLoyaltyPoints](../../doc/api/loyalty.md#adjust-loyalty-points) request.

## Structure

`AdjustLoyaltyPointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `event` | [`LoyaltyEvent \| undefined`](../../doc/models/loyalty-event.md) | Optional | Provides information about a loyalty event.<br>For more information, see [Search for Balance-Changing Loyalty Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events). |

## Example (as JSON)

```json
{
  "event": {
    "adjust_points": {
      "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
      "points": 10,
      "reason": "Complimentary points"
    },
    "created_at": "2020-05-08T21:42:32Z",
    "id": "613a6fca-8d67-39d0-bad2-3b4bc45c8637",
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "source": "LOYALTY_API",
    "type": "ADJUST_POINTS",
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
    "redeem_reward": {
      "loyalty_program_id": "loyalty_program_id8",
      "reward_id": "reward_id2",
      "order_id": "order_id8"
    },
    "delete_reward": {
      "loyalty_program_id": "loyalty_program_id4",
      "reward_id": "reward_id8",
      "points": 104
    }
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

