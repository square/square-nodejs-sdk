
# Catalog Custom Attribute Value

An instance of a custom attribute. Custom attributes can be defined and
added to `ITEM` and `ITEM_VARIATION` type catalog objects.
[Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes).

## Structure

`CatalogCustomAttributeValue`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | The name of the custom attribute. |
| `stringValue` | `string \| null \| undefined` | Optional | The string value of the custom attribute.  Populated if `type` = `STRING`. |
| `customAttributeDefinitionId` | `string \| undefined` | Optional | The id of the [CatalogCustomAttributeDefinition](entity:CatalogCustomAttributeDefinition) this value belongs to. |
| `type` | [`string \| undefined`](../../doc/models/catalog-custom-attribute-definition-type.md) | Optional | Defines the possible types for a custom attribute. |
| `numberValue` | `string \| null \| undefined` | Optional | Populated if `type` = `NUMBER`. Contains a string<br>representation of a decimal number, using a `.` as the decimal separator. |
| `booleanValue` | `boolean \| null \| undefined` | Optional | A `true` or `false` value. Populated if `type` = `BOOLEAN`. |
| `selectionUidValues` | `string[] \| null \| undefined` | Optional | One or more choices from `allowed_selections`. Populated if `type` = `SELECTION`. |
| `key` | `string \| undefined` | Optional | If the associated `CatalogCustomAttributeDefinition` object is defined by another application, this key is prefixed by the defining application ID.<br>For example, if the CatalogCustomAttributeDefinition has a key attribute of "cocoa_brand" and the defining application ID is "abcd1234", this key is "abcd1234:cocoa_brand"<br>when the application making the request is different from the application defining the custom attribute definition. Otherwise, the key is simply "cocoa_brand". |

## Example (as JSON)

```json
{
  "name": "name2",
  "string_value": "string_value6",
  "custom_attribute_definition_id": "custom_attribute_definition_id0",
  "type": "NUMBER",
  "number_value": "number_value2"
}
```

