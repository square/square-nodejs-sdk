
# Modifier Location Overrides

Location-specific overrides for specified properties of a `CatalogModifier` object.

## Structure

`ModifierLocationOverrides`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| null \| undefined` | Optional | The ID of the `Location` object representing the location. This can include a deactivated location. |
| `priceMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `soldOut` | `boolean \| undefined` | Optional | Indicates whether the modifier is sold out at the specified location or not. As an example, for cheese (modifier) burger (item), when the modifier is sold out, it is the cheese, but not the burger, that is sold out.<br>The seller can manually set this sold out status. Attempts by an application to set this attribute are ignored. |

## Example (as JSON)

```json
{
  "location_id": "location_id2",
  "price_money": {
    "amount": 202,
    "currency": "GTQ"
  },
  "sold_out": false
}
```

