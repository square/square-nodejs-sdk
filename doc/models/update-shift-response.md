
# Update Shift Response

The response to a request to update a `Shift`. Contains
the updated `Shift` object. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`UpdateShiftResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shift` | [`Shift`](/doc/models/shift.md) | Optional | A record of the hourly rate, start, and end times for a single work shift<br>for an employee. May include a record of the start and end times for breaks<br>taken during the shift. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "shift": {
    "id": "K0YH4CV5462JB",
    "employee_id": "ormj0jJJZ5OZIzxrZYJI",
    "location_id": "PAA1RJZZKXBFG",
    "timezone": "America/New_York",
    "start_at": "2019-01-25T03:11:00-05:00",
    "end_at": "2019-01-25T13:11:00-05:00",
    "wage": {
      "title": "Bartender",
      "hourly_rate": {
        "amount": 1500,
        "currency": "USD"
      }
    },
    "breaks": [
      {
        "id": "X7GAQYVVRRG6P",
        "start_at": "2019-01-25T06:11:00-05:00",
        "end_at": "2019-01-25T06:16:00-05:00",
        "break_type_id": "REGS1EQR1TPZ5",
        "name": "Tea Break",
        "expected_duration": "PT5M",
        "is_paid": true
      }
    ],
    "status": "CLOSED",
    "version": 2,
    "created_at": "2019-02-28T00:39:02Z",
    "updated_at": "2019-02-28T00:42:41Z"
  }
}
```

