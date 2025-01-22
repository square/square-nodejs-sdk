
# Workweek Config

Sets the day of the week and hour of the day that a business starts a
workweek. This is used to calculate overtime pay.

## Structure

`WorkweekConfig`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The UUID for this object. |
| `startOfWeek` | [`string`](../../doc/models/weekday.md) | Required | The days of the week. |
| `startOfDayLocalTime` | `string` | Required | The local time at which a business week starts. Represented as a<br>string in `HH:MM` format (`HH:MM:SS` is also accepted, but seconds are<br>truncated).<br>**Constraints**: *Minimum Length*: `1` |
| `version` | `number \| undefined` | Optional | Used for resolving concurrency issues. The request fails if the version<br>provided does not match the server version at the time of the request. If not provided,<br>Square executes a blind write; potentially overwriting data from another<br>write. |
| `createdAt` | `string \| undefined` | Optional | A read-only timestamp in RFC 3339 format; presented in UTC. |
| `updatedAt` | `string \| undefined` | Optional | A read-only timestamp in RFC 3339 format; presented in UTC. |

## Example (as JSON)

```json
{
  "id": "id4",
  "start_of_week": "SUN",
  "start_of_day_local_time": "start_of_day_local_time0",
  "version": 104,
  "created_at": "created_at2",
  "updated_at": "updated_at0"
}
```

