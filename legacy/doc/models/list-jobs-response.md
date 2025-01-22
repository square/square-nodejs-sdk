
# List Jobs Response

Represents a [ListJobs](../../doc/api/team.md#list-jobs) response. Either `jobs` or `errors`
is present in the response. If additional results are available, the `cursor` field is also present.

## Structure

`ListJobsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `jobs` | [`Job[] \| undefined`](../../doc/models/job.md) | Optional | The retrieved jobs. A single paged response contains up to 100 jobs. |
| `cursor` | `string \| undefined` | Optional | An opaque cursor used to retrieve the next page of results. This field is present only<br>if the request succeeded and additional results are available. For more information, see<br>[Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "jobs": [
    {
      "created_at": "2021-06-11T22:55:45Z",
      "id": "VDNpRv8da51NU8qZFC5zDWpF",
      "is_tip_eligible": true,
      "title": "Cashier",
      "updated_at": "2021-06-11T22:55:45Z",
      "version": 2
    },
    {
      "created_at": "2021-06-11T22:55:45Z",
      "id": "FjS8x95cqHiMenw4f1NAUH4P",
      "is_tip_eligible": false,
      "title": "Chef",
      "updated_at": "2021-06-11T22:55:45Z",
      "version": 1
    }
  ],
  "cursor": "cursor6",
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

