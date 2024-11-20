
# Booking Custom Attribute Upsert Response

Represents a response for an individual upsert request in a [BulkUpsertBookingCustomAttributes](../../doc/api/booking-custom-attributes.md#bulk-upsert-booking-custom-attributes) operation.

## Structure

`BookingCustomAttributeUpsertResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string \| undefined` | Optional | The ID of the [booking](entity:Booking) associated with the custom attribute. |
| `customAttribute` | [`CustomAttribute \| undefined`](../../doc/models/custom-attribute.md) | Optional | A custom attribute value. Each custom attribute value has a corresponding<br>`CustomAttributeDefinition` object. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred while processing the individual request. |

## Example (as JSON)

```json
{
  "booking_id": "booking_id6",
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

