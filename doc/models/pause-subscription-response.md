
# Pause Subscription Response

Defines output parameters in a response from the
[PauseSubscription](../../doc/api/subscriptions.md#pause-subscription) endpoint.

## Structure

`PauseSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription purchased by a customer.<br><br>For more information, see<br>[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions). |
| `actions` | [`SubscriptionAction[] \| undefined`](../../doc/models/subscription-action.md) | Optional | The list of a `PAUSE` action and a possible `RESUME` action created by the request. |

## Example (as JSON)

```json
{
  "actions": [
    {
      "effective_date": "2023-11-17",
      "id": "99b2439e-63f7-3ad5-95f7-ab2447a80673",
      "type": "PAUSE",
      "monthly_billing_anchor_date": 186,
      "phases": [
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        },
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        },
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        }
      ]
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
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

