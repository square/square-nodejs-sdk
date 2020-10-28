
# Update Workweek Config Request

A request to update a `WorkweekConfig` object

## Structure

`UpdateWorkweekConfigRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `workweek_config` | [`WorkweekConfig`](/doc/models/workweek-config.md) | Sets the Day of the week and hour of the day that a business starts a<br>work week. Used for the calculation of overtime pay. |

## Example (as JSON)

```json
{
  "workweek_config": {
    "start_of_week": "MON",
    "start_of_day_local_time": "10:00",
    "version": 10
  }
}
```

