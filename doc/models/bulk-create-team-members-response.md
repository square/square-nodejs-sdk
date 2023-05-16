
# Bulk Create Team Members Response

Represents a response from a bulk create request containing the created `TeamMember` objects or error messages.

## Structure

`BulkCreateTeamMembersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMembers` | [`Record<string, CreateTeamMemberResponse> \| undefined`](../../doc/models/create-team-member-response.md) | Optional | The successfully created `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "team_members": {
    "idempotency-key-1": {
      "team_member": {
        "assigned_locations": {
          "assignment_type": "EXPLICIT_LOCATIONS",
          "location_ids": [
            "GA2Y9HSJ8KRYT",
            "YSGH2WBKG94QZ"
          ]
        },
        "email_address": "joe_doe@gmail.com",
        "family_name": "Doe",
        "given_name": "Joe",
        "id": "ywhG1qfIOoqsHfVRubFV",
        "is_owner": false,
        "phone_number": "+14159283333",
        "reference_id": "reference_id_1",
        "status": "ACTIVE"
      },
      "errors": [
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "GENERIC_DECLINE",
          "detail": "detail8",
          "field": "field6"
        },
        {
          "category": "API_ERROR",
          "code": "CVV_FAILURE",
          "detail": "detail9",
          "field": "field7"
        },
        {
          "category": "AUTHENTICATION_ERROR",
          "code": "ADDRESS_VERIFICATION_FAILURE",
          "detail": "detail0",
          "field": "field8"
        }
      ]
    },
    "idempotency-key-2": {
      "team_member": {
        "assigned_locations": {
          "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
        },
        "email_address": "jane_smith@gmail.com",
        "family_name": "Smith",
        "given_name": "Jane",
        "id": "IF_Ncrg7fHhCqxVI9T6R",
        "is_owner": false,
        "phone_number": "+14159223334",
        "reference_id": "reference_id_2",
        "status": "ACTIVE"
      },
      "errors": [
        {
          "category": "API_ERROR",
          "code": "CVV_FAILURE",
          "detail": "detail9",
          "field": "field7"
        }
      ]
    }
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

