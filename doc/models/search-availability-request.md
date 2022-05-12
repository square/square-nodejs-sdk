
# Search Availability Request

## Structure

`SearchAvailabilityRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | [`SearchAvailabilityQuery`](../../doc/models/search-availability-query.md) | Required | The query used to search for buyer-accessible availabilities of bookings. |

## Example (as JSON)

```json
{
  "query": {
    "filter": {
      "start_at_range": {
        "start_at": null,
        "end_at": null
      },
      "location_id": null,
      "segment_filters": null,
      "booking_id": null
    }
  }
}
```

