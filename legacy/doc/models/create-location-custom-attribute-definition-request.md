
# Create Location Custom Attribute Definition Request

Represents a [CreateLocationCustomAttributeDefinition](../../doc/api/location-custom-attributes.md#create-location-custom-attribute-definition) request.

## Structure

`CreateLocationCustomAttributeDefinitionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinition` | [`CustomAttributeDefinition`](../../doc/models/custom-attribute-definition.md) | Required | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `idempotencyKey` | `string \| undefined` | Optional | A unique identifier for this request, used to ensure idempotency. For more information,<br>see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "description": "Bestselling item at location",
    "key": "bestseller",
    "name": "Bestseller",
    "schema": {
      "key1": "val1",
      "key2": "val2"
    },
    "visibility": "VISIBILITY_READ_WRITE_VALUES"
  },
  "idempotency_key": "idempotency_key6"
}
```

