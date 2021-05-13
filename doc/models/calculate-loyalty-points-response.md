
# Calculate Loyalty Points Response

A response that includes the points that the buyer can earn from
a specified purchase.

## Structure

`CalculateLoyaltyPointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `points` | `number \| undefined` | Optional | The points that the buyer can earn from a specified purchase. |

## Example (as JSON)

```json
{
  "points": 6
}
```

