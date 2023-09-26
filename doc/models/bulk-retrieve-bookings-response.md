
# Bulk Retrieve Bookings Response

Response payload for bulk retrieval of bookings.

## Structure

`BulkRetrieveBookingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookings` | [`Record<string, RetrieveBookingResponse> \| undefined`](../../doc/models/retrieve-booking-response.md) | Optional | Requested bookings returned as a map containing `booking_id` as the key and `RetrieveBookingResponse` as the value. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors that occurred during the request. |

## Example (as JSON)

```json
{
  "bookings": {
    "sc3p3m7dvctfr1": {
      "booking": {
        "all_day": false,
        "appointment_segments": [
          {
            "any_team_member": false,
            "duration_minutes": 60,
            "service_variation_id": "VG4FYBKK3UL6UITOEYQ6MFLS",
            "service_variation_version": 1641341724039,
            "team_member_id": "TMjiqI3PxyLMKr4k"
          }
        ],
        "created_at": "2023-04-26T18:19:21Z",
        "customer_id": "4TDWKN9E8165X8Z77MRS0VFMJM",
        "id": "sc3p3m7dvctfr1",
        "location_id": "LY6WNBPVM6VGV",
        "start_at": "2023-05-01T14:00:00Z",
        "status": "ACCEPTED",
        "updated_at": "2023-04-26T18:19:21Z",
        "version": 0
      },
      "errors": []
    },
    "tdegug1dvctdef": {
      "errors": [
        {
          "category": "INVALID_REQUEST_ERROR",
          "code": "NOT_FOUND",
          "detail": "Specified booking was not found.",
          "field": "booking_id"
        }
      ],
      "booking": {
        "id": "id4",
        "version": 156,
        "status": "CANCELLED_BY_SELLER",
        "created_at": "created_at2",
        "updated_at": "updated_at0"
      }
    },
    "tdegug1fqni3wh": {
      "booking": {
        "all_day": false,
        "appointment_segments": [
          {
            "any_team_member": false,
            "duration_minutes": 60,
            "service_variation_id": "VG4FYBKK3UL6UITOEYQ6MFLS",
            "service_variation_version": 1641341724039,
            "team_member_id": "TMjiqI3PxyLMKr4k"
          }
        ],
        "created_at": "2023-04-26T18:19:30Z",
        "customer_id": "4TDWKN9E8165X8Z77MRS0VFMJM",
        "id": "tdegug1fqni3wh",
        "location_id": "LY6WNBPVM6VGV",
        "start_at": "2023-05-02T14:00:00Z",
        "status": "ACCEPTED",
        "updated_at": "2023-04-26T18:19:30Z",
        "version": 0
      },
      "errors": []
    }
  },
  "errors": []
}
```

