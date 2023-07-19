
# Catalog Modifier

A modifier applicable to items at the time of sale. An example of a modifier is a Cheese add-on to a Burger item.

## Structure

`CatalogModifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The modifier name.  This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `priceMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `ordinal` | `number \| undefined` | Optional | Determines where this `CatalogModifier` appears in the `CatalogModifierList`. |
| `modifierListId` | `string \| undefined` | Optional | The ID of the `CatalogModifierList` associated with this modifier. |
| `locationOverrides` | [`ModifierLocationOverrides[] \| undefined`](../../doc/models/modifier-location-overrides.md) | Optional | Location-specific price overrides. |
| `imageId` | `string \| undefined` | Optional | The ID of the image associated with this `CatalogModifier` instance.<br>Currently this image is not displayed by Square, but is free to be displayed in 3rd party applications. |

## Example (as JSON)

```json
{
  "object": {
    "modifier_data": {
      "name": "Almond Milk",
      "price_money": {
        "amount": 250,
        "currency": "USD"
      }
    },
    "present_at_all_locations": true,
    "type": "MODIFIER"
  },
  "name": "name0",
  "price_money": {
    "amount": 202,
    "currency": "CNY"
  },
  "ordinal": 80,
  "modifier_list_id": "modifier_list_id6",
  "location_overrides": [
    {
      "location_id": "location_id5",
      "price_money": {
        "amount": 155,
        "currency": "XPT"
      }
    },
    {
      "location_id": "location_id6",
      "price_money": {
        "amount": 156,
        "currency": "XTS"
      }
    },
    {
      "location_id": "location_id7",
      "price_money": {
        "amount": 157,
        "currency": "XXX"
      }
    }
  ]
}
```

