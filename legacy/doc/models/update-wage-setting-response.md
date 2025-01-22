
# Update Wage Setting Response

Represents a response from an update request containing the updated `WageSetting` object
or error messages.

## Structure

`UpdateWageSettingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wageSetting` | [`WageSetting \| undefined`](../../doc/models/wage-setting.md) | Optional | Represents information about the overtime exemption status, job assignments, and compensation<br>for a [team member](../../doc/models/team-member.md). |
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
        "weekly_hours": 40,
        "job_id": "job_id2"
      },
      {
        "hourly_rate": {
          "amount": 2000,
          "currency": "USD"
        },
        "job_title": "Cashier",
        "pay_type": "HOURLY",
        "annual_rate": {
          "amount": 232,
          "currency": "NIO"
        },
        "weekly_hours": 98,
        "job_id": "job_id2"
      }
    ],
    "team_member_id": "-3oZQKPKVk6gUXU_V5Qa",
    "updated_at": "2020-06-11T23:12:04+00:00",
    "version": 1
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
    }
  ]
}
```

