
# Resume Subscription Response

Defines output parameters in a response from the
[ResumeSubscription](../../doc/api/subscriptions.md#resume-subscription) endpoint.

## Structure

`ResumeSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription to a subscription plan by a subscriber.<br><br>For an overview of the `Subscription` type, see<br>[Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview). |
| `actions` | [`SubscriptionAction[] \| undefined`](../../doc/models/subscription-action.md) | Optional | A list of `RESUME` actions created by the request and scheduled for the subscription. |

## Example (as JSON)

```json
{
  "actions": [
    {
      "effective_date": "2022-01-01",
      "id": "18ff74f4-3da4-30c5-929f-7d6fca84f115",
      "type": "RESUME"
    }
  ],
  "subscription": {
    "created_at": "2021-10-20T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "9ba40961-995a-4a3d-8c53-048c40cafc13",
    "location_id": "S8GWD5R9QB376",
    "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "price_override_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "source": {
      "name": "My App"
    },
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles",
    "version": 1594311617331
  }
}
```

