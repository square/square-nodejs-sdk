
# Order Return

The set of line items, service charges, taxes, discounts, tips, and other items being returned in an order.

## Structure

`OrderReturn`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | A unique ID that identifies the return only within this order.<br>**Constraints**: *Maximum Length*: `60` |
| `sourceOrderId` | `string \| undefined` | Optional | An order that contains the original sale of these return line items. This is unset<br>for unlinked returns. |
| `returnLineItems` | [`OrderReturnLineItem[] \| undefined`](../../doc/models/order-return-line-item.md) | Optional | A collection of line items that are being returned. |
| `returnServiceCharges` | [`OrderReturnServiceCharge[] \| undefined`](../../doc/models/order-return-service-charge.md) | Optional | A collection of service charges that are being returned. |
| `returnTaxes` | [`OrderReturnTax[] \| undefined`](../../doc/models/order-return-tax.md) | Optional | A collection of references to taxes being returned for an order, including the total<br>applied tax amount to be returned. The taxes must reference a top-level tax ID from the source<br>order. |
| `returnDiscounts` | [`OrderReturnDiscount[] \| undefined`](../../doc/models/order-return-discount.md) | Optional | A collection of references to discounts being returned for an order, including the total<br>applied discount amount to be returned. The discounts must reference a top-level discount ID<br>from the source order. |
| `roundingAdjustment` | [`OrderRoundingAdjustment \| undefined`](../../doc/models/order-rounding-adjustment.md) | Optional | A rounding adjustment of the money being returned. Commonly used to apply cash rounding<br>when the minimum unit of the account is smaller than the lowest physical denomination of the currency. |
| `returnAmounts` | [`OrderMoneyAmounts \| undefined`](../../doc/models/order-money-amounts.md) | Optional | A collection of various money amounts. |

## Example (as JSON)

```json
{
  "uid": null,
  "source_order_id": null,
  "return_line_items": null,
  "return_taxes": null,
  "return_discounts": null,
  "rounding_adjustment": null,
  "return_amounts": null
}
```

