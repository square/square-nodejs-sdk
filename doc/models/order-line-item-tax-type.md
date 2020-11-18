
# Order Line Item Tax Type

Indicates how the tax is applied to the associated line item or order.

## Enumeration

`OrderLineItemTaxType`

## Fields

| Name | Description |
|  --- | --- |
| `UNKNOWN_TAX` | Used for reporting only.<br>The original transaction tax type is currently not supported by the API. |
| `ADDITIVE` | The tax is an additive tax. The tax amount is added on top of the price.<br>For example, an item with a cost of 1.00 USD and a 10% additive tax would have a total<br>cost to the buyer of 1.10 USD. |
| `INCLUSIVE` | The tax is an inclusive tax. Inclusive taxes are already included<br>in the line item price or order total. For example, an item with cost<br>1.00 USD with a 10% inclusive tax would have a pre-tax cost of 0.91 USD<br>(91 cents) and a 0.09 (9 cents) tax for a total cost of 1.00 USD to<br>the buyer. |

