
# Update Subscription Request

Defines input parameters in a request to the
[UpdateSubscription](../../doc/api/subscriptions.md#update-subscription) endpoint.

## Structure

`UpdateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription to a subscription plan by a subscriber.<br><br>For an overview of the `Subscription` type, see<br>[Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview). |

## Example (as JSON)

```json
{
  "subscription": {
    "price_override_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "tax_percentage": null,
    "version": 1594155459464
  }
}
```

