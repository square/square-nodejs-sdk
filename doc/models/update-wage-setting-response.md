
# Update Wage Setting Response

Represents a response from an update request, containing the updated `WageSetting` object
or error messages.

## Structure

`UpdateWageSettingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wage_setting` | [`WageSetting`](/doc/models/wage-setting.md) | Optional | An object representing a team member's wage information. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "wage_setting": {
    "team_member_id": "-3oZQKPKVk6gUXU_V5Qa",
    "job_assignments": [
      {
        "job_title": "Manager",
        "pay_type": "SALARY",
        "hourly_rate": {
          "amount": 1443,
          "currency": "USD"
        },
        "annual_rate": {
          "amount": 3000000,
          "currency": "USD"
        },
        "weekly_hours": 40
      },
      {
        "job_title": "Cashier",
        "pay_type": "HOURLY",
        "hourly_rate": {
          "amount": 1200,
          "currency": "USD"
        }
      }
    ],
    "is_overtime_exempt": true,
    "version": 1,
    "created_at": "2019-07-10T17:26:48+00:00",
    "updated_at": "2020-06-11T23:12:04+00:00"
  }
}
```

