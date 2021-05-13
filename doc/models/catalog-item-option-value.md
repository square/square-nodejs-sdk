
# Catalog Item Option Value

An enumerated value that can link a
`CatalogItemVariation` to an item option as one of
its item option values.

## Structure

`CatalogItemOptionValue`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemOptionId` | `string \| undefined` | Optional | Unique ID of the associated item option. |
| `name` | `string \| undefined` | Optional | Name of this item option value. This is a searchable attribute for use in applicable query filters. |
| `description` | `string \| undefined` | Optional | A human-readable description for the option value. This is a searchable attribute for use in applicable query filters. |
| `color` | `string \| undefined` | Optional | The HTML-supported hex color for the item option (e.g., "#ff8d4e85").<br>Only displayed if `show_colors` is enabled on the parent `ItemOption`. When<br>left unset, `color` defaults to white ("#ffffff") when `show_colors` is<br>enabled on the parent `ItemOption`. |
| `ordinal` | `number \| undefined` | Optional | Determines where this option value appears in a list of option values. |

## Example (as JSON)

```json
{
  "item_option_id": "item_option_id2",
  "name": "name0",
  "description": "description0",
  "color": "color6",
  "ordinal": 80
}
```

