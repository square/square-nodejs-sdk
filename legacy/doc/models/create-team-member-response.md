
# Create Team Member Response

Represents a response from a create request containing the created `TeamMember` object or error messages.

## Structure

`CreateTeamMemberResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMember` | [`TeamMember \| undefined`](../../doc/models/team-member.md) | Optional | A record representing an individual team member for a business. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "team_member": {
    "assigned_locations": {
      "assignment_type": "EXPLICIT_LOCATIONS",
      "location_ids": [
        "GA2Y9HSJ8KRYT",
        "YSGH2WBKG94QZ"
      ]
    },
    "created_at": "2021-06-11T22:55:45Z",
    "email_address": "joe_doe@example.com",
    "family_name": "Doe",
    "given_name": "Joe",
    "id": "1yJlHapkseYnNPETIU1B",
    "is_owner": false,
    "phone_number": "+14159283333",
    "reference_id": "reference_id_1",
    "status": "ACTIVE",
    "updated_at": "2021-06-11T22:55:45Z",
    "wage_setting": {
      "created_at": "2021-06-11T22:55:45Z",
      "is_overtime_exempt": true,
      "job_assignments": [
        {
          "annual_rate": {
            "amount": 3000000,
            "currency": "USD"
          },
          "hourly_rate": {
            "amount": 1443,
            "currency": "USD"
          },
          "job_id": "FjS8x95cqHiMenw4f1NAUH4P",
          "job_title": "Manager",
          "pay_type": "SALARY",
          "weekly_hours": 40
        },
        {
          "hourly_rate": {
            "amount": 2000,
            "currency": "USD"
          },
          "job_id": "VDNpRv8da51NU8qZFC5zDWpF",
          "job_title": "Cashier",
          "pay_type": "HOURLY"
        }
      ],
      "team_member_id": "1yJlHapkseYnNPETIU1B",
      "updated_at": "2021-06-11T22:55:45Z",
      "version": 1
    }
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

