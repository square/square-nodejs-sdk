
# Create Team Member Request

Represents a create request for a `TeamMember` object.

## Structure

`CreateTeamMemberRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotency_key` | `string` | Optional | A unique string that identifies this CreateTeamMember request.<br>Keys can be any valid string but must be unique for every request.<br>See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.<br><br><br><b>Min Length 1    Max Length 45</b> |
| `team_member` | [`TeamMember`](/doc/models/team-member.md) | Optional | A record representing an individual team member for a business. |

## Example (as JSON)

```json
{
  "idempotency_key": "idempotency-key-0",
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

