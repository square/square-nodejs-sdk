
# Update Order Custom Attribute Definition Request

Represents an update request for an order custom attribute definition.

## Structure

`UpdateOrderCustomAttributeDefinitionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinition` | [`CustomAttributeDefinition`](../../doc/models/custom-attribute-definition.md) | Required | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `idempotencyKey` | `string \| null \| undefined` | Optional | A unique identifier for this request, used to ensure idempotency.<br>For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "key": "cover-count",
    "version": 1,
    "visibility": "VISIBILITY_READ_ONLY",
    "schema": {
      "key1": "val1",
      "key2": "val2"
    },
    "name": "name2",
    "description": "description8"
  },
  "idempotency_key": "IDEMPOTENCY_KEY"
}
```

