
# Order Return Discount

Represents a discount being returned that applies to one or more return line items in an
order.

Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals.
The amount distributed to each return line item is relative to that item’s contribution to the
order subtotal.

## Structure

`OrderReturnDiscount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Optional | Unique ID that identifies the return discount only within this order.<br>**Constraints**: *Maximum Length*: `60` |
| `sourceDiscountUid` | `string` | Optional | `uid` of the Discount from the Order which contains the original application of this discount.<br>**Constraints**: *Maximum Length*: `60` |
| `catalogObjectId` | `string` | Optional | The catalog object id referencing [CatalogDiscount](/doc/models/catalog-discount.md).<br>**Constraints**: *Maximum Length*: `192` |
| `name` | `string` | Optional | The discount's name.<br>**Constraints**: *Maximum Length*: `255` |
| `type` | [`string`](/doc/models/order-line-item-discount-type.md) | Optional | Indicates how the discount is applied to the associated line item or order. |
| `percentage` | `string` | Optional | The percentage of the tax, as a string representation of a decimal number.<br>A value of `7.25` corresponds to a percentage of 7.25%.<br><br>`percentage` is not set for amount-based discounts.<br>**Constraints**: *Maximum Length*: `10` |
| `amountMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `appliedMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `scope` | [`string`](/doc/models/order-line-item-discount-scope.md) | Optional | Indicates whether this is a line item or order level discount. |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "source_discount_uid": "source_discount_uid0",
  "catalog_object_id": "catalog_object_id6",
  "name": "name0",
  "type": "UNKNOWN_DISCOUNT"
}
```

