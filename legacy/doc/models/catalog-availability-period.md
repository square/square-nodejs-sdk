
# Catalog Availability Period

Represents a time period of availability.

## Structure

`CatalogAvailabilityPeriod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startLocalTime` | `string \| null \| undefined` | Optional | The start time of an availability period, specified in local time using partial-time<br>RFC 3339 format. For example, `8:30:00` for a period starting at 8:30 in the morning.<br>Note that the seconds value is always :00, but it is appended for conformance to the RFC. |
| `endLocalTime` | `string \| null \| undefined` | Optional | The end time of an availability period, specified in local time using partial-time<br>RFC 3339 format. For example, `21:00:00` for a period ending at 9:00 in the evening.<br>Note that the seconds value is always :00, but it is appended for conformance to the RFC. |
| `dayOfWeek` | [`string \| undefined`](../../doc/models/day-of-week.md) | Optional | Indicates the specific day  of the week. |

## Example (as JSON)

```json
{
  "start_local_time": "start_local_time6",
  "end_local_time": "end_local_time8",
  "day_of_week": "WED"
}
```

