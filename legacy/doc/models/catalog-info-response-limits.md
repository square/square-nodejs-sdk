
# Catalog Info Response Limits

## Structure

`CatalogInfoResponseLimits`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchUpsertMaxObjectsPerBatch` | `number \| null \| undefined` | Optional | The maximum number of objects that may appear within a single batch in a<br>`/v2/catalog/batch-upsert` request. |
| `batchUpsertMaxTotalObjects` | `number \| null \| undefined` | Optional | The maximum number of objects that may appear across all batches in a<br>`/v2/catalog/batch-upsert` request. |
| `batchRetrieveMaxObjectIds` | `number \| null \| undefined` | Optional | The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve`<br>request. |
| `searchMaxPageLimit` | `number \| null \| undefined` | Optional | The maximum number of results that may be returned in a page of a<br>`/v2/catalog/search` response. |
| `batchDeleteMaxObjectIds` | `number \| null \| undefined` | Optional | The maximum number of object IDs that may be included in a single<br>`/v2/catalog/batch-delete` request. |
| `updateItemTaxesMaxItemIds` | `number \| null \| undefined` | Optional | The maximum number of item IDs that may be included in a single<br>`/v2/catalog/update-item-taxes` request. |
| `updateItemTaxesMaxTaxesToEnable` | `number \| null \| undefined` | Optional | The maximum number of tax IDs to be enabled that may be included in a single<br>`/v2/catalog/update-item-taxes` request. |
| `updateItemTaxesMaxTaxesToDisable` | `number \| null \| undefined` | Optional | The maximum number of tax IDs to be disabled that may be included in a single<br>`/v2/catalog/update-item-taxes` request. |
| `updateItemModifierListsMaxItemIds` | `number \| null \| undefined` | Optional | The maximum number of item IDs that may be included in a single<br>`/v2/catalog/update-item-modifier-lists` request. |
| `updateItemModifierListsMaxModifierListsToEnable` | `number \| null \| undefined` | Optional | The maximum number of modifier list IDs to be enabled that may be included in<br>a single `/v2/catalog/update-item-modifier-lists` request. |
| `updateItemModifierListsMaxModifierListsToDisable` | `number \| null \| undefined` | Optional | The maximum number of modifier list IDs to be disabled that may be included in<br>a single `/v2/catalog/update-item-modifier-lists` request. |

## Example (as JSON)

```json
{
  "batch_upsert_max_objects_per_batch": 206,
  "batch_upsert_max_total_objects": 122,
  "batch_retrieve_max_object_ids": 54,
  "search_max_page_limit": 144,
  "batch_delete_max_object_ids": 40
}
```

