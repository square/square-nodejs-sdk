
# Phase

Represents a phase, which can override subscription phases as defined by plan_id

## Structure

`Phase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | id of subscription phase |
| `ordinal` | `number \| undefined` | Optional | index of phase in total subscription plan |
| `orderTemplateId` | `string \| undefined` | Optional | id of order to be used in billing |
| `planPhaseUid` | `string \| undefined` | Optional | the uid from the plan's phase in catalog |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "ordinal": 80,
  "order_template_id": "order_template_id2",
  "plan_phase_uid": "plan_phase_uid6"
}
```

