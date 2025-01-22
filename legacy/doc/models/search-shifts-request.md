
# Search Shifts Request

A request for a filtered and sorted set of `Shift` objects.

## Structure

`SearchShiftsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | [`ShiftQuery \| undefined`](../../doc/models/shift-query.md) | Optional | The parameters of a `Shift` search query, which includes filter and sort options. |
| `limit` | `number \| undefined` | Optional | The number of resources in a page (200 by default).<br>**Constraints**: `>= 1`, `<= 200` |
| `cursor` | `string \| undefined` | Optional | An opaque cursor for fetching the next page. |

## Example (as JSON)

```json
{
  "limit": 100,
  "query": {
    "filter": {
      "workday": {
        "date_range": {
          "end_date": "2019-02-03",
          "start_date": "2019-01-20"
        },
        "default_timezone": "America/Los_Angeles",
        "match_shifts_by": "START_AT"
      },
      "location_ids": [
        "location_ids4"
      ],
      "employee_ids": [
        "employee_ids9"
      ],
      "status": "OPEN",
      "start": {
        "start_at": "start_at6",
        "end_at": "end_at6"
      },
      "end": {
        "start_at": "start_at0",
        "end_at": "end_at2"
      }
    },
    "sort": {
      "field": "START_AT",
      "order": "DESC"
    }
  },
  "cursor": "cursor2"
}
```

