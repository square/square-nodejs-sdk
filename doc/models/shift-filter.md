
# Shift Filter

Defines a filter used in a search for `Shift` records. `AND` logic is
used by Square's servers to apply each filter property specified.

## Structure

`ShiftFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationIds` | `string[] \| undefined` | Optional | Fetch shifts for the specified location. |
| `employeeIds` | `string[] \| undefined` | Optional | Fetch shifts for the specified employees. DEPRECATED at version 2020-08-26. Use `team_member_ids` instead. |
| `status` | [`string \| undefined`](../../doc/models/shift-filter-status.md) | Optional | Specifies the `status` of `Shift` records to be returned. |
| `start` | [`TimeRange \| undefined`](../../doc/models/time-range.md) | Optional | Represents a generic time range. The start and end values are<br>represented in RFC 3339 format. Time ranges are customized to be<br>inclusive or exclusive based on the needs of a particular endpoint.<br>Refer to the relevant endpoint-specific documentation to determine<br>how time ranges are handled. |
| `end` | [`TimeRange \| undefined`](../../doc/models/time-range.md) | Optional | Represents a generic time range. The start and end values are<br>represented in RFC 3339 format. Time ranges are customized to be<br>inclusive or exclusive based on the needs of a particular endpoint.<br>Refer to the relevant endpoint-specific documentation to determine<br>how time ranges are handled. |
| `workday` | [`ShiftWorkday \| undefined`](../../doc/models/shift-workday.md) | Optional | A `Shift` search query filter parameter that sets a range of days that<br>a `Shift` must start or end in before passing the filter condition. |
| `teamMemberIds` | `string[] \| undefined` | Optional | Fetch shifts for the specified team members. Replaced `employee_ids` at version "2020-08-26". |

## Example (as JSON)

```json
{
  "location_ids": [
    "location_ids0"
  ],
  "employee_ids": [
    "employee_ids5"
  ],
  "status": "OPEN",
  "start": {
    "start_at": "start_at6",
    "end_at": "end_at6"
  },
  "end": {
    "start_at": "start_at0",
    "end_at": "end_at2"
  },
  "workday": {
    "date_range": {
      "start_date": "start_date0",
      "end_date": "end_date6"
    },
    "match_shifts_by": "START_AT",
    "default_timezone": "default_timezone0"
  },
  "team_member_ids": [
    "team_member_ids7",
    "team_member_ids8"
  ]
}
```

