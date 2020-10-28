
# Retrieve Wage Setting Response

Represents a response from a retrieve request, containing the specified `WageSetting` object or error messages.

## Structure

`RetrieveWageSettingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wage_setting` | [`WageSetting`](/doc/models/wage-setting.md) | Optional | An object representing a team member's wage information. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "wage_setting": {
    "team_member_id": "1yJlHapkseYnNPETIU1B",
    "job_assignments": [
      {
        "job_title": "Manager",
        "pay_type": "SALARY",
        "hourly_rate": {
          "amount": 2164,
          "currency": "USD"
        },
        "annual_rate": {
          "amount": 4500000,
          "currency": "USD"
        },
        "weekly_hours": 40
      }
    ],
    "is_overtime_exempt": false,
    "version": 1,
    "created_at": "2020-06-11T23:01:21+00:00",
    "updated_at": "2020-06-11T23:01:21+00:00"
  }
}
```

