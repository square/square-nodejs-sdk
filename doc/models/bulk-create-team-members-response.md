
# Bulk Create Team Members Response

Represents a response from a bulk create request, containing the created `TeamMember` objects or error messages.

## Structure

`BulkCreateTeamMembersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `team_members` | [`Record<string, CreateTeamMemberResponse>`](/doc/models/create-team-member-response.md) | Optional | The successfully created `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "team_members": {
    "idempotency-key-1": {
      "team_member": {
        "id": "ywhG1qfIOoqsHfVRubFV",
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
    },
    "idempotency-key-2": {
      "team_member": {
        "id": "IF_Ncrg7fHhCqxVI9T6R",
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

