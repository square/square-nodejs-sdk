
# Bulk Upsert Booking Custom Attributes Request

Represents a [BulkUpsertBookingCustomAttributes](../../doc/api/booking-custom-attributes.md#bulk-upsert-booking-custom-attributes) request.

## Structure

`BulkUpsertBookingCustomAttributesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BookingCustomAttributeUpsertRequest>`](../../doc/models/booking-custom-attribute-upsert-request.md) | Required | A map containing 1 to 25 individual upsert requests. For each request, provide an<br>arbitrary ID that is unique for this `BulkUpsertBookingCustomAttributes` request and the<br>information needed to create or update a custom attribute. |

## Example (as JSON)

```json
{
  "values": {
    "key0": {
      "booking_id": "booking_id4",
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
      "idempotency_key": "idempotency_key6"
    },
    "key1": {
      "booking_id": "booking_id4",
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
      "idempotency_key": "idempotency_key6"
    }
  }
}
```

