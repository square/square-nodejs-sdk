
# List Workweek Configs Request

A request for a set of `WorkweekConfig` objects.

## Structure

`ListWorkweekConfigsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| null \| undefined` | Optional | The maximum number of `WorkweekConfigs` results to return per page. |
| `cursor` | `string \| null \| undefined` | Optional | A pointer to the next page of `WorkweekConfig` results to fetch. |

## Example (as JSON)

```json
{
  "limit": 98,
  "cursor": "cursor0"
}
```

