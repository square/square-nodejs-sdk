
# Change Billing Anchor Date Response

Defines output parameters in a request to the
[ChangeBillingAnchorDate](../../doc/api/subscriptions.md#change-billing-anchor-date) endpoint.

## Structure

`ChangeBillingAnchorDateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription purchased by a customer.<br><br>For more information, see<br>[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions). |
| `actions` | [`SubscriptionAction[] \| undefined`](../../doc/models/subscription-action.md) | Optional | A list of a single billing anchor date change for the subscription. |

## Example (as JSON)

```json
{
  "actions": [
    {
      "effective_date": "2023-11-01",
      "id": "f0a1dfdc-675b-3a14-a640-99f7ac1cee83",
      "monthly_billing_anchor_date": 1,
      "type": "CHANGE_BILLING_ANCHOR_DATE",
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
    "created_at": "2023-06-20T21:53:10Z",
    "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
    "id": "9ba40961-995a-4a3d-8c53-048c40cafc13",
    "location_id": "S8GWD5R9QB376",
    "monthly_billing_anchor_date": 20,
    "phases": [
      {
        "order_template_id": "E6oBY5WfQ2eN4pkYZwq4ka6n7KeZY",
        "ordinal": 0,
        "plan_phase_uid": "C66BKH3ASTDYGJJCEZXQQSS7",
        "uid": "98d6f53b-40e1-4714-8827-032fd923be25"
      }
    ],
    "plan_variation_id": "FQ7CDXXWSLUJRPM3GFJSJGZ7",
    "price_override_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "source": {
      "name": "My Application"
    },
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles",
    "version": 3,
    "start_date": "start_date8"
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

