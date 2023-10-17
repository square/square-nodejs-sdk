
# Subscription Event

Describes changes to a subscription and the subscription status.

## Structure

`SubscriptionEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The ID of the subscription event. |
| `subscriptionEventType` | [`string`](../../doc/models/subscription-event-subscription-event-type.md) | Required | Supported types of an event occurred to a subscription. |
| `effectiveDate` | `string` | Required | The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) when the subscription event occurred. |
| `monthlyBillingAnchorDate` | `number \| undefined` | Optional | The day-of-the-month the billing anchor date was changed to, if applicable. |
| `info` | [`SubscriptionEventInfo \| undefined`](../../doc/models/subscription-event-info.md) | Optional | Provides information about the subscription event. |
| `phases` | [`Phase[] \| null \| undefined`](../../doc/models/phase.md) | Optional | A list of Phases, to pass phase-specific information used in the swap. |
| `planVariationId` | `string` | Required | The ID of the subscription plan variation associated with the subscription. |

## Example (as JSON)

```json
{
  "id": "id6",
  "subscription_event_type": "RESUME_SUBSCRIPTION",
  "effective_date": "effective_date4",
  "monthly_billing_anchor_date": 54,
  "info": {
    "detail": "detail6",
    "code": "CUSTOMER_DELETED"
  },
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
    }
  ],
  "plan_variation_id": "plan_variation_id0"
}
```

