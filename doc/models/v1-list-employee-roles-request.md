
# V1 List Employee Roles Request

## Structure

`V1ListEmployeeRolesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`string \| undefined`](/doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `limit` | `number \| undefined` | Optional | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. |
| `batchToken` | `string \| undefined` | Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |

## Example (as JSON)

```json
{
  "order": "DESC",
  "limit": 172,
  "batch_token": "batch_token2"
}
```

