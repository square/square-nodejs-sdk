
# Business Hours

The hours of operation for a location.

## Structure

`BusinessHours`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `periods` | [`BusinessHoursPeriod[] \| null \| undefined`](../../doc/models/business-hours-period.md) | Optional | The list of time periods during which the business is open. There can be at most 10 periods per day. |

## Example (as JSON)

```json
{
  "periods": [
    {
      "day_of_week": "WED",
      "start_local_time": "start_local_time4",
      "end_local_time": "end_local_time6"
    },
    {
      "day_of_week": "WED",
      "start_local_time": "start_local_time4",
      "end_local_time": "end_local_time6"
    },
    {
      "day_of_week": "WED",
      "start_local_time": "start_local_time4",
      "end_local_time": "end_local_time6"
    }
  ]
}
```

