
# Appointment Segment

Defines an appointment segment of a booking.

## Structure

`AppointmentSegment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMinutes` | `number \| null \| undefined` | Optional | The time span in minutes of an appointment segment.<br>**Constraints**: `<= 1500` |
| `serviceVariationId` | `string \| null \| undefined` | Optional | The ID of the [CatalogItemVariation](entity:CatalogItemVariation) object representing the service booked in this segment.<br>**Constraints**: *Maximum Length*: `36` |
| `teamMemberId` | `string` | Required | The ID of the [TeamMember](entity:TeamMember) object representing the team member booked in this segment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `serviceVariationVersion` | `bigint \| null \| undefined` | Optional | The current version of the item variation representing the service booked in this segment. |
| `intermissionMinutes` | `number \| undefined` | Optional | Time between the end of this segment and the beginning of the subsequent segment. |
| `anyTeamMember` | `boolean \| undefined` | Optional | Whether the customer accepts any team member, instead of a specific one, to serve this segment. |
| `resourceIds` | `string[] \| undefined` | Optional | The IDs of the seller-accessible resources used for this appointment segment. |

## Example (as JSON)

```json
{
  "duration_minutes": 36,
  "service_variation_id": "service_variation_id4",
  "team_member_id": "team_member_id0",
  "service_variation_version": 204,
  "intermission_minutes": 210,
  "any_team_member": false
}
```

