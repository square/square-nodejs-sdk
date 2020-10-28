
# Search Loyalty Rewards Response

A response that includes the loyalty rewards satisfying the search criteria.

## Structure

`SearchLoyaltyRewardsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `rewards` | [`LoyaltyReward[]`](/doc/models/loyalty-reward.md) | Optional | The loyalty rewards that satisfy the search criteria.<br>These are returned in descending order by `updated_at`. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent<br>request. If empty, this is the final response. |

## Example (as JSON)

```json
{
  "rewards": [
    {
      "id": "d03f79f4-815f-3500-b851-cc1e68a457f9",
      "status": "REDEEMED",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
      "points": 10,
      "order_id": "PyATxhYLfsMqpVkcKJITPydgEYfZY",
      "created_at": "2020-05-08T22:00:44Z",
      "updated_at": "2020-05-08T22:01:17Z",
      "redeemed_at": "2020-05-08T22:01:17Z"
    },
    {
      "id": "9f18ac21-233a-31c3-be77-b45840f5a810",
      "status": "REDEEMED",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
      "points": 10,
      "created_at": "2020-05-08T21:55:42Z",
      "updated_at": "2020-05-08T21:56:00Z",
      "redeemed_at": "2020-05-08T21:56:00Z"
    },
    {
      "id": "a8f43ebe-2ad6-3001-bdd5-7d7c2da08943",
      "status": "DELETED",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
      "points": 10,
      "order_id": "5NB69ZNh3FbsOs1ox43bh1xrli6YY",
      "created_at": "2020-05-01T21:49:54Z",
      "updated_at": "2020-05-08T21:55:10Z"
    },
    {
      "id": "a051254c-f840-3b45-8cf1-50bcd38ff92a",
      "status": "ISSUED",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
      "points": 10,
      "order_id": "LQQ16znvi2VIUKPVhUfJefzr1eEZY",
      "created_at": "2020-05-01T20:20:37Z",
      "updated_at": "2020-05-01T20:20:40Z"
    }
  ]
}
```

