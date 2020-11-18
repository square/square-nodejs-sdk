
# Appointment Segment

Defines an appointment segment of a booking.

## Structure

`AppointmentSegment`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `durationMinutes` | `number` | The time span in minutes of an appointment segment. |
| `serviceVariationId` | `string` | The ID of the [CatalogItemVariation](#type-CatalogItemVariation) object representing the service booked in this segment. |
| `teamMemberId` | `string` | The ID of the [TeamMember](#type-TeamMember) object representing the team member booked in this segment. |
| `serviceVariationVersion` | `number` | The current version of the item variation representing the service booked in this segment. |

## Example (as JSON)

```json
{
  "duration_minutes": 144,
  "service_variation_id": "service_variation_id6",
  "team_member_id": "team_member_id0",
  "service_variation_version": 56
}
```

