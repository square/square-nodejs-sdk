
# Search Availability Query

The query used to search for buyer-accessible availabilities of bookings.

## Structure

`SearchAvailabilityQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`SearchAvailabilityFilter`](../../doc/models/search-availability-filter.md) | Required | A query filter to search for buyer-accessible availabilities by. |

## Example (as JSON)

```json
{
  "filter": {
    "start_at_range": {
      "start_at": "start_at6",
      "end_at": "end_at6"
    },
    "location_id": "location_id8",
    "segment_filters": [
      {
        "service_variation_id": "service_variation_id4",
        "team_member_id_filter": {
          "all": [
            "all5",
            "all6",
            "all7"
          ],
          "any": [
            "any2",
            "any3",
            "any4"
          ],
          "none": [
            "none7",
            "none8"
          ]
        }
      },
      {
        "service_variation_id": "service_variation_id4",
        "team_member_id_filter": {
          "all": [
            "all5",
            "all6",
            "all7"
          ],
          "any": [
            "any2",
            "any3",
            "any4"
          ],
          "none": [
            "none7",
            "none8"
          ]
        }
      },
      {
        "service_variation_id": "service_variation_id4",
        "team_member_id_filter": {
          "all": [
            "all5",
            "all6",
            "all7"
          ],
          "any": [
            "any2",
            "any3",
            "any4"
          ],
          "none": [
            "none7",
            "none8"
          ]
        }
      }
    ],
    "booking_id": "booking_id8"
  }
}
```

