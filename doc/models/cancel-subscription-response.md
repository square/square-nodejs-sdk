
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
    "canceled_date": "2021-10-20",
    "card_id": "ccof:qy5x8hHGYsgLrp4Q4GB",
    "created_at": "2021-10-20T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "910afd30-464a-4e00-a8d8-2296eEXAMPLE",
    "location_id": "S8GWD5R9QB376",
    "paid_until_date": "2021-11-20",
    "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "source": {
      "name": "My App"
    },
    "start_date": "2021-10-20",
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles",
    "version": 1594311617331,
    "plan_variation_id": "plan_variation_id8"
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ],
  "actions": [
    {
      "id": "id9",
      "type": "PAUSE",
      "effective_date": "effective_date1",
      "phases": [
        {
          "uid": "uid6",
          "ordinal": 186,
          "order_template_id": "order_template_id8",
          "plan_phase_uid": "plan_phase_uid2"
        }
      ],
      "new_plan_variation_id": "new_plan_variation_id9"
    },
    {
      "id": "id0",
      "type": "CANCEL",
      "effective_date": "effective_date0",
      "phases": [
        {
          "uid": "uid5",
          "ordinal": 185,
          "order_template_id": "order_template_id7",
          "plan_phase_uid": "plan_phase_uid1"
        },
        {
          "uid": "uid6",
          "ordinal": 186,
          "order_template_id": "order_template_id8",
          "plan_phase_uid": "plan_phase_uid2"
        },
        {
          "uid": "uid7",
          "ordinal": 187,
          "order_template_id": "order_template_id9",
          "plan_phase_uid": "plan_phase_uid3"
        }
      ],
      "new_plan_variation_id": "new_plan_variation_id0"
    },
    {
      "id": "id1",
      "type": "SWAP_PLAN",
      "effective_date": "effective_date9",
      "phases": [
        {
          "uid": "uid4",
          "ordinal": 184,
          "order_template_id": "order_template_id6",
          "plan_phase_uid": "plan_phase_uid0"
        },
        {
          "uid": "uid5",
          "ordinal": 185,
          "order_template_id": "order_template_id7",
          "plan_phase_uid": "plan_phase_uid1"
        }
      ],
      "new_plan_variation_id": "new_plan_variation_id1"
    }
  ]
}
```

