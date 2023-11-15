
# Update Shift Request

A request to update a `Shift` object.

## Structure

`UpdateShiftRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shift` | [`Shift`](../../doc/models/shift.md) | Required | A record of the hourly rate, start, and end times for a single work shift<br>for an employee. This might include a record of the start and end times for breaks<br>taken during the shift. |

## Example (as JSON)

```json
{
  "shift": {
    "breaks": [
      {
        "break_type_id": "REGS1EQR1TPZ5",
        "end_at": "2019-01-25T06:16:00-05:00",
        "expected_duration": "PT5M",
        "id": "X7GAQYVVRRG6P",
        "is_paid": true,
        "name": "Tea Break",
        "start_at": "2019-01-25T06:11:00-05:00"
      }
    ],
    "declared_cash_tip_money": {
      "amount": 500,
      "currency": "USD"
    },
    "end_at": "2019-01-25T13:11:00-05:00",
    "location_id": "PAA1RJZZKXBFG",
    "start_at": "2019-01-25T03:11:00-05:00",
    "team_member_id": "ormj0jJJZ5OZIzxrZYJI",
    "version": 1,
    "wage": {
      "hourly_rate": {
        "amount": 1500,
        "currency": "USD"
      },
      "tip_eligible": true,
      "title": "Bartender",
      "job_id": "job_id0"
    },
    "id": "id4",
    "employee_id": "employee_id4",
    "timezone": "timezone4"
  }
}
```

