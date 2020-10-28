
# Adjust Loyalty Points Response

A response that includes the loyalty event that
resulted from the successful API call.

## Structure

`AdjustLoyaltyPointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `event` | [`LoyaltyEvent`](/doc/models/loyalty-event.md) | Optional | Provides information about a loyalty event.<br>For more information, see [Loyalty events](https://developer.squareup.com/docs/docs/loyalty-api/overview/#loyalty-events). |

## Example (as JSON)

```json
{
  "event": {
    "id": "613a6fca-8d67-39d0-bad2-3b4bc45c8637",
    "type": "ADJUST_POINTS",
    "created_at": "2020-05-08T21:42:32Z",
    "adjust_points": {
      "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
      "points": 10,
      "reason": "Complimentary points"
    },
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "source": "LOYALTY_API"
  }
}
```

