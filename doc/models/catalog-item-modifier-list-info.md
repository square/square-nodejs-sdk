
# Catalog Item Modifier List Info

Options to control the properties of a `CatalogModifierList` applied to a `CatalogItem` instance.

## Structure

`CatalogItemModifierListInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modifierListId` | `string` | Required | The ID of the `CatalogModifierList` controlled by this `CatalogModifierListInfo`.<br>**Constraints**: *Minimum Length*: `1` |
| `modifierOverrides` | [`CatalogModifierOverride[] \| undefined`](../../doc/models/catalog-modifier-override.md) | Optional | A set of `CatalogModifierOverride` objects that override whether a given `CatalogModifier` is enabled by default. |
| `minSelectedModifiers` | `number \| undefined` | Optional | If 0 or larger, the smallest number of `CatalogModifier`s that must be selected from this `CatalogModifierList`. |
| `maxSelectedModifiers` | `number \| undefined` | Optional | If 0 or larger, the largest number of `CatalogModifier`s that can be selected from this `CatalogModifierList`. |
| `enabled` | `boolean \| undefined` | Optional | If `true`, enable this `CatalogModifierList`. The default value is `true`. |

## Example (as JSON)

```json
{
  "modifier_list_id": "modifier_list_id6",
  "modifier_overrides": [
    {
      "modifier_id": "modifier_id1",
      "on_by_default": true
    }
  ],
  "min_selected_modifiers": 38,
  "max_selected_modifiers": 198,
  "enabled": false
}
```

