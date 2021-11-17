
# List Team Member Booking Profiles Request

## Structure

`ListTeamMemberBookingProfilesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookableOnly` | `boolean \| undefined` | Optional | Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`). |
| `limit` | `number \| undefined` | Optional | The maximum number of results to return.<br>**Constraints**: `>= 1`, `<= 100` |
| `cursor` | `string \| undefined` | Optional | The cursor for paginating through the results. |
| `locationId` | `string \| undefined` | Optional | Indicates whether to include only team members enabled at the given location in the returned result. |

## Example (as JSON)

```json
{
  "bookable_only": false,
  "limit": 172,
  "cursor": "cursor6",
  "location_id": "location_id4"
}
```

