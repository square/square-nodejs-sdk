
# V1 Variation

V1Variation

## Structure

`V1Variation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The item variation's unique ID. |
| `name` | `string` | Optional | The item variation's name. |
| `item_id` | `string` | Optional | The ID of the variation's associated item. |
| `ordinal` | `number` | Optional | Indicates the variation's list position when displayed in Square Point of Sale and the merchant dashboard. If more than one variation for the same item has the same ordinal value, those variations are displayed in alphabetical order |
| `pricing_type` | [`string`](/doc/models/v1-variation-pricing-type.md) | Optional | - |
| `price_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `sku` | `string` | Optional | The item variation's SKU, if any. |
| `track_inventory` | `boolean` | Optional | If true, inventory tracking is active for the variation. |
| `inventory_alert_type` | [`string`](/doc/models/v1-variation-inventory-alert-type.md) | Optional | - |
| `inventory_alert_threshold` | `number` | Optional | If the inventory quantity for the variation is less than or equal to this value and inventory_alert_type is LOW_QUANTITY, the variation displays an alert in the merchant dashboard. |
| `user_data` | `string` | Optional | Arbitrary metadata associated with the variation. Cannot exceed 255 characters. |
| `v2_id` | `string` | Optional | The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "item_id": "item_id0",
  "ordinal": 80,
  "pricing_type": "FIXED_PRICING"
}
```

