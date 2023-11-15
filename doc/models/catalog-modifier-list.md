
# Catalog Modifier List

A list of modifiers applicable to items at the time of sale.

For example, a "Condiments" modifier list applicable to a "Hot Dog" item
may contain "Ketchup", "Mustard", and "Relish" modifiers.
Use the `selection_type` field to specify whether or not multiple selections from
the modifier list are allowed.

## Structure

`CatalogModifierList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | The name for the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `ordinal` | `number \| null \| undefined` | Optional | Determines where this modifier list appears in a list of `CatalogModifierList` values. |
| `selectionType` | [`string \| undefined`](../../doc/models/catalog-modifier-list-selection-type.md) | Optional | Indicates whether a CatalogModifierList supports multiple selections. |
| `modifiers` | [`CatalogObject[] \| null \| undefined`](../../doc/models/catalog-object.md) | Optional | The options included in the `CatalogModifierList`.<br>You must include at least one `CatalogModifier`.<br>Each CatalogObject must have type `MODIFIER` and contain<br>`CatalogModifier` data. |
| `imageIds` | `string[] \| null \| undefined` | Optional | The IDs of images associated with this `CatalogModifierList` instance.<br>Currently these images are not displayed by Square, but are free to be displayed in 3rd party applications. |

## Example (as JSON)

```json
{
  "name": "name4",
  "ordinal": 226,
  "selection_type": "SINGLE",
  "modifiers": [
    {
      "type": "QUICK_AMOUNTS_SETTINGS",
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

