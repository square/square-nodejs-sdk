
# Search Availability Filter

A query filter to search for availabilities by.

## Structure

`SearchAvailabilityFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startAtRange` | [`TimeRange`](/doc/models/time-range.md) | Required | Represents a generic time range. The start and end values are<br>represented in RFC 3339 format. Time ranges are customized to be<br>inclusive or exclusive based on the needs of a particular endpoint.<br>Refer to the relevant endpoint-specific documentation to determine<br>how time ranges are handled. |
| `locationId` | `string \| undefined` | Optional | The query expression to search for availabilities matching the specified seller location IDs.<br>This query expression is not applicable when `booking_id` is present. |
| `segmentFilters` | [`SegmentFilter[] \| undefined`](/doc/models/segment-filter.md) | Optional | The list of segment filters to apply. A query with `n` segment filters returns availabilities with `n` segments per<br>availability. It is not applicable when `booking_id` is present. |
| `bookingId` | `string \| undefined` | Optional | The query expression to search for availabilities for an existing booking by matching the specified `booking_id` value.<br>This is commonly used to reschedule an appointment.<br>If this expression is specified, the `location_id` and `segment_filters` expressions are not allowed. |

## Example (as JSON)

```json
{
  "start_at_range": {
    "start_at": "start_at6",
    "end_at": "end_at6"
  },
  "location_id": "location_id4",
  "segment_filters": [
    {
      "service_variation_id": "service_variation_id6",
      "team_member_id_filter": {
        "all": [
          "all5"
        ],
        "any": [
          "any2",
          "any3"
        ],
        "none": [
          "none7"
        ]
      }
    },
    {
      "service_variation_id": "service_variation_id5",
      "team_member_id_filter": {
        "all": [
          "all4",
          "all5",
          "all6"
        ],
        "any": [
          "any3",
          "any4",
          "any5"
        ],
        "none": [
          "none8",
          "none9"
        ]
      }
    }
  ],
  "booking_id": "booking_id4"
}
```

