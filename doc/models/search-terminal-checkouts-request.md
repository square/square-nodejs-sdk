
# Search Terminal Checkouts Request

## Structure

`SearchTerminalCheckoutsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | [`TerminalCheckoutQuery`](/doc/models/terminal-checkout-query.md) | Optional | - |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query. |
| `limit` | `number` | Optional | Limit the number of results returned for a single request. |

## Example (as JSON)

```json
{
  "limit": 2,
  "query": {
    "filter": {
      "status": "COMPLETED"
    }
  }
}
```

