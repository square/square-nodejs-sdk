
# Resume Subscription Response

Defines output parameters in a response from the
[ResumeSubscription](../../doc/api/subscriptions.md#resume-subscription) endpoint.

## Structure

`ResumeSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription purchased by a customer.<br><br>For more information, see<br>[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions). |
| `actions` | [`SubscriptionAction[] \| undefined`](../../doc/models/subscription-action.md) | Optional | A list of `RESUME` actions created by the request and scheduled for the subscription. |

## Example (as JSON)

```json
{
  "actions": [
    {
      "effective_date": "2023-09-01",
      "id": "18ff74f4-3da4-30c5-929f-7d6fca84f115",
      "type": "RESUME",
      "phases": [
        {
          "uid": "uid6",
          "ordinal": 186,
          "order_template_id": "order_template_id8",
          "plan_phase_uid": "plan_phase_uid2"
        }
      ],
      "new_plan_variation_id": "new_plan_variation_id9"
    }
  ],
  "subscription": {
    "card_id": "ccof:qy5x8hHGYsgLrp4Q4GB",
    "created_at": "2023-06-20T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "56214fb2-cc85-47a1-93bc-44f3766bb56f",
    "location_id": "S8GWD5R9QB376",
    "phases": [
      {
        "order_template_id": "U2NaowWxzXwpsZU697x7ZHOAnCNZY",
        "ordinal": 0,
        "plan_phase_uid": "X2Q2AONPB3RB64Y27S25QCZP",
        "uid": "873451e0-745b-4e87-ab0b-c574933fe616"
      }
    ],
    "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "source": {
      "name": "My Application"
    },
    "start_date": "2023-06-20",
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles",
    "version": 1
  },
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

