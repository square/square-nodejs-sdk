
# Bulk Create Team Members Request

Represents a bulk create request for `TeamMember` objects.

## Structure

`BulkCreateTeamMembersRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `team_members` | [`Record<string, CreateTeamMemberRequest>`](/doc/models/create-team-member-request.md) | The data which will be used to create the `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`. |

## Example (as JSON)

```json
{
  "team_members": {
    "idempotency-key-1": {
      "team_member": {
        "given_name": "Joe",
        "family_name": "Doe",
        "email_address": "joe_doe@gmail.com",
        "reference_id": "reference_id_1",
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
    "idempotency-key-2": {
      "team_member": {
        "given_name": "Jane",
        "family_name": "Smith",
        "email_address": "jane_smith@gmail.com",
        "reference_id": "reference_id_2",
        "phone_number": "+14159223334",
        "assigned_locations": {
          "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
        }
      }
    }
  }
}
```

