
# V1 Timecard

Represents a timecard for an employee.

## Structure

`V1Timecard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The timecard's unique ID. |
| `employee_id` | `string` |  | The ID of the employee the timecard is associated with. |
| `deleted` | `boolean` | Optional | If true, the timecard was deleted by the merchant, and it is no longer valid. |
| `clockin_time` | `string` | Optional | The clock-in time for the timecard, in ISO 8601 format. |
| `clockout_time` | `string` | Optional | The clock-out time for the timecard, in ISO 8601 format. Provide this value only if importing timecard information from another system. |
| `clockin_location_id` | `string` | Optional | The ID of the location the employee clocked in from. We strongly reccomend providing a clockin_location_id. Square uses the clockin_location_id to determine a timecard’s timezone and overtime rules. |
| `clockout_location_id` | `string` | Optional | The ID of the location the employee clocked out from. Provide this value only if importing timecard information from another system. |
| `created_at` | `string` | Optional | The time when the timecard was created, in ISO 8601 format. |
| `updated_at` | `string` | Optional | The time when the timecard was most recently updated, in ISO 8601 format. |
| `regular_seconds_worked` | `number` | Optional | The total number of regular (non-overtime) seconds worked in the timecard. |
| `overtime_seconds_worked` | `number` | Optional | The total number of overtime seconds worked in the timecard. |
| `doubletime_seconds_worked` | `number` | Optional | The total number of doubletime seconds worked in the timecard. |

## Example (as JSON)

```json
{
  "id": "id0",
  "employee_id": "employee_id0",
  "deleted": false,
  "clockin_time": "clockin_time6",
  "clockout_time": "clockout_time4",
  "clockin_location_id": "clockin_location_id8"
}
```

