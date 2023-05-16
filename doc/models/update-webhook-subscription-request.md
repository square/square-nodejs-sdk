
# Update Webhook Subscription Request

Updates a [Subscription](../../doc/models/webhook-subscription.md).

## Structure

`UpdateWebhookSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`WebhookSubscription \| undefined`](../../doc/models/webhook-subscription.md) | Optional | Represents the details of a webhook subscription, including notification URL,<br>event types, and signature key. |

## Example (as JSON)

```json
{
  "subscription": {
    "enabled": false,
    "name": "Updated Example Webhook Subscription",
    "id": "id4",
    "event_types": [
      "event_types2",
      "event_types3"
    ],
    "notification_url": "notification_url8"
  }
}
```

