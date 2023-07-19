
# Retrieve Loyalty Reward Response

A response that includes the loyalty reward.

## Structure

`RetrieveLoyaltyRewardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `reward` | [`LoyaltyReward \| undefined`](../../doc/models/loyalty-reward.md) | Optional | Represents a contract to redeem loyalty points for a [reward tier](../../doc/models/loyalty-program-reward-tier.md) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state.<br>For more information, see [Manage loyalty rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards). |

## Example (as JSON)

```json
{
  "reward": {
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
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

