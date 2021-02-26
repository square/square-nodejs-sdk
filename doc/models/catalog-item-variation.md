
# Catalog Item Variation

An item variation (i.e., product) in the Catalog object model. Each item
may have a maximum of 250 item variations.

## Structure

`CatalogItemVariation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Optional | The ID of the `CatalogItem` associated with this item variation. |
| `name` | `string` | Optional | The item variation's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `sku` | `string` | Optional | The item variation's SKU, if any. This is a searchable attribute for use in applicable query filters. |
| `upc` | `string` | Optional | The universal product code (UPC) of the item variation, if any. This is a searchable attribute for use in applicable query filters.<br><br>The value of this attribute should be a number of 12-14 digits long.  This restriction is enforced on the Square Seller Dashboard,<br>Square Point of Sale or Retail Point of Sale apps, where this attribute shows in the GTIN field. If a non-compliant UPC value is assigned<br>to this attribute using the API, the value is not editable on the Seller Dashboard, Square Point of Sale or Retail Point of Sale apps<br>unless it is updated to fit the expected format. |
| `ordinal` | `number` | Optional | The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal<br>for each item variation within a parent `CatalogItem` is set according to the item variations's<br>position. On reads, the value is not guaranteed to be sequential or unique. |
| `pricingType` | [`string`](/doc/models/catalog-pricing-type.md) | Optional | Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale. |
| `priceMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `locationOverrides` | [`ItemVariationLocationOverrides[]`](/doc/models/item-variation-location-overrides.md) | Optional | Per-location price and inventory overrides. |
| `trackInventory` | `boolean` | Optional | If `true`, inventory tracking is active for the variation. |
| `inventoryAlertType` | [`string`](/doc/models/inventory-alert-type.md) | Optional | Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low. |
| `inventoryAlertThreshold` | `bigint` | Optional | If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`<br>is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.<br><br>This value is always an integer. |
| `userData` | `string` | Optional | Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `serviceDuration` | `bigint` | Optional | If the `CatalogItem` that owns this item variation is of type<br>`APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For<br>example, a 30 minute appointment would have the value `1800000`, which is equal to<br>30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second). |
| `availableForBooking` | `boolean` | Optional | If the `CatalogItem` that owns this item variation is of type<br>`APPOINTMENTS_SERVICE`, a bool representing whether this service is available for booking. |
| `itemOptionValues` | [`CatalogItemOptionValueForItemVariation[]`](/doc/models/catalog-item-option-value-for-item-variation.md) | Optional | List of item option values associated with this item variation. Listed<br>in the same order as the item options of the parent item. |
| `measurementUnitId` | `string` | Optional | ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity<br>sold of this item variation. If left unset, the item will be sold in<br>whole quantities. |
| `teamMemberIds` | `string[]` | Optional | Tokens of employees that can perform the service represented by this variation. Only valid for<br>variations of type `APPOINTMENTS_SERVICE`. |

## Example (as JSON)

```json
{
  "item_id": "item_id0",
  "name": "name0",
  "sku": "sku4",
  "upc": "upc2",
  "ordinal": 80
}
```

