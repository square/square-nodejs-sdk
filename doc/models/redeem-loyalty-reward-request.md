
# Redeem Loyalty Reward Request

A request to redeem a loyalty reward.

## Structure

`RedeemLoyaltyRewardRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `idempotency_key` | `string` | A unique string that identifies this `RedeemLoyaltyReward` request.<br>Keys can be any valid string, but must be unique for every request. |
| `location_id` | `string` | The ID of the [location](#type-Location) where the reward is redeemed. |

## Example (as JSON)

```json
{
  "idempotency_key": "98adc7f7-6963-473b-b29c-f3c9cdd7d994",
  "location_id": "P034NEENMD09F"
}
```

