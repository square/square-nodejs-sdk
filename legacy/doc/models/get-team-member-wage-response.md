
# Get Team Member Wage Response

A response to a request to get a `TeamMemberWage`. The response contains
the requested `TeamMemberWage` objects and might contain a set of `Error` objects if
the request resulted in errors.

## Structure

`GetTeamMemberWageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberWage` | [`TeamMemberWage \| undefined`](../../doc/models/team-member-wage.md) | Optional | The hourly wage rate that a team member earns on a `Shift` for doing the job<br>specified by the `title` property of this object. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "team_member_wage": {
    "hourly_rate": {
      "amount": 2000,
      "currency": "USD"
    },
    "id": "pXS3qCv7BERPnEGedM4S8mhm",
    "job_id": "jxJNN6eCJsLrhg5UFJrDWDGE",
    "team_member_id": "33fJchumvVdJwxV0H6L9",
    "tip_eligible": false,
    "title": "Manager"
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

