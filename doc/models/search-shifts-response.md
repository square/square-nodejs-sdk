
# Search Shifts Response

The response to a request for `Shift` objects. The response contains
the requested `Shift` objects and might contain a set of `Error` objects if
the request resulted in errors.

## Structure

`SearchShiftsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shifts` | [`Shift[] \| undefined`](../../doc/models/shift.md) | Optional | Shifts. |
| `cursor` | `string \| undefined` | Optional | An opaque cursor for fetching the next page. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "shifts": [
    {
      "breaks": [
        {
          "break_type_id": "REGS1EQR1TPZ5",
          "end_at": "2019-01-21T06:11:00-05:00",
          "expected_duration": "PT10M",
          "id": "SJW7X6AKEJQ65",
          "is_paid": true,
          "name": "Tea Break",
          "start_at": "2019-01-21T06:11:00-05:00"
        }
      ],
      "created_at": "2019-01-24T01:12:03Z",
      "declared_cash_tip_money": {
        "amount": 500,
        "currency": "USD"
      },
      "employee_id": "ormj0jJJZ5OZIzxrZYJI",
      "end_at": "2019-01-21T13:11:00-05:00",
      "id": "X714F3HA6D1PT",
      "location_id": "PAA1RJZZKXBFG",
      "start_at": "2019-01-21T03:11:00-05:00",
      "status": "CLOSED",
      "team_member_id": "ormj0jJJZ5OZIzxrZYJI",
      "timezone": "America/New_York",
      "updated_at": "2019-02-07T22:21:08Z",
      "version": 6,
      "wage": {
        "hourly_rate": {
          "amount": 1100,
          "currency": "USD"
        },
        "job_id": "FzbJAtt9qEWncK1BWgVCxQ6M",
        "tip_eligible": true,
        "title": "Barista"
      }
    },
    {
      "breaks": [
        {
          "break_type_id": "WQX00VR99F53J",
          "end_at": "2019-01-23T14:40:00-05:00",
          "expected_duration": "PT10M",
          "id": "BKS6VR7WR748A",
          "is_paid": true,
          "name": "Tea Break",
          "start_at": "2019-01-23T14:30:00-05:00"
        },
        {
          "break_type_id": "P6Q468ZFRN1AC",
          "end_at": "2019-01-22T12:44:00-05:00",
          "expected_duration": "PT15M",
          "id": "BQFEZSHFZSC51",
          "is_paid": false,
          "name": "Coffee Break",
          "start_at": "2019-01-22T12:30:00-05:00"
        }
      ],
      "created_at": "2019-01-23T23:32:45Z",
      "declared_cash_tip_money": {
        "amount": 0,
        "currency": "USD"
      },
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "end_at": "2019-01-22T13:02:00-05:00",
      "id": "GDHYBZYWK0P2V",
      "location_id": "PAA1RJZZKXBFG",
      "start_at": "2019-01-22T12:02:00-05:00",
      "status": "CLOSED",
      "team_member_id": "33fJchumvVdJwxV0H6L9",
      "timezone": "America/New_York",
      "updated_at": "2019-01-24T00:56:25Z",
      "version": 16,
      "wage": {
        "hourly_rate": {
          "amount": 1600,
          "currency": "USD"
        },
        "job_id": "gcbz15vKGnMKmaWJJ152kjim",
        "tip_eligible": true,
        "title": "Cook"
      }
    }
  ],
  "cursor": "cursor8",
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

