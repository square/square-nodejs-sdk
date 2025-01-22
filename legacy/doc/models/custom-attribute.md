
# Custom Attribute

A custom attribute value. Each custom attribute value has a corresponding
`CustomAttributeDefinition` object.

## Structure

`CustomAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| null \| undefined` | Optional | The identifier<br>of the custom attribute definition and its corresponding custom attributes. This value<br>can be a simple key, which is the key that is provided when the custom attribute definition<br>is created, or a qualified key, if the requesting<br>application is not the definition owner. The qualified key consists of the application ID<br>of the custom attribute definition owner<br>followed by the simple key that was provided when the definition was created. It has the<br>format application_id:simple key.<br><br>The value for a simple key can contain up to 60 alphanumeric characters, periods (.),<br>underscores (_), and hyphens (-).<br>**Constraints**: *Minimum Length*: `1`, *Pattern*: `^([a-zA-Z0-9\._-]+:)?[a-zA-Z0-9\._-]{1,60}$` |
| `value` | `unknown \| null \| undefined` | Optional | The value assigned to the custom attribute. It is validated against the custom<br>attribute definition's schema on write operations. For more information about custom<br>attribute values,<br>see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview). |
| `version` | `number \| undefined` | Optional | Read only. The current version of the custom attribute. This field is incremented when the custom attribute is changed.<br>When updating an existing custom attribute value, you can provide this field<br>and specify the current version of the custom attribute to enable<br>[optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency).<br>This field can also be used to enforce strong consistency for reads. For more information about strong consistency for reads,<br>see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview). |
| `visibility` | [`string \| undefined`](../../doc/models/custom-attribute-definition-visibility.md) | Optional | The level of permission that a seller or other applications requires to<br>view this custom attribute definition.<br>The `Visibility` field controls who can read and write the custom attribute values<br>and custom attribute definition. |
| `definition` | [`CustomAttributeDefinition \| undefined`](../../doc/models/custom-attribute-definition.md) | Optional | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp that indicates when the custom attribute was created or was most recently<br>updated, in RFC 3339 format. |
| `createdAt` | `string \| undefined` | Optional | The timestamp that indicates when the custom attribute was created, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "key": "key0",
  "value": {
    "key1": "val1",
    "key2": "val2"
  },
  "version": 20,
  "visibility": "VISIBILITY_HIDDEN",
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
}
```

