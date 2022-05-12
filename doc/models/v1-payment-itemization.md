
# V1 Payment Itemization

Payment include an`itemizations` field that lists the items purchased,
along with associated fees, modifiers, and discounts. Each itemization has an
`itemization_type` field that indicates which of the following the itemization
represents:

<ul>
<li>An item variation from the merchant's item library</li>
<li>A custom monetary amount</li>
<li>
An action performed on a Square gift card, such as activating or
reloading it.
</li>
</ul>
*Note**: itemization information included in a `Payment` object reflects
details collected **at the time of the payment**. Details such as the name or
price of items might have changed since the payment was processed.

## Structure

`V1PaymentItemization`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The item's name. |
| `quantity` | `number \| undefined` | Optional | The quantity of the item purchased. This can be a decimal value. |
| `itemizationType` | [`string \| undefined`](../../doc/models/v1-payment-itemization-itemization-type.md) | Optional | - |
| `itemDetail` | [`V1PaymentItemDetail \| undefined`](../../doc/models/v1-payment-item-detail.md) | Optional | V1PaymentItemDetail |
| `notes` | `string \| undefined` | Optional | Notes entered by the merchant about the item at the time of payment, if any. |
| `itemVariationName` | `string \| undefined` | Optional | The name of the item variation purchased, if any. |
| `totalMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `singleQuantityMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `grossSalesMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `discountMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `netSalesMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `taxes` | [`V1PaymentTax[] \| undefined`](../../doc/models/v1-payment-tax.md) | Optional | All taxes applied to this itemization. |
| `discounts` | [`V1PaymentDiscount[] \| undefined`](../../doc/models/v1-payment-discount.md) | Optional | All discounts applied to this itemization. |
| `modifiers` | [`V1PaymentModifier[] \| undefined`](../../doc/models/v1-payment-modifier.md) | Optional | All modifier options applied to this itemization. |

## Example (as JSON)

```json
{
  "name": null,
  "quantity": null,
  "itemization_type": null,
  "item_detail": null,
  "notes": null,
  "item_variation_name": null,
  "total_money": null,
  "single_quantity_money": null,
  "gross_sales_money": null,
  "discount_money": null,
  "net_sales_money": null,
  "taxes": null,
  "discounts": null,
  "modifiers": null
}
```

