
# Create Order Custom Attribute Definition Request

Represents a create request for an order custom attribute definition.

## Structure

`CreateOrderCustomAttributeDefinitionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinition` | [`CustomAttributeDefinition`](../../doc/models/custom-attribute-definition.md) | Required | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `idempotencyKey` | `string \| undefined` | Optional | A unique identifier for this request, used to ensure idempotency.<br>For more information, see [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency).<br>**Constraints**: *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "key": null,
    "schema": null,
    "name": null,
    "description": null,
    "visibility": null,
    "version": null
  },
  "idempotency_key": null
}
```

