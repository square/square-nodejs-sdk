
# Retrieve Loyalty Reward Response

A response that includes the loyalty reward.

## Structure

`RetrieveLoyaltyRewardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `reward` | [`LoyaltyReward`](/doc/models/loyalty-reward.md) | Optional | - |

## Example (as JSON)

```json
{
  "reward": {
    "id": "9f18ac21-233a-31c3-be77-b45840f5a810",
    "status": "REDEEMED",
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
    "points": 10,
    "created_at": "2020-05-08T21:55:42Z",
    "updated_at": "2020-05-08T21:56:00Z",
    "redeemed_at": "2020-05-08T21:56:00Z"
  }
}
```

