
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
      "id": "id1",
      "version": 157,
      "status": "CANCELLED_BY_CUSTOMER",
      "created_at": "created_at9",
      "updated_at": "updated_at7"
    }
  ],
  "cursor": "cursor6",
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

