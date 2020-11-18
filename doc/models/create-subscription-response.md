
# Create Subscription Response

Defines the fields that are included in the response from the
[CreateSubscription](#endpoint-subscriptions-createsubscription) endpoint.

## Structure

`CreateSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `subscription` | [`Subscription`](/doc/models/subscription.md) | Optional | Represents a customer subscription to a subscription plan.<br>For an overview of the `Subscription` type, see<br>[Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview). |

## Example (as JSON)

```json
{
  "subscription": {
    "card_id": "ccof:qy5x8hHGYsgLrp4Q4GB",
    "created_at": "2020-08-03T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "56214fb2-cc85-47a1-93bc-44f3766bb56f",
    "location_id": "S8GWD5R9QB376",
    "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "price_override_money": {
      "amount": 100,
      "currency": "USD"
    },
    "start_date": "2020-08-01",
    "status": "PENDING",
    "tax_percentage": "5",
    "timezone": "America/Los_Angeles",
    "version": 1594155459464
  }
}
```

