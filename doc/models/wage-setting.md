
# Wage Setting

An object representing a team member's wage information.

## Structure

`WageSetting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string \| null \| undefined` | Optional | The unique ID of the `TeamMember` whom this wage setting describes. |
| `jobAssignments` | [`JobAssignment[] \| null \| undefined`](../../doc/models/job-assignment.md) | Optional | Required. The ordered list of jobs that the team member is assigned to.<br>The first job assignment is considered the team member's primary job.<br><br>The minimum length is 1 and the maximum length is 12. |
| `isOvertimeExempt` | `boolean \| null \| undefined` | Optional | Whether the team member is exempt from the overtime rules of the seller's country. |
| `version` | `number \| undefined` | Optional | Used for resolving concurrency issues. The request fails if the version<br>provided does not match the server version at the time of the request. If not provided,<br>Square executes a blind write, potentially overwriting data from another write. For more information,<br>see [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency). |
| `createdAt` | `string \| undefined` | Optional | The timestamp, in RFC 3339 format, describing when the wage setting object was created.<br>For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z". |
| `updatedAt` | `string \| undefined` | Optional | The timestamp, in RFC 3339 format, describing when the wage setting object was last updated.<br>For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z". |

## Example (as JSON)

```json
{
  "team_member_id": "team_member_id2",
  "job_assignments": [
    {
      "job_title": "job_title6",
      "pay_type": "SALARY",
      "hourly_rate": {
        "amount": 172,
        "currency": "LAK"
      },
      "annual_rate": {
        "amount": 232,
        "currency": "NIO"
      },
      "weekly_hours": 98
    },
    {
      "job_title": "job_title6",
      "pay_type": "SALARY",
      "hourly_rate": {
        "amount": 172,
        "currency": "LAK"
      },
      "annual_rate": {
        "amount": 232,
        "currency": "NIO"
      },
      "weekly_hours": 98
    },
    {
      "job_title": "job_title6",
      "pay_type": "SALARY",
      "hourly_rate": {
        "amount": 172,
        "currency": "LAK"
      },
      "annual_rate": {
        "amount": 232,
        "currency": "NIO"
      },
      "weekly_hours": 98
    }
  ],
  "is_overtime_exempt": false,
  "version": 140,
  "created_at": "created_at0"
}
```

