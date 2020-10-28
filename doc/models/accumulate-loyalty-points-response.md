
# Accumulate Loyalty Points Response

A response containing the resulting loyalty event.

## Structure

`AccumulateLoyaltyPointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `event` | [`LoyaltyEvent`](/doc/models/loyalty-event.md) | Optional | Provides information about a loyalty event.<br>For more information, see [Loyalty events](https://developer.squareup.com/docs/docs/loyalty-api/overview/#loyalty-events). |

## Example (as JSON)

```json
{
  "event": {
    "id": "ee46aafd-1af6-3695-a385-276e2ef0be26",
    "type": "ACCUMULATE_POINTS",
    "created_at": "2020-05-08T21:41:12Z",
    "accumulate_points": {
      "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
      "points": 6,
      "order_id": "RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY"
    },
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "location_id": "P034NEENMD09F",
    "source": "LOYALTY_API"
  }
}
```

