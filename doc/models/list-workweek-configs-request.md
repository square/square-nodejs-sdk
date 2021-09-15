
# List Workweek Configs Request

A request for a set of `WorkweekConfig` objects

## Structure

`ListWorkweekConfigsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Optional | Maximum number of Workweek Configs to return per page. |
| `cursor` | `string \| undefined` | Optional | Pointer to the next page of Workweek Config results to fetch. |

## Example (as JSON)

```json
{
  "limit": 172,
  "cursor": "cursor6"
}
```

