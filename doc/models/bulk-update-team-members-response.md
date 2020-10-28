
# Bulk Update Team Members Response

Represents a response from a bulk update request, containing the updated `TeamMember` objects or error messages.

## Structure

`BulkUpdateTeamMembersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `team_members` | [`Record<string, UpdateTeamMemberResponse>`](/doc/models/update-team-member-response.md) | Optional | The successfully updated `TeamMember` objects. Each key is the `team_member_id` that maps to the `UpdateTeamMemberRequest`. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "team_members": {
    "fpgteZNMaf0qOK-a4t6P": {
      "team_member": {
        "id": "fpgteZNMaf0qOK-a4t6P",
        "reference_id": "reference_id_1",
        "is_owner": false,
        "status": "ACTIVE",
        "given_name": "Joe",
        "family_name": "Doe",
        "email_address": "joe_doe@gmail.com",
        "phone_number": "+14159283333",
        "created_at": "2020-06-11T22:46:57.095Z",
        "assigned_locations": {
          "assignment_type": "EXPLICIT_LOCATIONS",
          "location_ids": [
            "GA2Y9HSJ8KRYT",
            "YSGH2WBKG94QZ"
          ]
        }
      }
    },
    "AFMwA08kR-MIF-3Vs0OE": {
      "team_member": {
        "id": "AFMwA08kR-MIF-3Vs0OE",
        "reference_id": "reference_id_2",
        "is_owner": false,
        "status": "ACTIVE",
        "given_name": "Jane",
        "family_name": "Smith",
        "email_address": "jane_smith@gmail.com",
        "phone_number": "+14159223334",
        "created_at": "2020-06-11T22:46:57.001Z",
        "assigned_locations": {
          "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
        }
      }
    }
  }
}
```

