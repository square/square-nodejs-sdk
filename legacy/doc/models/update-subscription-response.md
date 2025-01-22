
# Update Subscription Response

Defines output parameters in a response from the
[UpdateSubscription](../../doc/api/subscriptions.md#update-subscription) endpoint.

## Structure

`UpdateSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription purchased by a customer.<br><br>For more information, see<br>[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions). |

## Example (as JSON)

```json
{
  "subscription": {
    "card_id": "{NEW CARD ID}",
    "charged_through_date": "2023-03-13",
    "created_at": "2023-01-30T19:27:32Z",
    "customer_id": "AM69AB81FT4479YH9HGWS1HZY8",
    "id": "7217d8ca-1fee-4446-a9e5-8540b5d8c9bb",
    "invoice_ids": [
      "inv:0-ChAPSfVYvNewckgf3x4iigN_ENMM",
      "inv:0-ChBQaCCLfjcm9WEUBGxvuydJENMM"
    ],
    "location_id": "LPJKHYR7WFDKN",
    "plan_variation_id": "XOUNEKCE6NSXQW5NTSQ73MMX",
    "source": {
      "name": "My Application"
    },
    "start_date": "2023-01-30",
    "status": "ACTIVE",
    "timezone": "UTC",
    "version": 3
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

