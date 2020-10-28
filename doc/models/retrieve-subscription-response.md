
# Retrieve Subscription Response

Defines the fields that are included in the response from the
[RetrieveSubscription](#endpoint-subscriptions-retrievesubscription) endpoint.

## Structure

`RetrieveSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `subscription` | [`Subscription`](/doc/models/subscription.md) | Optional | Represents a customer subscription to a subscription plan.<br>For an overview of the `Subscription` type, see<br>[Subscription object](https://developer.squareup.com/docs/docs/subscriptions-api/overview#subscription-object-overview). |

## Example (as JSON)

```json
{
  "subscription": {
    "id": "8151fc89-da15-4eb9-a685-1a70883cebfc",
    "location_id": "S8GWD5R9QB376",
    "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "start_date": "2020-05-11",
    "charged_through_date": "2020-06-11",
    "status": "ACTIVE",
    "invoice_ids": [
      "grebK0Q_l8H4fqoMMVvt-Q",
      "rcX_i3sNmHTGKhI4W2mceA"
    ],
    "price_override_money": {
      "amount": 1000,
      "currency": "USD"
    },
    "created_at": "2020-08-03T21:53:10Z",
    "paid_until_date": "2020-06-11",
    "timezone": "America/Los_Angeles"
  }
}
```

