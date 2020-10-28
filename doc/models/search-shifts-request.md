
# Search Shifts Request

A request for a filtered and sorted set of `Shift` objects.

## Structure

`SearchShiftsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | [`ShiftQuery`](/doc/models/shift-query.md) | Optional | The parameters of a `Shift` search query. Includes filter and sort options. |
| `limit` | `number` | Optional | number of resources in a page (200 by default). |
| `cursor` | `string` | Optional | opaque cursor for fetching the next page. |

## Example (as JSON)

```json
{
  "query": {
    "filter": {
      "workday": {
        "date_range": {
          "start_date": "2019-01-20",
          "end_date": "2019-02-03"
        },
        "match_shifts_by": "START_AT",
        "default_timezone": "America/Los_Angeles"
      }
    }
  },
  "limit": 100
}
```

