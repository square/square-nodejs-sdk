
# Loyalty Program Accrual Rule

Represents an accrual rule, which defines how buyers can earn points from the base [loyalty program](../../doc/models/loyalty-program.md).

## Structure

`LoyaltyProgramAccrualRule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accrualType` | [`string`](../../doc/models/loyalty-program-accrual-rule-type.md) | Required | The type of the accrual rule that defines how buyers can earn points. |
| `points` | `number \| undefined` | Optional | The number of points that<br>buyers earn based on the `accrual_type`.<br>**Constraints**: `>= 1` |
| `visitData` | [`LoyaltyProgramAccrualRuleVisitData \| undefined`](../../doc/models/loyalty-program-accrual-rule-visit-data.md) | Optional | Represents additional data for rules with the `VISIT` accrual type. |
| `spendData` | [`LoyaltyProgramAccrualRuleSpendData \| undefined`](../../doc/models/loyalty-program-accrual-rule-spend-data.md) | Optional | Represents additional data for rules with the `SPEND` accrual type. |
| `itemVariationData` | [`LoyaltyProgramAccrualRuleItemVariationData \| undefined`](../../doc/models/loyalty-program-accrual-rule-item-variation-data.md) | Optional | Represents additional data for rules with the `ITEM_VARIATION` accrual type. |
| `categoryData` | [`LoyaltyProgramAccrualRuleCategoryData \| undefined`](../../doc/models/loyalty-program-accrual-rule-category-data.md) | Optional | Represents additional data for rules with the `CATEGORY` accrual type. |

## Example (as JSON)

```json
{
  "accrual_type": "ITEM_VARIATION",
  "points": null,
  "visit_data": null,
  "spend_data": null,
  "item_variation_data": null,
  "category_data": null
}
```

