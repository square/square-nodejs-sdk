
# Swap Plan Response

Defines output parameters in a response of the
[SwapPlan](../../doc/api/subscriptions.md#swap-plan) endpoint.

## Structure

`SwapPlanResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription purchased by a customer.<br><br>For more information, see<br>[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions). |
| `actions` | [`SubscriptionAction[] \| undefined`](../../doc/models/subscription-action.md) | Optional | A list of a `SWAP_PLAN` action created by the request. |

## Example (as JSON)

```json
{
  "actions": [
    {
      "effective_date": "2021-11-17",
      "id": "f0a1dfdc-675b-3a14-a640-99f7ac1cee83",
      "new_plan_id": "FQ7CDXXWSLUJRPM3GFJSJGZ7",
      "phases": [
        {
          "order_template_id": "uhhnjH9osVv3shUADwaC0b3hNxQZY",
          "ordinal": 0,
          "uid": "uid6",
          "plan_phase_uid": "plan_phase_uid2"
        }
      ],
      "type": "SWAP_PLAN",
      "new_plan_variation_id": "new_plan_variation_id9"
    }
  ],
  "subscription": {
    "created_at": "2021-10-20T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "9ba40961-995a-4a3d-8c53-048c40cafc13",
    "location_id": "S8GWD5R9QB376",
    "phases": [
      {
        "order_template_id": "E6oBY5WfQ2eN4pkYZwq4ka6n7KeZY",
        "ordinal": 0,
        "plan_phase_uid": "C66BKH3ASTDYGJJCEZXQQSS7",
        "uid": "98d6f53b-40e1-4714-8827-032fd923be25"
      }
    ],
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
    "version": 1594311617331,
    "plan_variation_id": "plan_variation_id8",
    "start_date": "start_date8"
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
  ]
}
```

