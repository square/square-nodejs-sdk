
# Update Order Custom Attribute Definition Response

Represents a response from updating an order custom attribute definition.

## Structure

`UpdateOrderCustomAttributeDefinitionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinition` | [`CustomAttributeDefinition \| undefined`](../../doc/models/custom-attribute-definition.md) | Optional | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "created_at": "2022-11-16T16:53:23.141Z",
    "description": "The number of people seated at a table",
    "key": "cover-count",
    "name": "Cover count",
    "schema": {
      "key1": "val1",
      "key2": "val2"
    },
    "updated_at": "2022-11-16T17:44:11.436Z",
    "version": 2,
    "visibility": "VISIBILITY_READ_ONLY"
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

