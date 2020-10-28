
# Order Pricing Options

Pricing options for an order. The options affect how the order's price is calculated.
They can be used, for example, to apply automatic price adjustments that are based on pre-configured
[pricing rules](https://developer.squareup.com/docs/reference/square/objects/CatalogPricingRule).

## Structure

`OrderPricingOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `auto_apply_discounts` | `boolean` | Optional | The option to determine whether or not pricing rule-based discounts are automatically applied to an order. |

## Example (as JSON)

```json
{
  "auto_apply_discounts": false
}
```

