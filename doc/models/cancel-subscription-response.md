
# Cancel Subscription Response

Defines fields that are included in a
[CancelSubscription](#endpoint-subscriptions-cancelsubscription) response.

## Structure

`CancelSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `subscription` | [`Subscription`](/doc/models/subscription.md) | Optional | Represents a customer subscription to a subscription plan.<br>For an overview of the `Subscription` type, see<br>[Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview). |

## Example (as JSON)

```json
{
  "subscription": {
    "canceled_date": "2020-05-01",
    "card_id": "ccof:qy5x8hHGYsgLrp4Q4GB",
    "created_at": "2020-08-03T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "910afd30-464a-4e00-a8d8-2296eEXAMPLE",
    "location_id": "S8GWD5R9QB376",
    "paid_until_date": "2020-05-01",
    "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "start_date": "2020-04-24",
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles",
    "version": 1594311617331
  }
}
```

