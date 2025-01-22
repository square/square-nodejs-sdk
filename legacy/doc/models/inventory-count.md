
# Inventory Count

Represents Square-estimated quantity of items in a particular state at a
particular seller location based on the known history of physical counts and
inventory adjustments.

## Structure

`InventoryCount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `catalogObjectId` | `string \| null \| undefined` | Optional | The Square-generated ID of the<br>[CatalogObject](entity:CatalogObject) being tracked.<br>**Constraints**: *Maximum Length*: `100` |
| `catalogObjectType` | `string \| null \| undefined` | Optional | The [type](entity:CatalogObjectType) of the [CatalogObject](entity:CatalogObject) being tracked.<br><br>The Inventory API supports setting and reading the `"catalog_object_type": "ITEM_VARIATION"` field value.<br>In addition, it can also read the `"catalog_object_type": "ITEM"` field value that is set by the Square Restaurants app.<br>**Constraints**: *Maximum Length*: `14` |
| `state` | [`string \| undefined`](../../doc/models/inventory-state.md) | Optional | Indicates the state of a tracked item quantity in the lifecycle of goods. |
| `locationId` | `string \| null \| undefined` | Optional | The Square-generated ID of the [Location](entity:Location) where the related<br>quantity of items is being tracked.<br>**Constraints**: *Maximum Length*: `100` |
| `quantity` | `string \| null \| undefined` | Optional | The number of items affected by the estimated count as a decimal string.<br>Can support up to 5 digits after the decimal point.<br>**Constraints**: *Maximum Length*: `26` |
| `calculatedAt` | `string \| undefined` | Optional | An RFC 3339-formatted timestamp that indicates when the most recent physical count or adjustment affecting<br>the estimated count is received.<br>**Constraints**: *Maximum Length*: `34` |
| `isEstimated` | `boolean \| undefined` | Optional | Whether the inventory count is for composed variation (TRUE) or not (FALSE). If true, the inventory count will not be present in the response of<br>any of these endpoints: [BatchChangeInventory](../../doc/api/inventory.md#batch-change-inventory),<br>[BatchRetrieveInventoryChanges](../../doc/api/inventory.md#batch-retrieve-inventory-changes),<br>[BatchRetrieveInventoryCounts](../../doc/api/inventory.md#batch-retrieve-inventory-counts), and<br>[RetrieveInventoryChanges](../../doc/api/inventory.md#retrieve-inventory-changes). |

## Example (as JSON)

```json
{
  "catalog_object_id": "catalog_object_id4",
  "catalog_object_type": "catalog_object_type4",
  "state": "SOLD",
  "location_id": "location_id6",
  "quantity": "quantity8"
}
```

