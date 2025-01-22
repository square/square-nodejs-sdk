
# Retrieve Order Custom Attribute Request

Represents a get request for an order custom attribute.

## Structure

`RetrieveOrderCustomAttributeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `number \| undefined` | Optional | To enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)<br>control, include this optional field and specify the current version of the custom attribute. |
| `withDefinition` | `boolean \| null \| undefined` | Optional | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom attribute,<br>information about the data type, or other definition details. The default value is `false`. |

## Example (as JSON)

```json
{
  "version": 110,
  "with_definition": false
}
```

