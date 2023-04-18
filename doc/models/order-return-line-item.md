
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
| `quantityUnit` | [`OrderQuantityUnit \| undefined`](../../doc/models/order-quantity-unit.md) | Optional | Contains the measurement unit for a quantity and a precision that<br>specifies the number of digits after the decimal point for decimal quantities. |
| `note` | `string \| undefined` | Optional | The note of the return line item.<br>**Constraints**: *Maximum Length*: `2000` |
| `catalogObjectId` | `string \| undefined` | Optional | The [CatalogItemVariation](entity:CatalogItemVariation) ID applied to this return line item.<br>**Constraints**: *Maximum Length*: `192` |
| `catalogVersion` | `bigint \| undefined` | Optional | The version of the catalog object that this line item references. |
| `variationName` | `string \| undefined` | Optional | The name of the variation applied to this return line item.<br>**Constraints**: *Maximum Length*: `400` |
| `itemType` | [`string \| undefined`](../../doc/models/order-line-item-item-type.md) | Optional | Represents the line item type. |
| `returnModifiers` | [`OrderReturnLineItemModifier[] \| undefined`](../../doc/models/order-return-line-item-modifier.md) | Optional | The [CatalogModifier](entity:CatalogModifier)s applied to this line item. |
| `appliedTaxes` | [`OrderLineItemAppliedTax[] \| undefined`](../../doc/models/order-line-item-applied-tax.md) | Optional | The list of references to `OrderReturnTax` entities applied to the return line item. Each<br>`OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level<br>`OrderReturnTax` applied to the return line item. On reads, the applied amount<br>is populated. |
| `appliedDiscounts` | [`OrderLineItemAppliedDiscount[] \| undefined`](../../doc/models/order-line-item-applied-discount.md) | Optional | The list of references to `OrderReturnDiscount` entities applied to the return line item. Each<br>`OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level<br>`OrderReturnDiscount` applied to the return line item. On reads, the applied amount<br>is populated. |
| `basePriceMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `variationTotalPriceMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `grossReturnMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalTaxMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalDiscountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `appliedServiceCharges` | [`OrderLineItemAppliedServiceCharge[] \| undefined`](../../doc/models/order-line-item-applied-service-charge.md) | Optional | The list of references to `OrderReturnServiceCharge` entities applied to the return<br>line item. Each `OrderLineItemAppliedServiceCharge` has a `service_charge_uid` that<br>references the `uid` of a top-level `OrderReturnServiceCharge` applied to the return line<br>item. On reads, the applied amount is populated. |
| `totalServiceChargeMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

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
      "weight_unit": "IMPERIAL_WEIGHT_OUNCE",
      "generic_unit": "UNIT",
      "time_unit": "GENERIC_SECOND",
      "type": "TYPE_CUSTOM"
    },
    "precision": 54,
    "catalog_object_id": "catalog_object_id0",
    "catalog_version": 12
  },
  "note": "note4",
  "catalog_object_id": "catalog_object_id6",
  "catalog_version": 126,
  "variation_name": "variation_name0",
  "item_type": "ITEM",
  "return_modifiers": [
    {
      "uid": "uid1",
      "source_modifier_uid": "source_modifier_uid5",
      "catalog_object_id": "catalog_object_id5",
      "catalog_version": 73,
      "name": "name1",
      "base_price_money": {
        "amount": 167,
        "currency": "MWK"
      },
      "total_price_money": {
        "amount": 91,
        "currency": "ZAR"
      },
      "quantity": "quantity7"
    }
  ],
  "applied_taxes": [
    {
      "uid": "uid0",
      "tax_uid": "tax_uid4",
      "applied_money": {
        "amount": 190,
        "currency": "XAF"
      }
    },
    {
      "uid": "uid1",
      "tax_uid": "tax_uid3",
      "applied_money": {
        "amount": 189,
        "currency": "WST"
      }
    }
  ],
  "applied_discounts": [
    {
      "uid": "uid4",
      "discount_uid": "discount_uid0",
      "applied_money": {
        "amount": 42,
        "currency": "BHD"
      }
    },
    {
      "uid": "uid5",
      "discount_uid": "discount_uid9",
      "applied_money": {
        "amount": 41,
        "currency": "BGN"
      }
    },
    {
      "uid": "uid6",
      "discount_uid": "discount_uid8",
      "applied_money": {
        "amount": 40,
        "currency": "BDT"
      }
    }
  ],
  "base_price_money": {
    "amount": 114,
    "currency": "ALL"
  },
  "variation_total_price_money": {
    "amount": 98,
    "currency": "SGD"
  },
  "gross_return_money": {
    "amount": 218,
    "currency": "KYD"
  },
  "total_tax_money": {
    "amount": 58,
    "currency": "SDG"
  },
  "total_discount_money": {
    "amount": 132,
    "currency": "TRY"
  },
  "total_money": {
    "amount": 250,
    "currency": "UNKNOWN_CURRENCY"
  },
  "applied_service_charges": [
    {
      "uid": "uid1",
      "service_charge_uid": "service_charge_uid1",
      "applied_money": {
        "amount": 141,
        "currency": "KPW"
      }
    },
    {
      "uid": "uid2",
      "service_charge_uid": "service_charge_uid2",
      "applied_money": {
        "amount": 140,
        "currency": "KMF"
      }
    },
    {
      "uid": "uid3",
      "service_charge_uid": "service_charge_uid3",
      "applied_money": {
        "amount": 139,
        "currency": "KHR"
      }
    }
  ],
  "total_service_charge_money": {
    "amount": 62,
    "currency": "NZD"
  }
}
```

