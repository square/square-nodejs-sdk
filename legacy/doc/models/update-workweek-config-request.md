
# Update Workweek Config Request

A request to update a `WorkweekConfig` object.

## Structure

`UpdateWorkweekConfigRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workweekConfig` | [`WorkweekConfig`](../../doc/models/workweek-config.md) | Required | Sets the day of the week and hour of the day that a business starts a<br>workweek. This is used to calculate overtime pay. |

## Example (as JSON)

```json
{
  "workweek_config": {
    "start_of_day_local_time": "10:00",
    "start_of_week": "MON",
    "version": 10,
    "id": "id0",
    "created_at": "created_at8",
    "updated_at": "updated_at6"
  }
}
```

