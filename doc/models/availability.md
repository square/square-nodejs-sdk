
# Availability

Defines an appointment slot that encapsulates the appointment segments, location and starting time available for booking.

## Structure

`Availability`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startAt` | `string \| null \| undefined` | Optional | The RFC 3339 timestamp specifying the beginning time of the slot available for booking. |
| `locationId` | `string \| undefined` | Optional | The ID of the location available for booking.<br>**Constraints**: *Maximum Length*: `32` |
| `appointmentSegments` | [`AppointmentSegment[] \| null \| undefined`](../../doc/models/appointment-segment.md) | Optional | The list of appointment segments available for booking |

## Example (as JSON)

```json
{
  "start_at": "start_at6",
  "location_id": "location_id8",
  "appointment_segments": [
    {
      "duration_minutes": 136,
      "service_variation_id": "service_variation_id4",
      "team_member_id": "team_member_id0",
      "service_variation_version": 48,
      "intermission_minutes": 54,
      "any_team_member": false
    }
  ]
}
```

