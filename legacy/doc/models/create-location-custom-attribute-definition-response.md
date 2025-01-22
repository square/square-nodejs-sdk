
# Create Location Custom Attribute Definition Response

Represents a [CreateLocationCustomAttributeDefinition](../../doc/api/location-custom-attributes.md#create-location-custom-attribute-definition) response.
Either `custom_attribute_definition` or `errors` is present in the response.

## Structure

`CreateLocationCustomAttributeDefinitionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinition` | [`CustomAttributeDefinition \| undefined`](../../doc/models/custom-attribute-definition.md) | Optional | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "created_at": "2022-12-02T19:06:36.559Z",
    "description": "Bestselling item at location",
    "key": "bestseller",
    "name": "Bestseller",
    "schema": {
      "key1": "val1",
      "key2": "val2"
    },
    "updated_at": "2022-12-02T19:06:36.559Z",
    "version": 1,
    "visibility": "VISIBILITY_READ_WRITE_VALUES"
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

