
# Create Team Member Response

Represents a response from a create request, containing the created `TeamMember` object or error messages.

## Structure

`CreateTeamMemberResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `team_member` | [`TeamMember`](/doc/models/team-member.md) | Optional | A record representing an individual team member for a business. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "team_member": {
    "id": "1yJlHapkseYnNPETIU1B",
    "reference_id": "reference_id_1",
    "is_owner": false,
    "status": "ACTIVE",
    "given_name": "Joe",
    "family_name": "Doe",
    "email_address": "joe_doe@gmail.com",
    "phone_number": "+14159283333",
    "assigned_locations": {
      "assignment_type": "EXPLICIT_LOCATIONS",
      "location_ids": [
        "GA2Y9HSJ8KRYT",
        "YSGH2WBKG94QZ"
      ]
    }
  }
}
```

