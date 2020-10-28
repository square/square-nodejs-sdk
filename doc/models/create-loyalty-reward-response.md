
# Create Loyalty Reward Response

A response that includes the loyalty reward created.

## Structure

`CreateLoyaltyRewardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `reward` | [`LoyaltyReward`](/doc/models/loyalty-reward.md) | Optional | - |

## Example (as JSON)

```json
{
  "reward": {
    "id": "a8f43ebe-2ad6-3001-bdd5-7d7c2da08943",
    "status": "ISSUED",
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "reward_tier_id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
    "points": 10,
    "order_id": "RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY",
    "created_at": "2020-05-01T21:49:54Z",
    "updated_at": "2020-05-01T21:49:54Z"
  }
}
```

