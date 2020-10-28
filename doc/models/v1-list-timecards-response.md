
# V1 List Timecards Response

## Structure

`V1ListTimecardsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1Timecard[]`](/doc/models/v1-timecard.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "id": "id7",
      "employee_id": "employee_id3",
      "deleted": true,
      "clockin_time": "clockin_time3",
      "clockout_time": "clockout_time3",
      "clockin_location_id": "clockin_location_id5"
    },
    {
      "id": "id8",
      "employee_id": "employee_id2",
      "deleted": false,
      "clockin_time": "clockin_time4",
      "clockout_time": "clockout_time4",
      "clockin_location_id": "clockin_location_id6"
    }
  ]
}
```

