
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
  "location_booking_profiles": [
    {
      "location_id": "location_id0",
      "booking_site_url": "booking_site_url2",
      "online_booking_enabled": false
    },
    {
      "location_id": "location_id0",
      "booking_site_url": "booking_site_url2",
      "online_booking_enabled": false
    },
    {
      "location_id": "location_id0",
      "booking_site_url": "booking_site_url2",
      "online_booking_enabled": false
    }
  ],
  "cursor": "cursor8",
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

