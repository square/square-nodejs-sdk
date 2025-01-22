
# Create Job Request

Represents a [CreateJob](../../doc/api/team.md#create-job) request.

## Structure

`CreateJobRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `job` | [`Job`](../../doc/models/job.md) | Required | Represents a job that can be assigned to [team members](../../doc/models/team-member.md). This object defines the<br>job's title and tip eligibility. Compensation is defined in a [job assignment](../../doc/models/job-assignment.md)<br>in a team member's wage setting. |
| `idempotencyKey` | `string` | Required | A unique identifier for the `CreateJob` request. Keys can be any valid string,<br>but must be unique for each request. For more information, see<br>[Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "idempotency_key": "idempotency-key-0",
  "job": {
    "is_tip_eligible": true,
    "title": "Cashier",
    "id": "id6",
    "created_at": "created_at4",
    "updated_at": "updated_at8"
  }
}
```

