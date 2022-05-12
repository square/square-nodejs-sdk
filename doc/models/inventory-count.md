
# Inventory Count

Represents Square-estimated quantity of items in a particular state at a
particular seller location based on the known history of physical counts and
inventory adjustments.

## Structure

`InventoryCount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `catalogObjectId` | `string \| undefined` | Optional | The Square-generated ID of the<br>[CatalogObject](../../doc/models/catalog-object.md) being tracked.<br>**Constraints**: *Maximum Length*: `100` |
| `catalogObjectType` | `string \| undefined` | Optional | The [type](../../doc/models/catalog-object-type.md) of the [CatalogObject](../../doc/models/catalog-object.md) being tracked.<br><br>The Inventory API supports setting and reading the `"catalog_object_type": "ITEM_VARIATION"` field value.<br>In addition, it can also read the `"catalog_object_type": "ITEM"` field value that is set by the Square Restaurants app.<br>**Constraints**: *Maximum Length*: `14` |
| `state` | [`string \| undefined`](../../doc/models/inventory-state.md) | Optional | Indicates the state of a tracked item quantity in the lifecycle of goods. |
| `locationId` | `string \| undefined` | Optional | The Square-generated ID of the [Location](../../doc/models/location.md) where the related<br>quantity of items is being tracked.<br>**Constraints**: *Maximum Length*: `100` |
| `quantity` | `string \| undefined` | Optional | The number of items affected by the estimated count as a decimal string.<br>Can support up to 5 digits after the decimal point.<br>**Constraints**: *Maximum Length*: `26` |
| `calculatedAt` | `string \| undefined` | Optional | An RFC 3339-formatted timestamp that indicates when the most recent physical count or adjustment affecting<br>the estimated count is received.<br>**Constraints**: *Maximum Length*: `34` |
| `isEstimated` | `boolean \| undefined` | Optional | Whether the inventory count is for composed variation (TRUE) or not (FALSE). If true, the inventory count will not be present in the response of<br>any of these endpoints: [BatchChangeInventory](../../doc/api/inventory.md#batch-change-inventory),<br>[BatchRetrieveInventoryChanges](../../doc/api/inventory.md#batch-retrieve-inventory-changes),<br>[BatchRetrieveInventoryCounts](../../doc/api/inventory.md#batch-retrieve-inventory-counts), and<br>[RetrieveInventoryChanges](../../doc/api/inventory.md#retrieve-inventory-changes). |

## Example (as JSON)

```json
{
  "catalog_object_id": null,
  "catalog_object_type": null,
  "state": null,
  "location_id": null,
  "quantity": null,
  "calculated_at": null,
  "is_estimated": null
}
```

