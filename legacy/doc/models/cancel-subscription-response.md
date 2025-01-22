
# Cancel Subscription Response

Defines output parameters in a response from the
[CancelSubscription](../../doc/api/subscriptions.md#cancel-subscription) endpoint.

## Structure

`CancelSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription purchased by a customer.<br><br>For more information, see<br>[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions). |
| `actions` | [`SubscriptionAction[] \| undefined`](../../doc/models/subscription-action.md) | Optional | A list of a single `CANCEL` action scheduled for the subscription. |

## Example (as JSON)

```json
{
  "subscription": {
    "canceled_date": "2023-06-05",
    "card_id": "ccof:qy5x8hHGYsgLrp4Q4GB",
    "created_at": "2022-01-19T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "910afd30-464a-4e00-a8d8-2296e",
    "invoice_ids": [
      "inv:0-ChCHu2mZEabLeeHahQnXDjZQECY",
      "inv:0-ChrcX_i3sNmfsHTGKhI4Wg2mceA"
    ],
    "location_id": "S8GWD5R9QB376",
    "paid_until_date": "2023-12-31",
    "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "source": {
      "name": "My Application"
    },
    "start_date": "2022-01-19",
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles",
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
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "actions": [
    {
      "id": "id8",
      "type": "RESUME",
      "effective_date": "effective_date8",
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
    },
    {
      "id": "id8",
      "type": "RESUME",
      "effective_date": "effective_date8",
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
    },
    {
      "id": "id8",
      "type": "RESUME",
      "effective_date": "effective_date8",
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
  ]
}
```

