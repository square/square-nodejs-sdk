
# Update Workweek Config Response

The response to a request to update a `WorkweekConfig` object. Contains
the updated `WorkweekConfig` object. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`UpdateWorkweekConfigResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workweek_config` | [`WorkweekConfig`](/doc/models/workweek-config.md) | Optional | Sets the Day of the week and hour of the day that a business starts a<br>work week. Used for the calculation of overtime pay. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "workweek_config": {
    "id": "FY4VCAQN700GM",
    "start_of_week": "MON",
    "start_of_day_local_time": "10:00",
    "version": 11,
    "created_at": "2016-02-04T00:58:24Z",
    "updated_at": "2019-02-28T01:04:35Z"
  }
}
```

