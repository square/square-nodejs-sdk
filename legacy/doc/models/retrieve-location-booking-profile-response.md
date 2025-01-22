
# Retrieve Location Booking Profile Response

## Structure

`RetrieveLocationBookingProfileResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationBookingProfile` | [`LocationBookingProfile \| undefined`](../../doc/models/location-booking-profile.md) | Optional | The booking profile of a seller's location, including the location's ID and whether the location is enabled for online booking. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors that occurred during the request. |

## Example (as JSON)

```json
{
  "errors": [],
  "location_booking_profile": {
    "booking_enabled": true,
    "booking_site_url": "https://square.site/book/L3HETDGYQ4A2C/prod-business",
    "location_id": "L3HETDGYQ4A2C",
    "online_booking_enabled": false
  }
}
```

