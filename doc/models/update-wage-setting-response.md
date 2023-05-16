
# Update Wage Setting Response

Represents a response from an update request containing the updated `WageSetting` object
or error messages.

## Structure

`UpdateWageSettingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wageSetting` | [`WageSetting \| undefined`](../../doc/models/wage-setting.md) | Optional | An object representing a team member's wage information. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "wage_setting": {
    "created_at": "2019-07-10T17:26:48+00:00",
    "is_overtime_exempt": true,
    "job_assignments": [
      {
        "annual_rate": {
          "amount": 3000000,
          "currency": "USD"
        },
        "hourly_rate": {
          "amount": 1443,
          "currency": "USD"
        },
        "job_title": "Manager",
        "pay_type": "SALARY",
        "weekly_hours": 40
      },
      {
        "hourly_rate": {
          "amount": 1200,
          "currency": "USD"
        },
        "job_title": "Cashier",
        "pay_type": "HOURLY",
        "annual_rate": {
          "amount": 66,
          "currency": "EGP"
        },
        "weekly_hours": 234
      }
    ],
    "team_member_id": "-3oZQKPKVk6gUXU_V5Qa",
    "updated_at": "2020-06-11T23:12:04+00:00",
    "version": 1
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

