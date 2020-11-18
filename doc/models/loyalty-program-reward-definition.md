
# Loyalty Program Reward Definition

Provides details about the loyalty program reward tier definition.

## Structure

`LoyaltyProgramRewardDefinition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scope` | [`string`](/doc/models/loyalty-program-reward-definition-scope.md) |  | Indicates the scope of the reward tier. |
| `discountType` | [`string`](/doc/models/loyalty-program-reward-definition-type.md) |  | The type of discount the reward tier offers. |
| `percentageDiscount` | `string` | Optional | Present if `discount_type` is `FIXED_PERCENTAGE`.<br>For example, a 7.25% off discount will be represented as "7.25". |
| `catalogObjectIds` | `string[]` | Optional | A list of [catalog object](#type-CatalogObject) ids to which this reward can be applied. They are either all item-variation ids or category ids, depending on the `type` field. |
| `fixedDiscountMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `maxDiscountMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "scope": "CATEGORY",
  "discount_type": "FIXED_AMOUNT",
  "percentage_discount": "percentage_discount8",
  "catalog_object_ids": [
    "catalog_object_ids2",
    "catalog_object_ids3",
    "catalog_object_ids4"
  ],
  "fixed_discount_money": {
    "amount": 36,
    "currency": "WST"
  },
  "max_discount_money": {
    "amount": 84,
    "currency": "JOD"
  }
}
```

