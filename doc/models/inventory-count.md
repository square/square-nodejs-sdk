
# Inventory Count

Represents Square's estimated quantity of items in a particular state at a
particular location based on the known history of physical counts and
inventory adjustments.

## Structure

`InventoryCount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `catalog_object_id` | `string` | Optional | The Square generated ID of the<br>`CatalogObject` being tracked. |
| `catalog_object_type` | `string` | Optional | The `CatalogObjectType` of the<br>`CatalogObject` being tracked. Tracking is only<br>supported for the `ITEM_VARIATION` type. |
| `state` | [`string`](/doc/models/inventory-state.md) | Optional | Indicates the state of a tracked item quantity in the lifecycle of goods. |
| `location_id` | `string` | Optional | The Square ID of the [Location](#type-location) where the related<br>quantity of items are being tracked. |
| `quantity` | `string` | Optional | The number of items affected by the estimated count as a decimal string.<br>Can support up to 5 digits after the decimal point. |
| `calculated_at` | `string` | Optional | A read-only timestamp in RFC 3339 format that indicates when Square<br>received the most recent physical count or adjustment that had an affect<br>on the estimated count. |

## Example (as JSON)

```json
{
  "catalog_object_id": "catalog_object_id6",
  "catalog_object_type": "catalog_object_type6",
  "state": "IN_TRANSIT_TO",
  "location_id": "location_id4",
  "quantity": "quantity6"
}
```

