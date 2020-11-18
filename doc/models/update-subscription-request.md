
# Update Subscription Request

Defines parameters in a
[UpdateSubscription](#endpoint-subscriptions-updatesubscription) endpoint
request.

## Structure

`UpdateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`Subscription`](/doc/models/subscription.md) | Optional | Represents a customer subscription to a subscription plan.<br>For an overview of the `Subscription` type, see<br>[Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview). |

## Example (as JSON)

```json
{
  "subscription": {
    "price_override_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "tax_percentage": "null",
    "version": 1594155459464
  }
}
```

