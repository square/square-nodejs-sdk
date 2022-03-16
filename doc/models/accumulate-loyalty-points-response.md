
# Accumulate Loyalty Points Response

A response containing the resulting loyalty event.

## Structure

`AccumulateLoyaltyPointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `event` | [`LoyaltyEvent \| undefined`](../../doc/models/loyalty-event.md) | Optional | Provides information about a loyalty event.<br>For more information, see [Search for Balance-Changing Loyalty Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events). |

## Example (as JSON)

```json
{
  "event": {
    "accumulate_points": {
      "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
      "order_id": "RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY",
      "points": 6
    },
    "created_at": "2020-05-08T21:41:12Z",
    "id": "ee46aafd-1af6-3695-a385-276e2ef0be26",
    "location_id": "P034NEENMD09F",
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "source": "LOYALTY_API",
    "type": "ACCUMULATE_POINTS"
  }
}
```

