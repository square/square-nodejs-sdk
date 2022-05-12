
# Catalog Quick Amounts Settings

A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.

## Structure

`CatalogQuickAmountsSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `option` | [`string`](../../doc/models/catalog-quick-amounts-settings-option.md) | Required | Determines a seller's option on Quick Amounts feature. |
| `eligibleForAutoAmounts` | `boolean \| undefined` | Optional | Represents location's eligibility for auto amounts<br>The boolean should be consistent with whether there are AUTO amounts in the `amounts`. |
| `amounts` | [`CatalogQuickAmount[] \| undefined`](../../doc/models/catalog-quick-amount.md) | Optional | Represents a set of Quick Amounts at this location. |

## Example (as JSON)

```json
{
  "option": "AUTO",
  "eligible_for_auto_amounts": null,
  "amounts": null
}
```

