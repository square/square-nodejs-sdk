
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
| `name` | `string` | Optional | The name for the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. |
| `ordinal` | `number` | Optional | Determines where this modifier list appears in a list of `CatalogModifierList` values. |
| `selection_type` | [`string`](/doc/models/catalog-modifier-list-selection-type.md) | Optional | Indicates whether a CatalogModifierList supports multiple selections. |
| `modifiers` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | The options included in the `CatalogModifierList`.<br>You must include at least one `CatalogModifier`.<br>Each CatalogObject must have type `MODIFIER` and contain<br>`CatalogModifier` data. |

## Example (as JSON)

```json
{
  "type": "MODIFIER_LIST",
  "id": "#MilkType",
  "present_at_all_locations": true,
  "modifier_list_data": {
    "name": "Milk Type",
    "selection_type": "SINGLE",
    "modifiers": [
      {
        "type": "MODIFIER",
        "present_at_all_locations": true,
        "modifier_data": {
          "name": "Whole Milk",
          "price_money": {
            "amount": 0,
            "currency": "USD"
          }
        }
      },
      {
        "type": "MODIFIER",
        "present_at_all_locations": true,
        "modifier_data": {
          "name": "Almond Milk",
          "price_money": {
            "amount": 250,
            "currency": "USD"
          }
        }
      },
      {
        "type": "MODIFIER",
        "present_at_all_locations": true,
        "modifier_data": {
          "name": "Soy Milk",
          "price_money": {
            "amount": 250,
            "currency": "USD"
          }
        }
      }
    ]
  }
}
```

