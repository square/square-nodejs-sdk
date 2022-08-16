
# Loyalty Promotion Incentive Points Multiplier Data

Represents the metadata for a `POINTS_MULTIPLIER` type of [loyalty promotion incentive](../../doc/models/loyalty-promotion-incentive.md).

## Structure

`LoyaltyPromotionIncentivePointsMultiplierData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pointsMultiplier` | `number` | Required | The multiplier used to calculate the number of points earned each time the promotion<br>is triggered. For example, suppose a purchase qualifies for 5 points from the base loyalty program.<br>If the purchase also qualifies for a `POINTS_MULTIPLIER` promotion incentive with a `points_multiplier`<br>of 3, the buyer earns a total of 15 points (5 program points x 3 promotion multiplier = 15 points).<br>**Constraints**: `>= 2`, `<= 10` |

## Example (as JSON)

```json
{
  "points_multiplier": 8
}
```

