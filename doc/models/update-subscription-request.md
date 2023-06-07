
# Update Subscription Request

Defines input parameters in a request to the
[UpdateSubscription](../../doc/api/subscriptions.md#update-subscription) endpoint.

## Structure

`UpdateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription purchased by a customer.<br><br>For more information, see<br>[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions). |

## Example (as JSON)

```json
{
  "subscription": {
    "price_override_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "tax_percentage": null,
    "version": 1594155459464,
    "id": "id4",
    "location_id": "location_id8",
    "plan_variation_id": "plan_variation_id8",
    "customer_id": "customer_id2",
    "start_date": "start_date8"
  }
}
```

