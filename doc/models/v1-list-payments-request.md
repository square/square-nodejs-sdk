
# V1 List Payments Request

## Structure

`V1ListPaymentsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`string \| undefined`](../../doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `beginTime` | `string \| undefined` | Optional | The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year. |
| `endTime` | `string \| undefined` | Optional | The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time. |
| `limit` | `number \| undefined` | Optional | The maximum number of payments to return in a single response. This value cannot exceed 200. |
| `batchToken` | `string \| undefined` | Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `includePartial` | `boolean \| undefined` | Optional | Indicates whether or not to include partial payments in the response. Partial payments will have the tenders collected so far, but the itemizations will be empty until the payment is completed. |

## Example (as JSON)

```json
{
  "order": null,
  "begin_time": null,
  "end_time": null,
  "limit": null,
  "batch_token": null,
  "include_partial": null
}
```

