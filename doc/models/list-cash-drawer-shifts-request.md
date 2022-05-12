
# List Cash Drawer Shifts Request

## Structure

`ListCashDrawerShiftsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Required | The ID of the location to query for a list of cash drawer shifts.<br>**Constraints**: *Minimum Length*: `1` |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `beginTime` | `string \| undefined` | Optional | The inclusive start time of the query on opened_at, in ISO 8601 format. |
| `endTime` | `string \| undefined` | Optional | The exclusive end date of the query on opened_at, in ISO 8601 format. |
| `limit` | `number \| undefined` | Optional | Number of cash drawer shift events in a page of results (200 by<br>default, 1000 max).<br>**Constraints**: `<= 1000` |
| `cursor` | `string \| undefined` | Optional | Opaque cursor for fetching the next page of results. |

## Example (as JSON)

```json
{
  "location_id": "location_id4",
  "sort_order": null,
  "begin_time": null,
  "end_time": null,
  "limit": null,
  "cursor": null
}
```

