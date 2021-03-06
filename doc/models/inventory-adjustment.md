
# Inventory Adjustment

Represents a change in state or quantity of product inventory at a
particular time and location.

## Structure

`InventoryAdjustment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | A unique ID generated by Square for the<br>`InventoryAdjustment`.<br>**Constraints**: *Maximum Length*: `100` |
| `referenceId` | `string` | Optional | An optional ID provided by the application to tie the<br>`InventoryAdjustment` to an external<br>system.<br>**Constraints**: *Maximum Length*: `255` |
| `fromState` | [`string`](/doc/models/inventory-state.md) | Optional | Indicates the state of a tracked item quantity in the lifecycle of goods. |
| `toState` | [`string`](/doc/models/inventory-state.md) | Optional | Indicates the state of a tracked item quantity in the lifecycle of goods. |
| `locationId` | `string` | Optional | The Square ID of the [Location](#type-location) where the related<br>quantity of items are being tracked.<br>**Constraints**: *Maximum Length*: `100` |
| `catalogObjectId` | `string` | Optional | The Square generated ID of the<br>`CatalogObject` being tracked.<br>**Constraints**: *Maximum Length*: `100` |
| `catalogObjectType` | `string` | Optional | The `CatalogObjectType` of the<br>`CatalogObject` being tracked. Tracking is only<br>supported for the `ITEM_VARIATION` type.<br>**Constraints**: *Maximum Length*: `14` |
| `quantity` | `string` | Optional | The number of items affected by the adjustment as a decimal string.<br>Can support up to 5 digits after the decimal point.<br>**Constraints**: *Maximum Length*: `26` |
| `totalPriceMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `occurredAt` | `string` | Optional | A client-generated timestamp in RFC 3339 format that indicates when<br>the adjustment took place. For write actions, the `occurred_at`<br>timestamp cannot be older than 24 hours or in the future relative to the<br>time of the request.<br>**Constraints**: *Maximum Length*: `34` |
| `createdAt` | `string` | Optional | A read-only timestamp in RFC 3339 format that indicates when Square<br>received the adjustment.<br>**Constraints**: *Maximum Length*: `34` |
| `source` | [`SourceApplication`](/doc/models/source-application.md) | Optional | Provides information about the application used to generate a change. |
| `employeeId` | `string` | Optional | The Square ID of the [Employee](#type-employee) responsible for the<br>inventory adjustment.<br>**Constraints**: *Maximum Length*: `100` |
| `transactionId` | `string` | Optional | The read-only Square ID of the [Transaction][#type-transaction] that<br>caused the adjustment. Only relevant for payment-related state<br>transitions.<br>**Constraints**: *Maximum Length*: `255` |
| `refundId` | `string` | Optional | The read-only Square ID of the [Refund][#type-refund] that<br>caused the adjustment. Only relevant for refund-related state<br>transitions.<br>**Constraints**: *Maximum Length*: `255` |
| `purchaseOrderId` | `string` | Optional | The read-only Square ID of the purchase order that caused the<br>adjustment. Only relevant for state transitions from the Square for Retail<br>app.<br>**Constraints**: *Maximum Length*: `100` |
| `goodsReceiptId` | `string` | Optional | The read-only Square ID of the Square goods receipt that caused the<br>adjustment. Only relevant for state transitions from the Square for Retail<br>app.<br>**Constraints**: *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "id": "id0",
  "reference_id": "reference_id2",
  "from_state": "IN_TRANSIT_TO",
  "to_state": "SOLD",
  "location_id": "location_id4"
}
```

