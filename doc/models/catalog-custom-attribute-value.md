
# Catalog Custom Attribute Value

An instance of a custom attribute. Custom attributes can be defined and
added to `ITEM` and `ITEM_VARIATION` type catalog objects.
[Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes).

## Structure

`CatalogCustomAttributeValue`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Optional | The name of the custom attribute. |
| `string_value` | `string` | Optional | The string value of the custom attribute.  Populated if `type` = `STRING`. |
| `custom_attribute_definition_id` | `string` | Optional | __Read-only.__ The id of the [CatalogCustomAttributeDefinition](#type-CatalogCustomAttributeDefinition) this value belongs to. |
| `type` | [`string`](/doc/models/catalog-custom-attribute-definition-type.md) | Optional | Defines the possible types for a custom attribute. |
| `number_value` | `string` | Optional | Populated if `type` = `NUMBER`. Contains a string<br>representation of a decimal number, using a `.` as the decimal separator. |
| `boolean_value` | `boolean` | Optional | A `true` or `false` value. Populated if `type` = `BOOLEAN`. |
| `selection_uid_values` | `string[]` | Optional | One or more choices from `allowed_selections`. Populated if `type` = `SELECTION`. |
| `key` | `string` | Optional | __Read-only.__ A copy of key from the associated `CatalogCustomAttributeDefinition`. |

## Example (as JSON)

```json
{
  "name": "name0",
  "string_value": "string_value4",
  "custom_attribute_definition_id": "custom_attribute_definition_id2",
  "type": "NUMBER",
  "number_value": "number_value0"
}
```

