
# Update Team Member Request

Represents an update request for a `TeamMember` object.

## Structure

`UpdateTeamMemberRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `team_member` | [`TeamMember`](/doc/models/team-member.md) | Optional | A record representing an individual team member for a business. |

## Example (as JSON)

```json
{
  "team_member": {
    "reference_id": "reference_id_1",
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
}
```

