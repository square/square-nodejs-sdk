
# Create Shift Request

Represents a request to create a `Shift`

## Structure

`CreateShiftRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotency_key` | `string` | Optional | Unique string value to insure the idempotency of the operation. |
| `shift` | [`Shift`](/doc/models/shift.md) |  | A record of the hourly rate, start, and end times for a single work shift<br>for an employee. May include a record of the start and end times for breaks<br>taken during the shift. |

## Example (as JSON)

```json
{
  "idempotency_key": "HIDSNG5KS478L",
  "shift": {
    "employee_id": "ormj0jJJZ5OZIzxrZYJI",
    "location_id": "PAA1RJZZKXBFG",
    "start_at": "2019-01-25T03:11:00-05:00",
    "end_at": "2019-01-25T13:11:00-05:00",
    "wage": {
      "title": "Barista",
      "hourly_rate": {
        "amount": 1100,
        "currency": "USD"
      }
    },
    "breaks": [
      {
        "start_at": "2019-01-25T06:11:00-05:00",
        "end_at": "2019-01-25T06:16:00-05:00",
        "break_type_id": "REGS1EQR1TPZ5",
        "name": "Tea Break",
        "expected_duration": "PT5M",
        "is_paid": true
      }
    ]
  }
}
```

