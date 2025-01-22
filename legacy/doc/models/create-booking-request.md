
# Create Booking Request

## Structure

`CreateBookingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Optional | A unique key to make this request an idempotent operation.<br>**Constraints**: *Maximum Length*: `255` |
| `booking` | [`Booking`](../../doc/models/booking.md) | Required | Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service<br>at a given location to a requesting customer in one or more appointment segments. |

## Example (as JSON)

```json
{
  "idempotency_key": "idempotency_key4",
  "booking": {
    "id": "id4",
    "version": 156,
    "status": "CANCELLED_BY_SELLER",
    "created_at": "created_at2",
    "updated_at": "updated_at0"
  }
}
```

