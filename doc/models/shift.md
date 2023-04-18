
# Shift

A record of the hourly rate, start, and end times for a single work shift
for an employee. This might include a record of the start and end times for breaks
taken during the shift.

## Structure

`Shift`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The UUID for this object.<br>**Constraints**: *Maximum Length*: `255` |
| `employeeId` | `string \| undefined` | Optional | The ID of the employee this shift belongs to. DEPRECATED at version 2020-08-26. Use `team_member_id` instead. |
| `locationId` | `string \| undefined` | Optional | The ID of the location this shift occurred at. The location should be based on<br>where the employee clocked in. |
| `timezone` | `string \| undefined` | Optional | The read-only convenience value that is calculated from the location based<br>on the `location_id`. Format: the IANA timezone database identifier for the<br>location timezone. |
| `startAt` | `string` | Required | RFC 3339; shifted to the location timezone + offset. Precision up to the<br>minute is respected; seconds are truncated.<br>**Constraints**: *Minimum Length*: `1` |
| `endAt` | `string \| undefined` | Optional | RFC 3339; shifted to the timezone + offset. Precision up to the minute is<br>respected; seconds are truncated. |
| `wage` | [`ShiftWage \| undefined`](../../doc/models/shift-wage.md) | Optional | The hourly wage rate used to compensate an employee for this shift. |
| `breaks` | [`Break[] \| undefined`](../../doc/models/break.md) | Optional | A list of all the paid or unpaid breaks that were taken during this shift. |
| `status` | [`string \| undefined`](../../doc/models/shift-status.md) | Optional | Enumerates the possible status of a `Shift`. |
| `version` | `number \| undefined` | Optional | Used for resolving concurrency issues. The request fails if the version<br>provided does not match the server version at the time of the request. If not provided,<br>Square executes a blind write; potentially overwriting data from another<br>write. |
| `createdAt` | `string \| undefined` | Optional | A read-only timestamp in RFC 3339 format; presented in UTC. |
| `updatedAt` | `string \| undefined` | Optional | A read-only timestamp in RFC 3339 format; presented in UTC. |
| `teamMemberId` | `string \| undefined` | Optional | The ID of the team member this shift belongs to. Replaced `employee_id` at version "2020-08-26". |

## Example (as JSON)

```json
{
  "id": "id0",
  "employee_id": "employee_id0",
  "location_id": "location_id4",
  "timezone": "timezone0",
  "start_at": "start_at2",
  "end_at": "end_at0",
  "wage": {
    "title": "title8",
    "hourly_rate": {
      "amount": 2,
      "currency": "BND"
    }
  },
  "breaks": [
    {
      "id": "id8",
      "start_at": "start_at0",
      "end_at": "end_at2",
      "break_type_id": "break_type_id4",
      "name": "name8",
      "expected_duration": "expected_duration6",
      "is_paid": false
    },
    {
      "id": "id9",
      "start_at": "start_at1",
      "end_at": "end_at1",
      "break_type_id": "break_type_id5",
      "name": "name9",
      "expected_duration": "expected_duration5",
      "is_paid": true
    },
    {
      "id": "id0",
      "start_at": "start_at2",
      "end_at": "end_at0",
      "break_type_id": "break_type_id6",
      "name": "name0",
      "expected_duration": "expected_duration4",
      "is_paid": false
    }
  ],
  "status": "OPEN",
  "version": 172,
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "team_member_id": "team_member_id0"
}
```

