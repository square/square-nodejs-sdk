
# Bulk Update Team Members Request

Represents a bulk update request for `TeamMember` objects.

## Structure

`BulkUpdateTeamMembersRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `team_members` | [`Record<string, UpdateTeamMemberRequest>`](/doc/models/update-team-member-request.md) | The data which will be used to update the `TeamMember` objects. Each key is the `team_member_id` that maps to the `UpdateTeamMemberRequest`. |

## Example (as JSON)

```json
{
  "team_members": {
    "fpgteZNMaf0qOK-a4t6P": {
      "team_member": {
        "reference_id": "reference_id_1",
        "is_owner": false,
        "status": "ACTIVE",
        "given_name": "Joe",
        "family_name": "Doe",
        "email_address": "joe_doe@gmail.com",
        "phone_number": "+14159283333",
        "assigned_locations": {
          "location_ids": [
            "YSGH2WBKG94QZ",
            "GA2Y9HSJ8KRYT"
          ],
          "assignment_type": "EXPLICIT_LOCATIONS"
        }
      }
    },
    "AFMwA08kR-MIF-3Vs0OE": {
      "team_member": {
        "reference_id": "reference_id_2",
        "is_owner": false,
        "status": "ACTIVE",
        "given_name": "Jane",
        "family_name": "Smith",
        "email_address": "jane_smith@gmail.com",
        "phone_number": "+14159223334",
        "assigned_locations": {
          "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
        }
      }
    }
  }
}
```

