
# Update Booking Request

## Structure

`UpdateBookingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Optional | A unique key to make this request an idempotent operation.<br>**Constraints**: *Maximum Length*: `255` |
| `booking` | [`Booking`](../../doc/models/booking.md) | Required | Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service<br>at a given location to a requesting customer in one or more appointment segments. |

## Example (as JSON)

```json
{
  "idempotency_key": null,
  "booking": {
    "version": null,
    "status": null,
    "start_at": null,
    "location_id": null,
    "customer_id": null,
    "customer_note": null,
    "seller_note": null,
    "appointment_segments": null,
    "location_type": null,
    "creator_details": null,
    "source": null
  }
}
```

