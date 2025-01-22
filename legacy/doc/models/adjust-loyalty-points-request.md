
# Adjust Loyalty Points Request

Represents an [AdjustLoyaltyPoints](../../doc/api/loyalty.md#adjust-loyalty-points) request.

## Structure

`AdjustLoyaltyPointsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A unique string that identifies this `AdjustLoyaltyPoints` request.<br>Keys can be any valid string, but must be unique for every request.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `adjustPoints` | [`LoyaltyEventAdjustPoints`](../../doc/models/loyalty-event-adjust-points.md) | Required | Provides metadata when the event `type` is `ADJUST_POINTS`. |
| `allowNegativeBalance` | `boolean \| null \| undefined` | Optional | Indicates whether to allow a negative adjustment to result in a negative balance. If `true`, a negative<br>balance is allowed when subtracting points. If `false`, Square returns a `BAD_REQUEST` error when subtracting<br>the specified number of points would result in a negative balance. The default value is `false`. |

## Example (as JSON)

```json
{
  "adjust_points": {
    "points": 10,
    "reason": "Complimentary points",
    "loyalty_program_id": "loyalty_program_id2"
  },
  "idempotency_key": "bc29a517-3dc9-450e-aa76-fae39ee849d1",
  "allow_negative_balance": false
}
```

