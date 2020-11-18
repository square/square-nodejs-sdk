
# Catalog Tax

A tax applicable to an item.

## Structure

`CatalogTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Optional | The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. |
| `calculationPhase` | [`string`](/doc/models/tax-calculation-phase.md) | Optional | When to calculate the taxes due on a cart. |
| `inclusionType` | [`string`](/doc/models/tax-inclusion-type.md) | Optional | Whether to the tax amount should be additional to or included in the CatalogItem price. |
| `percentage` | `string` | Optional | The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.<br>A value of `7.5` corresponds to 7.5%. |
| `appliesToCustomAmounts` | `boolean` | Optional | If `true`, the fee applies to custom amounts entered into the Square Point of Sale<br>app that are not associated with a particular `CatalogItem`. |
| `enabled` | `boolean` | Optional | A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`). |

## Example (as JSON)

```json
{
  "object": {
    "id": "#SalesTax",
    "present_at_all_locations": true,
    "tax_data": {
      "calculation_phase": "TAX_SUBTOTAL_PHASE",
      "enabled": true,
      "fee_applies_to_custom_amounts": true,
      "inclusion_type": "ADDITIVE",
      "name": "Sales Tax",
      "percentage": "5.0"
    },
    "type": "TAX"
  }
}
```

