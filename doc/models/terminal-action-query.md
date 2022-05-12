
# Terminal Action Query

## Structure

`TerminalActionQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`TerminalActionQueryFilter \| undefined`](../../doc/models/terminal-action-query-filter.md) | Optional | - |
| `sort` | [`TerminalActionQuerySort \| undefined`](../../doc/models/terminal-action-query-sort.md) | Optional | - |

## Example (as JSON)

```json
{
  "include": [
    "CUSTOMER"
  ],
  "limit": 2,
  "query": {
    "filter": {
      "status": "COMPLETED"
    }
  }
}
```

