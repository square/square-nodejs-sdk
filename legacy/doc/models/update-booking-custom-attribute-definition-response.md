
# Update Booking Custom Attribute Definition Response

Represents an [UpdateBookingCustomAttributeDefinition](../../doc/api/booking-custom-attributes.md#update-booking-custom-attribute-definition) response.
Either `custom_attribute_definition` or `errors` is present in the response.

## Structure

`UpdateBookingCustomAttributeDefinitionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinition` | [`CustomAttributeDefinition \| undefined`](../../doc/models/custom-attribute-definition.md) | Optional | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "created_at": "2022-11-16T15:27:30Z",
    "description": "Update the description as desired.",
    "key": "favoriteShampoo",
    "name": "Favorite shampoo",
    "schema": {
      "key1": "val1",
      "key2": "val2"
    },
    "updated_at": "2022-11-16T15:39:38Z",
    "version": 2,
    "visibility": "VISIBILITY_READ_ONLY"
  },
  "errors": []
}
```

