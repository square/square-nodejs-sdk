
# Catalog Tax

A tax applicable to an item.

## Structure

`CatalogTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `calculationPhase` | [`string \| undefined`](../../doc/models/tax-calculation-phase.md) | Optional | When to calculate the taxes due on a cart. |
| `inclusionType` | [`string \| undefined`](../../doc/models/tax-inclusion-type.md) | Optional | Whether to the tax amount should be additional to or included in the CatalogItem price. |
| `percentage` | `string \| null \| undefined` | Optional | The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.<br>A value of `7.5` corresponds to 7.5%. For a location-specific tax rate, contact the tax authority of the location or a tax consultant. |
| `appliesToCustomAmounts` | `boolean \| null \| undefined` | Optional | If `true`, the fee applies to custom amounts entered into the Square Point of Sale<br>app that are not associated with a particular `CatalogItem`. |
| `enabled` | `boolean \| null \| undefined` | Optional | A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`). |
| `appliesToProductSetId` | `string \| null \| undefined` | Optional | The ID of a `CatalogProductSet` object. If set, the tax is applicable to all products in the product set. |

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
  },
  "name": "name2",
  "calculation_phase": "TAX_SUBTOTAL_PHASE",
  "inclusion_type": "ADDITIVE",
  "percentage": "percentage0",
  "applies_to_custom_amounts": false
}
```

