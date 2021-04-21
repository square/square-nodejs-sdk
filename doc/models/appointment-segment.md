
# Appointment Segment

Defines an appointment segment of a booking.

## Structure

`AppointmentSegment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMinutes` | `number` | Required | The time span in minutes of an appointment segment.<br>**Constraints**: `<= 1500` |
| `serviceVariationId` | `string` | Required | The ID of the [CatalogItemVariation](/doc/models/catalog-item-variation.md) object representing the service booked in this segment.<br>**Constraints**: *Minimum Length*: `1` |
| `teamMemberId` | `string` | Required | The ID of the [TeamMember](/doc/models/team-member.md) object representing the team member booked in this segment.<br>**Constraints**: *Minimum Length*: `1` |
| `serviceVariationVersion` | `bigint` | Required | The current version of the item variation representing the service booked in this segment. |

## Example (as JSON)

```json
{
  "duration_minutes": 144,
  "service_variation_id": "service_variation_id6",
  "team_member_id": "team_member_id0",
  "service_variation_version": 56
}
```

