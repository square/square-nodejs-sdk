
# Update Booking Response

## Structure

`UpdateBookingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `booking` | [`Booking \| undefined`](../../doc/models/booking.md) | Optional | Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service<br>at a given location to a requesting customer in one or more appointment segments. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors that occurred during the request. |

## Example (as JSON)

```json
{
  "booking": {
    "address": {
      "address_line_1": "1955 Broadway",
      "address_line_2": "Suite 600",
      "administrative_district_level_1": "CA",
      "locality": "Oakland",
      "postal_code": "94612"
    },
    "appointment_segments": [
      {
        "duration_minutes": 60,
        "service_variation_id": "RU3PBTZTK7DXZDQFCJHOK2MC",
        "service_variation_version": 1599775456731,
        "team_member_id": "TMXUrsBWWcHTt79t"
      }
    ],
    "created_at": "2020-10-28T15:47:41Z",
    "customer_id": "EX2QSVGTZN4K1E5QE1CBFNVQ8M",
    "customer_note": "I would like to sit near the window please",
    "id": "zkras0xv0xwswx",
    "location_id": "LEQHH0YY8B42M",
    "location_type": "CUSTOMER_LOCATION",
    "seller_note": "",
    "start_at": "2020-11-26T13:00:00Z",
    "status": "ACCEPTED",
    "updated_at": "2020-10-28T15:49:25Z",
    "version": 2
  },
  "errors": []
}
```

