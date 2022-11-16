
# Retrieve Order Custom Attribute Definition Response

Represents a response from getting an order custom attribute definition.

## Structure

`RetrieveOrderCustomAttributeDefinitionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinition` | [`CustomAttributeDefinition \| undefined`](../../doc/models/custom-attribute-definition.md) | Optional | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "created_at": "2022-11-09T21:25:28.693Z",
    "description": "updated",
    "key": "wayne-test-15",
    "name": "wayne-test-15",
    "schema": null,
    "updated_at": "2022-11-09T21:25:45.592Z",
    "version": 2,
    "visibility": "VISIBILITY_READ_WRITE_VALUES"
  }
}
```

