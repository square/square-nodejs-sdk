
# Search Loyalty Rewards Response

A response that includes the loyalty rewards satisfying the search criteria.

## Structure

`SearchLoyaltyRewardsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `rewards` | [`LoyaltyReward[] \| undefined`](../../doc/models/loyalty-reward.md) | Optional | The loyalty rewards that satisfy the search criteria.<br>These are returned in descending order by `updated_at`. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent<br>request. If empty, this is the final response. |

## Example (as JSON)

```json
{
  "rewards": [
    {
      "created_at": "2020-05-08T22:00:44Z",
      "id": "d03f79f4-815f-3500-b851-cc1e68a457f9",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "order_id": "PyATxhYLfsMqpVkcKJITPydgEYfZY",
      "points": 10,
      "redeemed_at": "2020-05-08T22:01:17Z",
      "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
      "status": "REDEEMED",
      "updated_at": "2020-05-08T22:01:17Z"
    },
    {
      "created_at": "2020-05-08T21:55:42Z",
      "id": "9f18ac21-233a-31c3-be77-b45840f5a810",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "points": 10,
      "redeemed_at": "2020-05-08T21:56:00Z",
      "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
      "status": "REDEEMED",
      "updated_at": "2020-05-08T21:56:00Z",
      "order_id": "order_id4"
    },
    {
      "created_at": "2020-05-01T21:49:54Z",
      "id": "a8f43ebe-2ad6-3001-bdd5-7d7c2da08943",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "order_id": "5NB69ZNh3FbsOs1ox43bh1xrli6YY",
      "points": 10,
      "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
      "status": "DELETED",
      "updated_at": "2020-05-08T21:55:10Z"
    },
    {
      "created_at": "2020-05-01T20:20:37Z",
      "id": "a051254c-f840-3b45-8cf1-50bcd38ff92a",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "order_id": "LQQ16znvi2VIUKPVhUfJefzr1eEZY",
      "points": 10,
      "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
      "status": "ISSUED",
      "updated_at": "2020-05-01T20:20:40Z"
    }
  ],
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
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "cursor": "cursor4"
}
```

