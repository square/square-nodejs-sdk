
# Terminal Refund Query

## Structure

`TerminalRefundQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`TerminalRefundQueryFilter`](/doc/models/terminal-refund-query-filter.md) | Optional | - |
| `sort` | [`TerminalRefundQuerySort`](/doc/models/terminal-refund-query-sort.md) | Optional | - |

## Example (as JSON)

```json
{
  "filter": {
    "device_id": "device_id0",
    "created_at": {
      "start_at": "start_at4",
      "end_at": "end_at8"
    },
    "status": "status6"
  },
  "sort": {
    "sort_order": "sort_order8"
  }
}
```

