
# List Bookings Response

## Structure

`ListBookingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookings` | [`Booking[] \| undefined`](../../doc/models/booking.md) | Optional | The list of targeted bookings. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in the subsequent request to get the next page of the results. Stop retrieving the next page of the results when the cursor is not set.<br>**Constraints**: *Maximum Length*: `65536` |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors that occurred during the request. |

## Example (as JSON)

```json
{
  "bookings": [
    {
      "id": "id4",
      "version": 218,
      "status": "ACCEPTED",
      "created_at": "created_at2",
      "updated_at": "updated_at0"
    }
  ],
  "cursor": "cursor6",
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

