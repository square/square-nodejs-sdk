
# Catalog Item

An [CatalogObject](#type-CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog.

## Structure

`CatalogItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Optional | The item's name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points. |
| `description` | `string` | Optional | The item's description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. |
| `abbreviation` | `string` | Optional | The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.<br>This attribute is searchable, and its value length is of Unicode code points. |
| `label_color` | `string` | Optional | The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code. |
| `available_online` | `boolean` | Optional | If `true`, the item can be added to shipping orders from the merchant's online store. |
| `available_for_pickup` | `boolean` | Optional | If `true`, the item can be added to pickup orders from the merchant's online store. |
| `available_electronically` | `boolean` | Optional | If `true`, the item can be added to electronically fulfilled orders from the merchant's online store. |
| `category_id` | `string` | Optional | The ID of the item's category, if any. |
| `tax_ids` | `string[]` | Optional | A set of IDs indicating the taxes enabled for<br>this item. When updating an item, any taxes listed here will be added to the item.<br>Taxes may also be added to or deleted from an item using `UpdateItemTaxes`. |
| `modifier_list_info` | [`CatalogItemModifierListInfo[]`](/doc/models/catalog-item-modifier-list-info.md) | Optional | A set of `CatalogItemModifierListInfo` objects<br>representing the modifier lists that apply to this item, along with the overrides and min<br>and max limits that are specific to this item. Modifier lists<br>may also be added to or deleted from an item using `UpdateItemModifierLists`. |
| `variations` | [`CatalogObject[]`](/doc/models/catalog-object.md) | Optional | A list of CatalogObjects containing the `CatalogItemVariation`s for this item. |
| `product_type` | [`string`](/doc/models/catalog-item-product-type.md) | Optional | The type of a CatalogItem. Connect V2 only allows the creation of `REGULAR` or `APPOINTMENTS_SERVICE` items. |
| `skip_modifier_screen` | `boolean` | Optional | If `false`, the Square Point of Sale app will present the `CatalogItem`'s<br>details screen immediately, allowing the merchant to choose `CatalogModifier`s<br>before adding the item to the cart.  This is the default behavior.<br><br>If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected<br>modifiers, and merchants can edit modifiers by drilling down onto the item's details.<br><br>Third-party clients are encouraged to implement similar behaviors. |
| `item_options` | [`CatalogItemOptionForItem[]`](/doc/models/catalog-item-option-for-item.md) | Optional | List of item options IDs for this item. Used to manage and group item<br>variations in a specified order.<br><br>Maximum: 6 item options. |

## Example (as JSON)

```json
{
  "object": {
    "type": "ITEM",
    "id": "#Cocoa",
    "present_at_all_locations": true,
    "item_data": {
      "name": "Cocoa",
      "description": "Hot chocolate",
      "abbreviation": "Ch",
      "visibility": "PRIVATE"
    }
  }
}
```

