
# Accumulate Loyalty Points Response

Represents an [AccumulateLoyaltyPoints](../../doc/api/loyalty.md#accumulate-loyalty-points) response.

## Structure

`AccumulateLoyaltyPointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `event` | [`LoyaltyEvent \| undefined`](../../doc/models/loyalty-event.md) | Optional | Provides information about a loyalty event.<br>For more information, see [Search for Balance-Changing Loyalty Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events). |
| `events` | [`LoyaltyEvent[] \| undefined`](../../doc/models/loyalty-event.md) | Optional | The resulting loyalty events. If the purchase qualifies for points, the `ACCUMULATE_POINTS` event<br>is always included. When using the Orders API, the `ACCUMULATE_PROMOTION_POINTS` event is included<br>if the purchase also qualifies for a loyalty promotion. |

## Example (as JSON)

```json
{
  "events": [
    {
      "accumulate_points": {
        "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
        "order_id": "RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY",
        "points": 6
      },
      "created_at": "2020-05-08T21:41:12Z",
      "id": "ee46aafd-1af6-3695-a385-276e2ef0be26",
      "location_id": "P034NEENMD09F",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "source": "LOYALTY_API",
      "type": "ACCUMULATE_POINTS",
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
      },
      "adjust_points": {
        "loyalty_program_id": "loyalty_program_id2",
        "points": 96,
        "reason": "reason2"
      }
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "event": {
    "id": "id0",
    "type": "ADJUST_POINTS",
    "created_at": "created_at8",
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
    },
    "adjust_points": {
      "loyalty_program_id": "loyalty_program_id2",
      "points": 96,
      "reason": "reason2"
    },
    "loyalty_account_id": "loyalty_account_id0",
    "source": "SQUARE"
  }
}
```

