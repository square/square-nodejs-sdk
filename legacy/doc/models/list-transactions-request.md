
# List Transactions Request

Defines the query parameters that can be included in
a request to the [ListTransactions](api-endpoint:Transactions-ListTransactions) endpoint.

Deprecated - recommend using [SearchOrders](api-endpoint:Orders-SearchOrders)

## Structure

`ListTransactionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beginTime` | `string \| null \| undefined` | Optional | The beginning of the requested reporting period, in RFC 3339 format.<br><br>See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.<br><br>Default value: The current time minus one year. |
| `endTime` | `string \| null \| undefined` | Optional | The end of the requested reporting period, in RFC 3339 format.<br><br>See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.<br><br>Default value: The current time. |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `cursor` | `string \| null \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |

## Example (as JSON)

```json
{
  "begin_time": "begin_time6",
  "end_time": "end_time0",
  "sort_order": "DESC",
  "cursor": "cursor8"
}
```

