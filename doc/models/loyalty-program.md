
# Loyalty Program

Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards.
Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

## Structure

`LoyaltyProgram`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The Square-assigned ID of the loyalty program. Updates to<br>the loyalty program do not modify the identifier.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `status` | [`string`](../../doc/models/loyalty-program-status.md) | Required | Indicates whether the program is currently active. |
| `rewardTiers` | [`LoyaltyProgramRewardTier[]`](../../doc/models/loyalty-program-reward-tier.md) | Required | The list of rewards for buyers, sorted by ascending points. |
| `expirationPolicy` | [`LoyaltyProgramExpirationPolicy \| undefined`](../../doc/models/loyalty-program-expiration-policy.md) | Optional | Describes when the loyalty program expires. |
| `terminology` | [`LoyaltyProgramTerminology`](../../doc/models/loyalty-program-terminology.md) | Required | Represents the naming used for loyalty points. |
| `locationIds` | `string[]` | Required | The [locations](../../doc/models/location.md) at which the program is active. |
| `createdAt` | `string` | Required | The timestamp when the program was created, in RFC 3339 format.<br>**Constraints**: *Minimum Length*: `1` |
| `updatedAt` | `string` | Required | The timestamp when the reward was last updated, in RFC 3339 format.<br>**Constraints**: *Minimum Length*: `1` |
| `accrualRules` | [`LoyaltyProgramAccrualRule[]`](../../doc/models/loyalty-program-accrual-rule.md) | Required | Defines how buyers can earn loyalty points. |

## Example (as JSON)

```json
{
  "id": "id0",
  "status": "INACTIVE",
  "reward_tiers": [
    {
      "id": "id9",
      "points": 249,
      "name": "name9",
      "definition": {
        "scope": "CATEGORY",
        "discount_type": "FIXED_PERCENTAGE",
        "percentage_discount": null,
        "catalog_object_ids": null,
        "fixed_discount_money": null,
        "max_discount_money": null
      },
      "created_at": "created_at7",
      "pricing_rule_reference": null
    },
    {
      "id": "id0",
      "points": 248,
      "name": "name0",
      "definition": {
        "scope": "ORDER",
        "discount_type": "FIXED_AMOUNT",
        "percentage_discount": null,
        "catalog_object_ids": null,
        "fixed_discount_money": null,
        "max_discount_money": null
      },
      "created_at": "created_at8",
      "pricing_rule_reference": null
    }
  ],
  "expiration_policy": null,
  "terminology": {
    "one": "one0",
    "other": "other6"
  },
  "location_ids": [
    "location_ids0"
  ],
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "accrual_rules": [
    {
      "accrual_type": "ITEM_VARIATION",
      "points": null,
      "visit_data": null,
      "spend_data": null,
      "item_variation_data": null,
      "category_data": null
    },
    {
      "accrual_type": "SPEND",
      "points": null,
      "visit_data": null,
      "spend_data": null,
      "item_variation_data": null,
      "category_data": null
    }
  ]
}
```

