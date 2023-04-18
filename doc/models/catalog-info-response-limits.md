
# Catalog Info Response Limits

## Structure

`CatalogInfoResponseLimits`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchUpsertMaxObjectsPerBatch` | `number \| undefined` | Optional | The maximum number of objects that may appear within a single batch in a<br>`/v2/catalog/batch-upsert` request. |
| `batchUpsertMaxTotalObjects` | `number \| undefined` | Optional | The maximum number of objects that may appear across all batches in a<br>`/v2/catalog/batch-upsert` request. |
| `batchRetrieveMaxObjectIds` | `number \| undefined` | Optional | The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve`<br>request. |
| `searchMaxPageLimit` | `number \| undefined` | Optional | The maximum number of results that may be returned in a page of a<br>`/v2/catalog/search` response. |
| `batchDeleteMaxObjectIds` | `number \| undefined` | Optional | The maximum number of object IDs that may be included in a single<br>`/v2/catalog/batch-delete` request. |
| `updateItemTaxesMaxItemIds` | `number \| undefined` | Optional | The maximum number of item IDs that may be included in a single<br>`/v2/catalog/update-item-taxes` request. |
| `updateItemTaxesMaxTaxesToEnable` | `number \| undefined` | Optional | The maximum number of tax IDs to be enabled that may be included in a single<br>`/v2/catalog/update-item-taxes` request. |
| `updateItemTaxesMaxTaxesToDisable` | `number \| undefined` | Optional | The maximum number of tax IDs to be disabled that may be included in a single<br>`/v2/catalog/update-item-taxes` request. |
| `updateItemModifierListsMaxItemIds` | `number \| undefined` | Optional | The maximum number of item IDs that may be included in a single<br>`/v2/catalog/update-item-modifier-lists` request. |
| `updateItemModifierListsMaxModifierListsToEnable` | `number \| undefined` | Optional | The maximum number of modifier list IDs to be enabled that may be included in<br>a single `/v2/catalog/update-item-modifier-lists` request. |
| `updateItemModifierListsMaxModifierListsToDisable` | `number \| undefined` | Optional | The maximum number of modifier list IDs to be disabled that may be included in<br>a single `/v2/catalog/update-item-modifier-lists` request. |

## Example (as JSON)

```json
{
  "batch_upsert_max_objects_per_batch": 126,
  "batch_upsert_max_total_objects": 214,
  "batch_retrieve_max_object_ids": 230,
  "search_max_page_limit": 192,
  "batch_delete_max_object_ids": 216,
  "update_item_taxes_max_item_ids": 80,
  "update_item_taxes_max_taxes_to_enable": 34,
  "update_item_taxes_max_taxes_to_disable": 116,
  "update_item_modifier_lists_max_item_ids": 160,
  "update_item_modifier_lists_max_modifier_lists_to_enable": 106,
  "update_item_modifier_lists_max_modifier_lists_to_disable": 92
}
```

