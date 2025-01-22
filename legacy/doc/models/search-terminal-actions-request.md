
# Search Terminal Actions Request

## Structure

`SearchTerminalActionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | [`TerminalActionQuery \| undefined`](../../doc/models/terminal-action-query.md) | Optional | - |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more<br>information. |
| `limit` | `number \| undefined` | Optional | Limit the number of results returned for a single request.<br>**Constraints**: `>= 1`, `<= 100` |

## Example (as JSON)

```json
{
  "limit": 2,
  "query": {
    "filter": {
      "created_at": {
        "start_at": "2022-04-01T00:00:00.000Z",
        "end_at": "end_at8"
      },
      "device_id": "device_id0",
      "status": "status6",
      "type": "SAVE_CARD"
    },
    "sort": {
      "sort_order": "DESC"
    }
  },
  "cursor": "cursor4"
}
```

