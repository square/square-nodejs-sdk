
# Search Shifts Response

The response to a request for `Shift` objects. Contains
the requested `Shift` objects. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`SearchShiftsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shifts` | [`Shift[]`](/doc/models/shift.md) | Optional | Shifts |
| `cursor` | `string` | Optional | Opaque cursor for fetching the next page. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "shifts": [
    {
      "id": "X714F3HA6D1PT",
      "employee_id": "ormj0jJJZ5OZIzxrZYJI",
      "location_id": "PAA1RJZZKXBFG",
      "timezone": "America/New_York",
      "start_at": "2019-01-21T03:11:00-05:00",
      "end_at": "2019-01-21T13:11:00-05:00",
      "wage": {
        "title": "Barista",
        "hourly_rate": {
          "amount": 1100,
          "currency": "USD"
        }
      },
      "breaks": [
        {
          "id": "SJW7X6AKEJQ65",
          "start_at": "2019-01-21T06:11:00-05:00",
          "end_at": "2019-01-21T06:11:00-05:00",
          "break_type_id": "REGS1EQR1TPZ5",
          "name": "Tea Break",
          "expected_duration": "PT10M",
          "is_paid": true
        }
      ],
      "status": "CLOSED",
      "version": 6,
      "created_at": "2019-01-24T01:12:03Z",
      "updated_at": "2019-02-07T22:21:08Z"
    },
    {
      "id": "GDHYBZYWK0P2V",
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "location_id": "PAA1RJZZKXBFG",
      "timezone": "America/New_York",
      "start_at": "2019-01-22T12:02:00-05:00",
      "end_at": "2019-01-22T13:02:00-05:00",
      "wage": {
        "title": "Cook",
        "hourly_rate": {
          "amount": 1600,
          "currency": "USD"
        }
      },
      "breaks": [
        {
          "id": "BKS6VR7WR748A",
          "start_at": "2019-01-23T14:30:00-05:00",
          "end_at": "2019-01-23T14:40:00-05:00",
          "break_type_id": "WQX00VR99F53J",
          "name": "Tea Break",
          "expected_duration": "PT10M",
          "is_paid": true
        },
        {
          "id": "BQFEZSHFZSC51",
          "start_at": "2019-01-22T12:30:00-05:00",
          "end_at": "2019-01-22T12:44:00-05:00",
          "break_type_id": "P6Q468ZFRN1AC",
          "name": "Coffee Break",
          "expected_duration": "PT15M",
          "is_paid": false
        }
      ],
      "status": "CLOSED",
      "version": 16,
      "created_at": "2019-01-23T23:32:45Z",
      "updated_at": "2019-01-24T00:56:25Z"
    }
  ]
}
```

