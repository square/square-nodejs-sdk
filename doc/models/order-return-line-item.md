
# Order Return Line Item

The line item being returned in an order.

## Structure

`OrderReturnLineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | A unique ID for this return line-item entry.<br>**Constraints**: *Maximum Length*: `60` |
| `sourceLineItemUid` | `string \| undefined` | Optional | The `uid` of the line item in the original sale order.<br>**Constraints**: *Maximum Length*: `60` |
| `name` | `string \| undefined` | Optional | The name of the line item.<br>**Constraints**: *Maximum Length*: `512` |
| `quantity` | `string` | Required | The quantity returned, formatted as a decimal number.<br>For example, `"3"`.<br><br>Line items with a `quantity_unit` can have non-integer quantities.<br>For example, `"1.70000"`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `12` |
| `quantityUnit` | [`OrderQuantityUnit \| undefined`](/doc/models/order-quantity-unit.md) | Optional | Contains the measurement unit for a quantity and a precision that<br>specifies the number of digits after the decimal point for decimal quantities. |
| `note` | `string \| undefined` | Optional | The note of the return line item.<br>**Constraints**: *Maximum Length*: `2000` |
| `catalogObjectId` | `string \| undefined` | Optional | The [CatalogItemVariation](/doc/models/catalog-item-variation.md) ID applied to this return line item.<br>**Constraints**: *Maximum Length*: `192` |
| `variationName` | `string \| undefined` | Optional | The name of the variation applied to this return line item.<br>**Constraints**: *Maximum Length*: `255` |
| `itemType` | [`string \| undefined`](/doc/models/order-line-item-item-type.md) | Optional | Represents the line item type. |
| `returnModifiers` | [`OrderReturnLineItemModifier[] \| undefined`](/doc/models/order-return-line-item-modifier.md) | Optional | The [CatalogModifier](/doc/models/catalog-modifier.md)s applied to this line item. |
| `appliedTaxes` | [`OrderLineItemAppliedTax[] \| undefined`](/doc/models/order-line-item-applied-tax.md) | Optional | The list of references to `OrderReturnTax` entities applied to the return line item. Each<br>`OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level<br>`OrderReturnTax` applied to the return line item. On reads, the applied amount<br>is populated. |
| `appliedDiscounts` | [`OrderLineItemAppliedDiscount[] \| undefined`](/doc/models/order-line-item-applied-discount.md) | Optional | The list of references to `OrderReturnDiscount` entities applied to the return line item. Each<br>`OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level<br>`OrderReturnDiscount` applied to the return line item. On reads, the applied amount<br>is populated. |
| `basePriceMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `variationTotalPriceMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `grossReturnMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalTaxMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalDiscountMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "source_line_item_uid": "source_line_item_uid2",
  "name": "name0",
  "quantity": "quantity6",
  "quantity_unit": {
    "measurement_unit": {
      "custom_unit": {
        "name": "name8",
        "abbreviation": "abbreviation0"
      },
      "area_unit": "IMPERIAL_SQUARE_FOOT",
      "length_unit": "METRIC_METER",
      "volume_unit": "GENERIC_CUP",
      "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
    },
    "precision": 54
  },
  "note": "note4"
}
```

