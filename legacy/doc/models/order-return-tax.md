
# Order Return Tax

Represents a tax being returned that applies to one or more return line items in an order.

Fixed-amount, order-scoped taxes are distributed across all non-zero return line item totals.
The amount distributed to each return line item is relative to that item’s contribution to the
order subtotal.

## Structure

`OrderReturnTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| null \| undefined` | Optional | A unique ID that identifies the returned tax only within this order.<br>**Constraints**: *Maximum Length*: `60` |
| `sourceTaxUid` | `string \| null \| undefined` | Optional | The tax `uid` from the order that contains the original tax charge.<br>**Constraints**: *Maximum Length*: `60` |
| `catalogObjectId` | `string \| null \| undefined` | Optional | The catalog object ID referencing [CatalogTax](entity:CatalogTax).<br>**Constraints**: *Maximum Length*: `192` |
| `catalogVersion` | `bigint \| null \| undefined` | Optional | The version of the catalog object that this tax references. |
| `name` | `string \| null \| undefined` | Optional | The tax's name.<br>**Constraints**: *Maximum Length*: `255` |
| `type` | [`string \| undefined`](../../doc/models/order-line-item-tax-type.md) | Optional | Indicates how the tax is applied to the associated line item or order. |
| `percentage` | `string \| null \| undefined` | Optional | The percentage of the tax, as a string representation of a decimal number.<br>For example, a value of `"7.25"` corresponds to a percentage of 7.25%.<br>**Constraints**: *Maximum Length*: `10` |
| `appliedMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `scope` | [`string \| undefined`](../../doc/models/order-line-item-tax-scope.md) | Optional | Indicates whether this is a line-item or order-level tax. |

## Example (as JSON)

```json
{
  "uid": "uid4",
  "source_tax_uid": "source_tax_uid2",
  "catalog_object_id": "catalog_object_id8",
  "catalog_version": 124,
  "name": "name4"
}
```

