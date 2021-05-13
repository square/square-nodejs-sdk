
# List Team Member Booking Profiles Response

## Structure

`ListTeamMemberBookingProfilesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberBookingProfiles` | [`TeamMemberBookingProfile[] \| undefined`](/doc/models/team-member-booking-profile.md) | Optional | The list of team member booking profiles. |
| `cursor` | `string \| undefined` | Optional | The cursor for paginating through the results. |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "errors": [],
  "team_member_booking_profiles": [
    {
      "display_name": "Sandbox Seller",
      "is_bookable": true,
      "team_member_id": "TMXUrsBWWcHTt79t"
    },
    {
      "display_name": "Sandbox Staff",
      "is_bookable": true,
      "team_member_id": "TMaJcbiRqPIGZuS9"
    }
  ]
}
```

