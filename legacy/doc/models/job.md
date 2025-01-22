
# Job

Represents a job that can be assigned to [team members](../../doc/models/team-member.md). This object defines the
job's title and tip eligibility. Compensation is defined in a [job assignment](../../doc/models/job-assignment.md)
in a team member's wage setting.

## Structure

`Job`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | **Read only** The unique Square-assigned ID of the job. If you need a job ID for an API request,<br>call [ListJobs](api-endpoint:Team-ListJobs) or use the ID returned when you created the job.<br>You can also get job IDs from a team member's wage setting. |
| `title` | `string \| null \| undefined` | Optional | The title of the job.<br>**Constraints**: *Maximum Length*: `150` |
| `isTipEligible` | `boolean \| null \| undefined` | Optional | Indicates whether team members can earn tips for the job. |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the job was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the job was last updated, in RFC 3339 format. |
| `version` | `number \| undefined` | Optional | **Read only** The current version of the job. Include this field in `UpdateJob` requests to enable<br>[optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency)<br>control and avoid overwrites from concurrent requests. Requests fail if the provided version doesn't<br>match the server version at the time of the request. |

## Example (as JSON)

```json
{
  "id": "id6",
  "title": "title2",
  "is_tip_eligible": false,
  "created_at": "created_at4",
  "updated_at": "updated_at2"
}
```

