
# Resume Subscription Request

Defines input parameters in a request to the
[ResumeSubscription](../../doc/api/subscriptions.md#resume-subscription) endpoint.

## Structure

`ResumeSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `resumeEffectiveDate` | `string \| null \| undefined` | Optional | The `YYYY-MM-DD`-formatted date when the subscription reactivated. |
| `resumeChangeTiming` | [`string \| undefined`](../../doc/models/change-timing.md) | Optional | Supported timings when a pending change, as an action, takes place to a subscription. |

## Example (as JSON)

```json
{
  "resume_effective_date": "resume_effective_date8",
  "resume_change_timing": "IMMEDIATE"
}
```

