
# Loyalty Promotion Incentive Points Multiplier Data

Represents the metadata for a `POINTS_MULTIPLIER` type of [loyalty promotion incentive](../../doc/models/loyalty-promotion-incentive.md).

## Structure

`LoyaltyPromotionIncentivePointsMultiplierData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pointsMultiplier` | `number \| null \| undefined` | Optional | The multiplier used to calculate the number of points earned each time the promotion<br>is triggered. For example, suppose a purchase qualifies for 5 points from the base loyalty program.<br>If the purchase also qualifies for a `POINTS_MULTIPLIER` promotion incentive with a `points_multiplier`<br>of 3, the buyer earns a total of 15 points (5 program points x 3 promotion multiplier = 15 points).<br><br>DEPRECATED at version 2023-08-16. Replaced by the `multiplier` field.<br><br>One of the following is required when specifying a points multiplier:<br><br>- (Recommended) The `multiplier` field.<br>- This deprecated `points_multiplier` field. If provided in the request, Square also returns `multiplier`<br>  with the equivalent value.<br>**Constraints**: `>= 2`, `<= 10` |
| `multiplier` | `string \| null \| undefined` | Optional | The multiplier used to calculate the number of points earned each time the promotion is triggered,<br>specified as a string representation of a decimal. Square supports multipliers up to 10x, with three<br>point precision for decimal multipliers. For example, suppose a purchase qualifies for 4 points from the<br>base loyalty program. If the purchase also qualifies for a `POINTS_MULTIPLIER` promotion incentive with a<br>`multiplier` of "1.5", the buyer earns a total of 6 points (4 program points x 1.5 promotion multiplier = 6 points).<br>Fractional points are dropped.<br><br>One of the following is required when specifying a points multiplier:<br><br>- (Recommended) This `multiplier` field.<br>- The deprecated `points_multiplier` field. If provided in the request, Square also returns `multiplier`<br>  with the equivalent value.<br>**Constraints**: *Maximum Length*: `5` |

## Example (as JSON)

```json
{
  "points_multiplier": 116,
  "multiplier": "multiplier2"
}
```

