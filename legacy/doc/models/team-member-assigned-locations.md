
# Team Member Assigned Locations

An object that represents a team member's assignment to locations.

## Structure

`TeamMemberAssignedLocations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assignmentType` | [`string \| undefined`](../../doc/models/team-member-assigned-locations-assignment-type.md) | Optional | Enumerates the possible assignment types that the team member can have. |
| `locationIds` | `string[] \| null \| undefined` | Optional | The explicit locations that the team member is assigned to. |

## Example (as JSON)

```json
{
  "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS",
  "location_ids": [
    "location_ids4",
    "location_ids5"
  ]
}
```

