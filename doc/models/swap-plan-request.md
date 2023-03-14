
# Swap Plan Request

Defines input parameters in a call to the
[SwapPlan](../../doc/api/subscriptions.md#swap-plan) endpoint.

## Structure

`SwapPlanRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `newPlanId` | `string` | Required | The ID of the new subscription plan.<br>**Constraints**: *Minimum Length*: `1` |

## Example (as JSON)

```json
{
  "new_plan_id": "new_plan_id4"
}
```

