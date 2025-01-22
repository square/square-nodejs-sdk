
# Booking Custom Attribute Upsert Request

Represents an individual upsert request in a [BulkUpsertBookingCustomAttributes](../../doc/api/booking-custom-attributes.md#bulk-upsert-booking-custom-attributes)
request. An individual request contains a booking ID, the custom attribute to create or update,
and an optional idempotency key.

## Structure

`BookingCustomAttributeUpsertRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string` | Required | The ID of the target [booking](entity:Booking).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `customAttribute` | [`CustomAttribute`](../../doc/models/custom-attribute.md) | Required | A custom attribute value. Each custom attribute value has a corresponding<br>`CustomAttributeDefinition` object. |
| `idempotencyKey` | `string \| null \| undefined` | Optional | A unique identifier for this individual upsert request, used to ensure idempotency.<br>For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "booking_id": "booking_id2",
  "custom_attribute": {
    "key": "key2",
    "value": {
      "key1": "val1",
      "key2": "val2"
    },
    "version": 102,
    "visibility": "VISIBILITY_READ_ONLY",
    "definition": {
      "key": "key0",
      "schema": {
        "key1": "val1",
        "key2": "val2"
      },
      "name": "name0",
      "description": "description0",
      "visibility": "VISIBILITY_HIDDEN"
    }
  },
  "idempotency_key": "idempotency_key4"
}
```

