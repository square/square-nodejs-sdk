
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
  "bookings": null,
  "cursor": null,
  "errors": null
}
```

