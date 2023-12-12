
# Catalog Item Variation

An item variation, representing a product for sale, in the Catalog object model. Each [item](../../doc/models/catalog-item.md) must have at least one
item variation and can have at most 250 item variations.

An item variation can be sellable, stockable, or both if it has a unit of measure for its count for the sold number of the variation, the stocked
number of the variation, or both. For example, when a variation representing wine is stocked and sold by the bottle, the variation is both
stockable and sellable. But when a variation of the wine is sold by the glass, the sold units cannot be used as a measure of the stocked units. This by-the-glass
variation is sellable, but not stockable. To accurately keep track of the wine's inventory count at any time, the sellable count must be
converted to stockable count. Typically, the seller defines this unit conversion. For example, 1 bottle equals 5 glasses. The Square API exposes
the `stockable_conversion` property on the variation to specify the conversion. Thus, when two glasses of the wine are sold, the sellable count
decreases by 2, and the stockable count automatically decreases by 0.4 bottle according to the conversion.

## Structure

`CatalogItemVariation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string \| null \| undefined` | Optional | The ID of the `CatalogItem` associated with this item variation. |
| `name` | `string \| null \| undefined` | Optional | The item variation's name. This is a searchable attribute for use in applicable query filters.<br><br>Its value has a maximum length of 255 Unicode code points. However, when the parent [item](entity:CatalogItem)<br>uses [item options](entity:CatalogItemOption), this attribute is auto-generated, read-only, and can be<br>longer than 255 Unicode code points. |
| `sku` | `string \| null \| undefined` | Optional | The item variation's SKU, if any. This is a searchable attribute for use in applicable query filters. |
| `upc` | `string \| null \| undefined` | Optional | The universal product code (UPC) of the item variation, if any. This is a searchable attribute for use in applicable query filters.<br><br>The value of this attribute should be a number of 12-14 digits long.  This restriction is enforced on the Square Seller Dashboard,<br>Square Point of Sale or Retail Point of Sale apps, where this attribute shows in the GTIN field. If a non-compliant UPC value is assigned<br>to this attribute using the API, the value is not editable on the Seller Dashboard, Square Point of Sale or Retail Point of Sale apps<br>unless it is updated to fit the expected format. |
| `ordinal` | `number \| undefined` | Optional | The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal<br>for each item variation within a parent `CatalogItem` is set according to the item variations's<br>position. On reads, the value is not guaranteed to be sequential or unique. |
| `pricingType` | [`string \| undefined`](../../doc/models/catalog-pricing-type.md) | Optional | Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale. |
| `priceMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `locationOverrides` | [`ItemVariationLocationOverrides[] \| null \| undefined`](../../doc/models/item-variation-location-overrides.md) | Optional | Per-location price and inventory overrides. |
| `trackInventory` | `boolean \| null \| undefined` | Optional | If `true`, inventory tracking is active for the variation. |
| `inventoryAlertType` | [`string \| undefined`](../../doc/models/inventory-alert-type.md) | Optional | Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low. |
| `inventoryAlertThreshold` | `bigint \| null \| undefined` | Optional | If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`<br>is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.<br><br>This value is always an integer. |
| `userData` | `string \| null \| undefined` | Optional | Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `serviceDuration` | `bigint \| null \| undefined` | Optional | If the `CatalogItem` that owns this item variation is of type<br>`APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For<br>example, a 30 minute appointment would have the value `1800000`, which is equal to<br>30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second). |
| `availableForBooking` | `boolean \| null \| undefined` | Optional | If the `CatalogItem` that owns this item variation is of type<br>`APPOINTMENTS_SERVICE`, a bool representing whether this service is available for booking. |
| `itemOptionValues` | [`CatalogItemOptionValueForItemVariation[] \| null \| undefined`](../../doc/models/catalog-item-option-value-for-item-variation.md) | Optional | List of item option values associated with this item variation. Listed<br>in the same order as the item options of the parent item. |
| `measurementUnitId` | `string \| null \| undefined` | Optional | ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity<br>sold of this item variation. If left unset, the item will be sold in<br>whole quantities. |
| `sellable` | `boolean \| null \| undefined` | Optional | Whether this variation can be sold. The inventory count of a sellable variation indicates<br>the number of units available for sale. When a variation is both stockable and sellable,<br>its sellable inventory count can be smaller than or equal to its stockable count. |
| `stockable` | `boolean \| null \| undefined` | Optional | Whether stock is counted directly on this variation (TRUE) or only on its components (FALSE).<br>When a variation is both stockable and sellable, the inventory count of a stockable variation keeps track of the number of units of this variation in stock<br>and is not an indicator of the number of units of the variation that can be sold. |
| `imageIds` | `string[] \| null \| undefined` | Optional | The IDs of images associated with this `CatalogItemVariation` instance.<br>These images will be shown to customers in Square Online Store. |
| `teamMemberIds` | `string[] \| null \| undefined` | Optional | Tokens of employees that can perform the service represented by this variation. Only valid for<br>variations of type `APPOINTMENTS_SERVICE`. |
| `stockableConversion` | [`CatalogStockConversion \| undefined`](../../doc/models/catalog-stock-conversion.md) | Optional | Represents the rule of conversion between a stockable [CatalogItemVariation](../../doc/models/catalog-item-variation.md)<br>and a non-stockable sell-by or receive-by `CatalogItemVariation` that<br>share the same underlying stock. |

## Example (as JSON)

```json
{
  "item_id": "item_id4",
  "name": "name4",
  "sku": "sku0",
  "upc": "upc2",
  "ordinal": 76
}
```

