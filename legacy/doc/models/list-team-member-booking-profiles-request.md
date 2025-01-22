
# List Team Member Booking Profiles Request

## Structure

`ListTeamMemberBookingProfilesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookableOnly` | `boolean \| null \| undefined` | Optional | Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`). |
| `limit` | `number \| null \| undefined` | Optional | The maximum number of results to return in a paged response.<br>**Constraints**: `>= 1`, `<= 100` |
| `cursor` | `string \| null \| undefined` | Optional | The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results.<br>**Constraints**: *Maximum Length*: `65536` |
| `locationId` | `string \| null \| undefined` | Optional | Indicates whether to include only team members enabled at the given location in the returned result.<br>**Constraints**: *Maximum Length*: `32` |

## Example (as JSON)

```json
{
  "bookable_only": false,
  "limit": 112,
  "cursor": "cursor2",
  "location_id": "location_id8"
}
```

