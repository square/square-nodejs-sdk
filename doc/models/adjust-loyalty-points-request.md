
# Adjust Loyalty Points Request

A request to adjust (add or subtract) points manually.

## Structure

`AdjustLoyaltyPointsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A unique string that identifies this `AdjustLoyaltyPoints` request.<br>Keys can be any valid string, but must be unique for every request.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `adjustPoints` | [`LoyaltyEventAdjustPoints`](../../doc/models/loyalty-event-adjust-points.md) | Required | Provides metadata when the event `type` is `ADJUST_POINTS`. |

## Example (as JSON)

```json
{
  "adjust_points": {
    "points": 10,
    "reason": "Complimentary points"
  },
  "idempotency_key": "bc29a517-3dc9-450e-aa76-fae39ee849d1"
}
```

