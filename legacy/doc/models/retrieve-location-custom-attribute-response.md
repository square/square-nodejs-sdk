
# Retrieve Location Custom Attribute Response

Represents a [RetrieveLocationCustomAttribute](../../doc/api/location-custom-attributes.md#retrieve-location-custom-attribute) response.
Either `custom_attribute_definition` or `errors` is present in the response.

## Structure

`RetrieveLocationCustomAttributeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttribute` | [`CustomAttribute \| undefined`](../../doc/models/custom-attribute.md) | Optional | A custom attribute value. Each custom attribute value has a corresponding<br>`CustomAttributeDefinition` object. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
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
    }
  ]
}
```

