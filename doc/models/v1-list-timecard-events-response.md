
# V1 List Timecard Events Response

## Structure

`V1ListTimecardEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1TimecardEvent[]`](/doc/models/v1-timecard-event.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "id": "id7",
      "event_type": "DASHBOARD_SUPERVISOR_CLOSE",
      "clockin_time": "clockin_time3",
      "clockout_time": "clockout_time3",
      "created_at": "created_at5"
    },
    {
      "id": "id8",
      "event_type": "REGISTER_CLOCKOUT",
      "clockin_time": "clockin_time4",
      "clockout_time": "clockout_time4",
      "created_at": "created_at6"
    }
  ]
}
```

