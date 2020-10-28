
# Update Item Modifier Lists Request

## Structure

`UpdateItemModifierListsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `item_ids` | `string[]` |  | The IDs of the catalog items associated with the CatalogModifierList objects being updated. |
| `modifier_lists_to_enable` | `string[]` | Optional | The IDs of the CatalogModifierList objects to enable for the CatalogItem. |
| `modifier_lists_to_disable` | `string[]` | Optional | The IDs of the CatalogModifierList objects to disable for the CatalogItem. |

## Example (as JSON)

```json
{
  "item_ids": [
    "H42BRLUJ5KTZTTMPVSLFAACQ",
    "2JXOBJIHCWBQ4NZ3RIXQGJA6"
  ],
  "modifier_lists_to_enable": [
    "H42BRLUJ5KTZTTMPVSLFAACQ",
    "2JXOBJIHCWBQ4NZ3RIXQGJA6"
  ],
  "modifier_lists_to_disable": [
    "7WRC16CJZDVLSNDQ35PP6YAD"
  ]
}
```

