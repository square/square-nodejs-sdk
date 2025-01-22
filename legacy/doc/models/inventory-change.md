
# Inventory Change

Represents a single physical count, inventory, adjustment, or transfer
that is part of the history of inventory changes for a particular
[CatalogObject](../../doc/models/catalog-object.md) instance.

## Structure

`InventoryChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`string \| undefined`](../../doc/models/inventory-change-type.md) | Optional | Indicates how the inventory change was applied to a tracked product quantity. |
| `physicalCount` | [`InventoryPhysicalCount \| undefined`](../../doc/models/inventory-physical-count.md) | Optional | Represents the quantity of an item variation that is physically present<br>at a specific location, verified by a seller or a seller's employee. For example,<br>a physical count might come from an employee counting the item variations on<br>hand or from syncing with an external system. |
| `adjustment` | [`InventoryAdjustment \| undefined`](../../doc/models/inventory-adjustment.md) | Optional | Represents a change in state or quantity of product inventory at a<br>particular time and location. |
| `transfer` | [`InventoryTransfer \| undefined`](../../doc/models/inventory-transfer.md) | Optional | Represents the transfer of a quantity of product inventory at a<br>particular time from one location to another. |
| `measurementUnit` | [`CatalogMeasurementUnit \| undefined`](../../doc/models/catalog-measurement-unit.md) | Optional | Represents the unit used to measure a `CatalogItemVariation` and<br>specifies the precision for decimal quantities. |
| `measurementUnitId` | `string \| undefined` | Optional | The ID of the [CatalogMeasurementUnit](entity:CatalogMeasurementUnit) object representing the catalog measurement unit associated with the inventory change. |

## Example (as JSON)

```json
{
  "type": "ADJUSTMENT",
  "physical_count": {
    "id": "id2",
    "reference_id": "reference_id0",
    "catalog_object_id": "catalog_object_id6",
    "catalog_object_type": "catalog_object_type6",
    "state": "SUPPORTED_BY_NEWER_VERSION"
  },
  "adjustment": {
    "id": "id4",
    "reference_id": "reference_id2",
    "from_state": "IN_TRANSIT_TO",
    "to_state": "SOLD",
    "location_id": "location_id8"
  },
  "transfer": {
    "id": "id8",
    "reference_id": "reference_id6",
    "state": "RESERVED_FOR_SALE",
    "from_location_id": "from_location_id0",
    "to_location_id": "to_location_id0"
  },
  "measurement_unit": {
    "measurement_unit": {
      "custom_unit": {
        "name": "name2",
        "abbreviation": "abbreviation4"
      },
      "area_unit": "IMPERIAL_ACRE",
      "length_unit": "IMPERIAL_INCH",
      "volume_unit": "METRIC_LITER",
      "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
    },
    "precision": 184
  }
}
```

