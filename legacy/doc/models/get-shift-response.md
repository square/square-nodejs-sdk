
# Get Shift Response

A response to a request to get a `Shift`. The response contains
the requested `Shift` object and might contain a set of `Error` objects if
the request resulted in errors.

## Structure

`GetShiftResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shift` | [`Shift \| undefined`](../../doc/models/shift.md) | Optional | A record of the hourly rate, start, and end times for a single work shift<br>for an employee. This might include a record of the start and end times for breaks<br>taken during the shift. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "shift": {
    "breaks": [
      {
        "break_type_id": "92EPDRQKJ5088",
        "end_at": "2019-02-23T20:00:00-05:00",
        "expected_duration": "PT1H",
        "id": "M9BBKEPQAQD2T",
        "is_paid": true,
        "name": "Lunch Break",
        "start_at": "2019-02-23T19:00:00-05:00"
      }
    ],
    "created_at": "2019-02-27T00:12:12Z",
    "declared_cash_tip_money": {
      "amount": 500,
      "currency": "USD"
    },
    "employee_id": "D71KRMQof6cXGUW0aAv7",
    "end_at": "2019-02-23T21:00:00-05:00",
    "id": "T35HMQSN89SV4",
    "location_id": "PAA1RJZZKXBFG",
    "start_at": "2019-02-23T18:00:00-05:00",
    "status": "CLOSED",
    "team_member_id": "D71KRMQof6cXGUW0aAv7",
    "timezone": "America/New_York",
    "updated_at": "2019-02-27T00:12:12Z",
    "version": 1,
    "wage": {
      "hourly_rate": {
        "amount": 1457,
        "currency": "USD"
      },
      "job_id": "N4YKVLzFj3oGtNocqoYHYpW3",
      "tip_eligible": true,
      "title": "Cashier"
    }
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

