
# List Break Types Request

A request for a filtered set of `BreakType` objects

## Structure

`ListBreakTypesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location_id` | `string` | Optional | Filter Break Types returned to only those that are associated with the<br>specified location. |
| `limit` | `number` | Optional | Maximum number of Break Types to return per page. Can range between 1<br>and 200. The default is the maximum at 200. |
| `cursor` | `string` | Optional | Pointer to the next page of Break Type results to fetch. |

## Example (as JSON)

```json
{
  "location_id": "location_id4",
  "limit": 172,
  "cursor": "cursor6"
}
```

