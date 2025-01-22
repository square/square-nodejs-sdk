
# List Location Booking Profiles Response

## Structure

`ListLocationBookingProfilesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationBookingProfiles` | [`LocationBookingProfile[] \| undefined`](../../doc/models/location-booking-profile.md) | Optional | The list of a seller's location booking profiles. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in the subsequent request to get the next page of the results. Stop retrieving the next page of the results when the cursor is not set. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors that occurred during the request. |

## Example (as JSON)

```json
{
  "errors": [],
  "location_booking_profiles": [
    {
      "booking_site_url": "https://squareup.com/book/LY6WNBPVM6VGV/testbusiness",
      "location_id": "LY6WNBPVM6VGV",
      "online_booking_enabled": true
    },
    {
      "location_id": "PYTRNBPVMJUPV",
      "online_booking_enabled": false,
      "booking_site_url": "booking_site_url2"
    }
  ],
  "cursor": "cursor8"
}
```

