
# Get Shift Response

A response to request to get a `Shift`. Contains
the requested `Shift` object. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`GetShiftResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shift` | [`Shift`](/doc/models/shift.md) | Optional | A record of the hourly rate, start, and end times for a single work shift<br>for an employee. May include a record of the start and end times for breaks<br>taken during the shift. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "shift": {
    "id": "T35HMQSN89SV4",
    "employee_id": "D71KRMQof6cXGUW0aAv7",
    "location_id": "PAA1RJZZKXBFG",
    "timezone": "America/New_York",
    "start_at": "2019-02-23T18:00:00-05:00",
    "end_at": "2019-02-23T21:00:00-05:00",
    "wage": {
      "title": "Cashier",
      "hourly_rate": {
        "amount": 1457,
        "currency": "USD"
      }
    },
    "breaks": [
      {
        "id": "M9BBKEPQAQD2T",
        "start_at": "2019-02-23T19:00:00-05:00",
        "end_at": "2019-02-23T20:00:00-05:00",
        "break_type_id": "92EPDRQKJ5088",
        "name": "Lunch Break",
        "expected_duration": "PT1H",
        "is_paid": true
      }
    ],
    "status": "CLOSED",
    "version": 1,
    "created_at": "2019-02-27T00:12:12Z",
    "updated_at": "2019-02-27T00:12:12Z"
  }
}
```

