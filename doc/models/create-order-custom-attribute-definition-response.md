
# Create Order Custom Attribute Definition Response

Represents a response from creating an order custom attribute definition.

## Structure

`CreateOrderCustomAttributeDefinitionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinition` | [`CustomAttributeDefinition \| undefined`](../../doc/models/custom-attribute-definition.md) | Optional | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "created_at": "2022-11-10T18:04:57.039Z",
    "description": "wayne test",
    "key": "wayne-test-16",
    "name": "wayne-test",
    "schema": null,
    "updated_at": "2022-11-10T18:04:57.039Z",
    "version": 1,
    "visibility": "VISIBILITY_READ_WRITE_VALUES"
  }
}
```

