
# Wage Setting

An object representing a team member's wage information.

## Structure

`WageSetting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `team_member_id` | `string` | Optional | The unique ID of the `TeamMember` whom this wage setting describes. |
| `job_assignments` | [`JobAssignment[]`](/doc/models/job-assignment.md) | Optional | <b>Required</b> The ordered list of jobs that the team member is assigned to.<br>The first job assignment is considered the team member's "Primary Job".<br><br><br><b>Min Length 1    Max Length 12</b> |
| `is_overtime_exempt` | `boolean` | Optional | Whether the team member is exempt from the overtime rules of the seller country. |
| `version` | `number` | Optional | Used for resolving concurrency issues; request will fail if version<br>provided does not match server version at time of request. If not provided,<br>Square executes a blind write, potentially overwriting data from another write. Read<br>about [optimistic concurrency](https://developer.squareup.com/docs/docs/working-with-apis/optimistic-concurrency)<br>in Square APIs for more information. |
| `created_at` | `string` | Optional | The timestamp in RFC 3339 format describing when the wage setting object was created.<br>Ex: "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z" |
| `updated_at` | `string` | Optional | The timestamp in RFC 3339 format describing when the wage setting object was last updated.<br>Ex: "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z" |

## Example (as JSON)

```json
{
  "team_member_id": "team_member_id0",
  "job_assignments": [
    {
      "job_title": "job_title1",
      "pay_type": "NONE",
      "hourly_rate": {
        "amount": 79,
        "currency": "QAR"
      },
      "annual_rate": {
        "amount": 19,
        "currency": "PKR"
      },
      "weekly_hours": 187
    },
    {
      "job_title": "job_title2",
      "pay_type": "HOURLY",
      "hourly_rate": {
        "amount": 80,
        "currency": "RON"
      },
      "annual_rate": {
        "amount": 20,
        "currency": "PLN"
      },
      "weekly_hours": 188
    },
    {
      "job_title": "job_title3",
      "pay_type": "SALARY",
      "hourly_rate": {
        "amount": 81,
        "currency": "RSD"
      },
      "annual_rate": {
        "amount": 21,
        "currency": "PYG"
      },
      "weekly_hours": 189
    }
  ],
  "is_overtime_exempt": false,
  "version": 172,
  "created_at": "created_at2"
}
```

