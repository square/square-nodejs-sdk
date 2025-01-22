
# Catalog Modifier List

For a text-based modifier, this encapsulates the modifier's text when its `modifier_type` is `TEXT`.
For example, to sell T-shirts with custom prints, a text-based modifier can be used to capture the buyer-supplied
text string to be selected for the T-shirt at the time of sale.

For non text-based modifiers, this encapsulates a non-empty list of modifiers applicable to items
at the time of sale. Each element of the modifier list is a `CatalogObject` instance of the `MODIFIER` type.  
For example, a "Condiments" modifier list applicable to a "Hot Dog" item
may contain "Ketchup", "Mustard", and "Relish" modifiers.

A non text-based modifier can be applied to the modified item once or multiple times, if the `selection_type` field
is set to `SINGLE` or `MULTIPLE`, respectively. On the other hand, a text-based modifier can be applied to the item
only once and the `selection_type` field is always set to `SINGLE`.

## Structure

`CatalogModifierList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | The name of the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of<br>Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `ordinal` | `number \| null \| undefined` | Optional | The position of this `CatalogModifierList` within a list of `CatalogModifierList` instances. |
| `selectionType` | [`string \| undefined`](../../doc/models/catalog-modifier-list-selection-type.md) | Optional | Indicates whether a CatalogModifierList supports multiple selections. |
| `modifiers` | [`CatalogObject[] \| null \| undefined`](../../doc/models/catalog-object.md) | Optional | A non-empty list of `CatalogModifier` objects to be included in the `CatalogModifierList`,<br>for non text-based modifiers when the `modifier_type` attribute is `LIST`. Each element of this list<br>is a `CatalogObject` instance of the `MODIFIER` type, containing the following attributes:<br><br>```<br>{<br>"id": "{{catalog_modifier_id}}",<br>"type": "MODIFIER", <br>"modifier_data": {{a CatalogModifier instance>}} <br>}<br>``` |
| `imageIds` | `string[] \| null \| undefined` | Optional | The IDs of images associated with this `CatalogModifierList` instance.<br>Currently these images are not displayed on Square products, but may be displayed in 3rd-party applications. |
| `modifierType` | [`string \| undefined`](../../doc/models/catalog-modifier-list-modifier-type.md) | Optional | Defines the type of `CatalogModifierList`. |
| `maxLength` | `number \| null \| undefined` | Optional | The maximum length, in Unicode points, of the text string of the text-based modifier as represented by<br>this `CatalogModifierList` object with the `modifier_type` set to `TEXT`. |
| `textRequired` | `boolean \| null \| undefined` | Optional | Whether the text string must be a non-empty string (`true`) or not (`false`) for a text-based modifier<br>as represented by this `CatalogModifierList` object with the `modifier_type` set to `TEXT`. |
| `internalName` | `string \| null \| undefined` | Optional | A note for internal use by the business.<br><br>For example, for a text-based modifier applied to a T-shirt item, if the buyer-supplied text of "Hello, Kitty!"  <br>is to be printed on the T-shirt, this `internal_name` attribute can be "Use italic face" as<br>an instruction for the business to follow.<br><br>For non text-based modifiers, this `internal_name` attribute can be<br>used to include SKUs, internal codes, or supplemental descriptions for internal use.<br>**Constraints**: *Maximum Length*: `512` |

## Example (as JSON)

```json
{
  "name": "name4",
  "ordinal": 226,
  "selection_type": "SINGLE",
  "modifiers": [
    {
      "type": "TAX",
      "id": "id4",
      "updated_at": "updated_at0",
      "version": 210,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        },
        "key1": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        },
        "key2": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        },
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        },
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        }
      ]
    }
  ],
  "image_ids": [
    "image_ids9"
  ]
}
```

