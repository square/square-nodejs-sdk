
# Subscription Event

Describes changes to subscription and billing states.

## Structure

`SubscriptionEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The ID of the subscription event. |
| `subscriptionEventType` | [`string`](/doc/models/subscription-event-subscription-event-type.md) | Required | The possible subscription event types. |
| `effectiveDate` | `string` | Required | The date, in YYYY-MM-DD format (for<br>example, 2013-01-15), when the subscription event went into effect. |
| `planId` | `string` | Required | The ID of the subscription plan associated with the subscription. |

## Example (as JSON)

```json
{
  "id": "id0",
  "subscription_event_type": "PLAN_CHANGE",
  "effective_date": "effective_date0",
  "plan_id": "plan_id8"
}
```

