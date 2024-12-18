
# Update Wage Setting Request

Represents an update request for the `WageSetting` object describing a `TeamMember`.

## Structure

`UpdateWageSettingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wageSetting` | [`WageSetting`](../../doc/models/wage-setting.md) | Required | Represents information about the overtime exemption status, job assignments, and compensation<br>for a [team member](../../doc/models/team-member.md). |

## Example (as JSON)

```json
{
  "wage_setting": {
    "is_overtime_exempt": true,
    "job_assignments": [
      {
        "annual_rate": {
          "amount": 3000000,
          "currency": "USD"
        },
        "job_title": "Manager",
        "pay_type": "SALARY",
        "weekly_hours": 40,
        "hourly_rate": {
          "amount": 172,
          "currency": "LAK"
        },
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
    "team_member_id": "team_member_id8",
    "version": 130,
    "created_at": "created_at6"
  }
}
```

