
# Create Job Response

Represents a [CreateJob](../../doc/api/team.md#create-job) response. Either `job` or `errors`
is present in the response.

## Structure

`CreateJobResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `job` | [`Job \| undefined`](../../doc/models/job.md) | Optional | Represents a job that can be assigned to [team members](../../doc/models/team-member.md). This object defines the<br>job's title and tip eligibility. Compensation is defined in a [job assignment](../../doc/models/job-assignment.md)<br>in a team member's wage setting. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "job": {
    "created_at": "2021-06-11T22:55:45Z",
    "id": "1yJlHapkseYnNPETIU1B",
    "is_tip_eligible": true,
    "title": "Cashier",
    "updated_at": "2021-06-11T22:55:45Z",
    "version": 1
  },
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

