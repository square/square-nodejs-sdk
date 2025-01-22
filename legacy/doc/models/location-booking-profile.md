
# Location Booking Profile

The booking profile of a seller's location, including the location's ID and whether the location is enabled for online booking.

## Structure

`LocationBookingProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| null \| undefined` | Optional | The ID of the [location](entity:Location). |
| `bookingSiteUrl` | `string \| null \| undefined` | Optional | Url for the online booking site for this location. |
| `onlineBookingEnabled` | `boolean \| null \| undefined` | Optional | Indicates whether the location is enabled for online booking. |

## Example (as JSON)

```json
{
  "location_id": "location_id8",
  "booking_site_url": "booking_site_url4",
  "online_booking_enabled": false
}
```

