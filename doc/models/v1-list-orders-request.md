
# V1 List Orders Request

## Structure

`V1ListOrdersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`string \| undefined`](../../doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `limit` | `number \| undefined` | Optional | The maximum number of payments to return in a single response. This value cannot exceed 200. |
| `batchToken` | `string \| undefined` | Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |

## Example (as JSON)

```json
{
  "order": "DESC",
  "limit": 172,
  "batch_token": "batch_token2"
}
```

