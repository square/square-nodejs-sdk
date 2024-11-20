
# Delete Webhook Subscription Response

Defines the fields that are included in the response body of
a request to the [DeleteWebhookSubscription](../../doc/api/webhook-subscriptions.md#delete-webhook-subscription) endpoint.

## Structure

`DeleteWebhookSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |

## Example (as JSON)

```json
{
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

