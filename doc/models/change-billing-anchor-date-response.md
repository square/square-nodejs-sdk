
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
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "subscription": {
    "id": "id4",
    "location_id": "location_id8",
    "plan_variation_id": "plan_variation_id8",
    "customer_id": "customer_id2",
    "start_date": "start_date8"
  },
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
    }
  ]
}
```

