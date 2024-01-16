
# Loyalty Promotion

Represents a promotion for a [loyalty program](../../doc/models/loyalty-program.md). Loyalty promotions enable buyers
to earn extra points on top of those earned from the base program.

A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED` status.

## Structure

`LoyaltyPromotion`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the promotion.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `name` | `string` | Required | The name of the promotion.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70` |
| `incentive` | [`LoyaltyPromotionIncentive`](../../doc/models/loyalty-promotion-incentive.md) | Required | Represents how points for a [loyalty promotion](../../doc/models/loyalty-promotion.md) are calculated,<br>either by multiplying the points earned from the base program or by adding a specified number<br>of points to the points earned from the base program. |
| `availableTime` | [`LoyaltyPromotionAvailableTimeData`](../../doc/models/loyalty-promotion-available-time-data.md) | Required | Represents scheduling information that determines when purchases can qualify to earn points<br>from a [loyalty promotion](../../doc/models/loyalty-promotion.md). |
| `triggerLimit` | [`LoyaltyPromotionTriggerLimit \| undefined`](../../doc/models/loyalty-promotion-trigger-limit.md) | Optional | Represents the number of times a buyer can earn points during a [loyalty promotion](../../doc/models/loyalty-promotion.md).<br>If this field is not set, buyers can trigger the promotion an unlimited number of times to earn points during<br>the time that the promotion is available.<br><br>A purchase that is disqualified from earning points because of this limit might qualify for another active promotion. |
| `status` | [`string \| undefined`](../../doc/models/loyalty-promotion-status.md) | Optional | Indicates the status of a [loyalty promotion](../../doc/models/loyalty-promotion.md). |
| `createdAt` | `string \| undefined` | Optional | The timestamp of when the promotion was created, in RFC 3339 format. |
| `canceledAt` | `string \| undefined` | Optional | The timestamp of when the promotion was canceled, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the promotion was last updated, in RFC 3339 format. |
| `loyaltyProgramId` | `string \| undefined` | Optional | The ID of the [loyalty program](entity:LoyaltyProgram) associated with the promotion. |
| `minimumSpendAmountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `qualifyingItemVariationIds` | `string[] \| null \| undefined` | Optional | The IDs of any qualifying `ITEM_VARIATION` [catalog objects](entity:CatalogObject). If specified,<br>the purchase must include at least one of these items to qualify for the promotion.<br><br>This option is valid only if the base loyalty program uses a `VISIT` or `SPEND` accrual rule.<br>With `SPEND` accrual rules, make sure that qualifying promotional items are not excluded.<br><br>You can specify `qualifying_item_variation_ids` or `qualifying_category_ids` for a given promotion, but not both. |
| `qualifyingCategoryIds` | `string[] \| null \| undefined` | Optional | The IDs of any qualifying `CATEGORY` [catalog objects](entity:CatalogObject). If specified,<br>the purchase must include at least one item from one of these categories to qualify for the promotion.<br><br>This option is valid only if the base loyalty program uses a `VISIT` or `SPEND` accrual rule.<br>With `SPEND` accrual rules, make sure that qualifying promotional items are not excluded.<br><br>You can specify `qualifying_category_ids` or `qualifying_item_variation_ids` for a promotion, but not both. |

## Example (as JSON)

```json
{
  "id": "id4",
  "name": "name4",
  "incentive": {
    "type": "POINTS_MULTIPLIER",
    "points_multiplier_data": {
      "points_multiplier": 134,
      "multiplier": "multiplier4"
    },
    "points_addition_data": {
      "points_addition": 218
    }
  },
  "available_time": {
    "start_date": "start_date4",
    "end_date": "end_date8",
    "time_periods": [
      "time_periods9"
    ]
  },
  "trigger_limit": {
    "times": 26,
    "interval": "ALL_TIME"
  },
  "status": "ACTIVE",
  "created_at": "created_at8",
  "canceled_at": "canceled_at0"
}
```

