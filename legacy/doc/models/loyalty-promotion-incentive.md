
# Loyalty Promotion Incentive

Represents how points for a [loyalty promotion](../../doc/models/loyalty-promotion.md) are calculated,
either by multiplying the points earned from the base program or by adding a specified number
of points to the points earned from the base program.

## Structure

`LoyaltyPromotionIncentive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`string`](../../doc/models/loyalty-promotion-incentive-type.md) | Required | Indicates the type of points incentive for a [loyalty promotion](../../doc/models/loyalty-promotion.md),<br>which is used to determine how buyers can earn points from the promotion. |
| `pointsMultiplierData` | [`LoyaltyPromotionIncentivePointsMultiplierData \| undefined`](../../doc/models/loyalty-promotion-incentive-points-multiplier-data.md) | Optional | Represents the metadata for a `POINTS_MULTIPLIER` type of [loyalty promotion incentive](../../doc/models/loyalty-promotion-incentive.md). |
| `pointsAdditionData` | [`LoyaltyPromotionIncentivePointsAdditionData \| undefined`](../../doc/models/loyalty-promotion-incentive-points-addition-data.md) | Optional | Represents the metadata for a `POINTS_ADDITION` type of [loyalty promotion incentive](../../doc/models/loyalty-promotion-incentive.md). |

## Example (as JSON)

```json
{
  "type": "POINTS_MULTIPLIER",
  "points_multiplier_data": {
    "points_multiplier": 134,
    "multiplier": "multiplier4"
  },
  "points_addition_data": {
    "points_addition": 218
  }
}
```

