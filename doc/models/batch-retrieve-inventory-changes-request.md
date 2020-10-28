
# Batch Retrieve Inventory Changes Request

## Structure

`BatchRetrieveInventoryChangesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `catalog_object_ids` | `string[]` | Optional | Filters results by `CatalogObject` ID.<br>Only applied when set. Max size is 500 IDs. Default: unset. |
| `location_ids` | `string[]` | Optional | Filters results by `Location` ID. Only<br>applied when set. Default: unset. |
| `types` | [`string[]`](/doc/models/inventory-change-type.md) | Optional | Filters results by `InventoryChangeType`.<br>Default: [`PHYSICAL_COUNT`, `ADJUSTMENT`]. `TRANSFER` is not supported as<br>a filter.<br>See [InventoryChangeType](#type-inventorychangetype) for possible values |
| `states` | [`string[]`](/doc/models/inventory-state.md) | Optional | Filters `ADJUSTMENT` query results by<br>`InventoryState`. Only applied when set.<br>Default: unset.<br>See [InventoryState](#type-inventorystate) for possible values |
| `updated_after` | `string` | Optional | Provided as an RFC 3339 timestamp. Returns results whose<br>`created_at` or `calculated_at` value is after the given time.<br>Default: UNIX epoch (`1970-01-01T00:00:00Z`). |
| `updated_before` | `string` | Optional | Provided as an RFC 3339 timestamp. Returns results whose<br>`created_at` or `calculated_at` value is strictly before the given time.<br>Default: UNIX epoch (`1970-01-01T00:00:00Z`). |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |

## Example (as JSON)

```json
{
  "catalog_object_ids": [
    "W62UWFY35CWMYGVWK6TWJDNI"
  ],
  "location_ids": [
    "C6W5YS5QM06F5"
  ],
  "types": [
    "PHYSICAL_COUNT"
  ],
  "states": [
    "IN_STOCK"
  ],
  "updated_after": "2016-11-01T00:00:00.000Z",
  "updated_before": "2016-12-01T00:00:00.000Z"
}
```

