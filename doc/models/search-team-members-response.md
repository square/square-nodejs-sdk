
# Search Team Members Response

Represents a response from a search request, containing a filtered list of `TeamMember` objects.

## Structure

`SearchTeamMembersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `team_members` | [`TeamMember[]`](/doc/models/team-member.md) | Optional | The filtered list of `TeamMember` objects. |
| `cursor` | `string` | Optional | The opaque cursor for fetching the next page. Read about<br>[pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) with Square APIs for more information. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "team_members": [
    {
      "id": "-3oZQKPKVk6gUXU_V5Qa",
      "reference_id": "12345678",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Johnny",
      "family_name": "Cash",
      "email_address": "johnny_cash@squareup.com",
      "created_at": "2019-07-10T17:26:48Z",
      "updated_at": "2020-04-28T21:49:28.957Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "1AVJj0DjkzbmbJw5r4KK",
      "reference_id": "abcded",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Lombard",
      "family_name": "Smith",
      "phone_number": "+14155552671",
      "created_at": "2020-03-24T18:14:01.127Z",
      "updated_at": "2020-06-09T17:38:05.423Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "2JCmiJol_KKFs9z2Evim",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Monica",
      "family_name": "Sway",
      "created_at": "2020-03-24T01:09:25.010Z",
      "updated_at": "2020-03-24T01:09:25.010Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "4uXcJQSLtbk3F0UQHFNQ",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Elton",
      "family_name": "Ipsum",
      "created_at": "2020-03-24T01:09:23.464Z",
      "updated_at": "2020-03-24T01:09:23.464Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "5CoUpyrw1YwGWcRd-eDL",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Steven",
      "family_name": "Lo",
      "created_at": "2020-03-24T01:09:23.074Z",
      "updated_at": "2020-03-24T01:09:23.074Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "5MRPTTp8MMBLVSmzrGha",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Patrick",
      "family_name": "Steward",
      "email_address": "patrick_steward@gmail.com",
      "phone_number": "+14155552671",
      "created_at": "2020-03-24T18:14:03.865Z",
      "updated_at": "2020-03-24T18:14:03.865Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "7F5ZxsfRnkexhu1PTbfh",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Ivy",
      "family_name": "Manny",
      "created_at": "2020-03-24T01:09:25.180Z",
      "updated_at": "2020-03-24T01:09:25.180Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "808X9HR72yKvVaigQXf4",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "John",
      "family_name": "Smith",
      "email_address": "john_smith@gmail.com",
      "phone_number": "+14155552671",
      "created_at": "2020-03-24T18:14:02.797Z",
      "updated_at": "2020-03-24T18:14:02.797Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "9MVDVoY4hazkWKGo_OuZ",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Robert",
      "family_name": "Wen",
      "email_address": "r_wen@gmail.com",
      "phone_number": "+14155552671",
      "created_at": "2020-03-24T18:14:00.399Z",
      "updated_at": "2020-03-24T18:14:00.399Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    },
    {
      "id": "9UglUjOXQ13-hMFypCft",
      "is_owner": false,
      "status": "ACTIVE",
      "given_name": "Ashley",
      "family_name": "Simpson",
      "email_address": "asimpson@gmail.com",
      "phone_number": "+14155552671",
      "created_at": "2020-03-24T18:14:00.445Z",
      "updated_at": "2020-03-24T18:14:00.445Z",
      "assigned_locations": {
        "assignment_type": "ALL_CURRENT_AND_FUTURE_LOCATIONS"
      }
    }
  ],
  "cursor": "N:9UglUjOXQ13-hMFypCft"
}
```

