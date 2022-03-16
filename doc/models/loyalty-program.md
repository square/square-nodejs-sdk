
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
        "percentage_discount": "percentage_discount1",
        "catalog_object_ids": [
          "catalog_object_ids3",
          "catalog_object_ids4",
          "catalog_object_ids5"
        ],
        "fixed_discount_money": {
          "amount": 119,
          "currency": "CUC"
        },
        "max_discount_money": {
          "amount": 163,
          "currency": "ZMK"
        }
      },
      "created_at": "created_at7",
      "pricing_rule_reference": {
        "object_id": "object_id9",
        "catalog_version": 205
      }
    },
    {
      "id": "id0",
      "points": 248,
      "name": "name0",
      "definition": {
        "scope": "ORDER",
        "discount_type": "FIXED_AMOUNT",
        "percentage_discount": "percentage_discount2",
        "catalog_object_ids": [
          "catalog_object_ids4"
        ],
        "fixed_discount_money": {
          "amount": 120,
          "currency": "CUP"
        },
        "max_discount_money": {
          "amount": 164,
          "currency": "ZMW"
        }
      },
      "created_at": "created_at8",
      "pricing_rule_reference": {
        "object_id": "object_id0",
        "catalog_version": 206
      }
    }
  ],
  "expiration_policy": {
    "expiration_duration": "expiration_duration0"
  },
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
      "points": 100,
      "visit_data": {
        "minimum_amount_money": {
          "amount": 160,
          "currency": "TTD"
        },
        "tax_mode": "BEFORE_TAX"
      },
      "spend_data": {
        "amount_money": {
          "amount": 128,
          "currency": "BHD"
        },
        "excluded_category_ids": [
          "excluded_category_ids2",
          "excluded_category_ids3",
          "excluded_category_ids4"
        ],
        "excluded_item_variation_ids": [
          "excluded_item_variation_ids5",
          "excluded_item_variation_ids4",
          "excluded_item_variation_ids3"
        ],
        "tax_mode": "BEFORE_TAX"
      },
      "item_variation_data": {
        "item_variation_id": "item_variation_id8"
      },
      "category_data": {
        "category_id": "category_id4"
      }
    },
    {
      "accrual_type": "SPEND",
      "points": 99,
      "visit_data": {
        "minimum_amount_money": {
          "amount": 161,
          "currency": "TWD"
        },
        "tax_mode": "AFTER_TAX"
      },
      "spend_data": {
        "amount_money": {
          "amount": 129,
          "currency": "BIF"
        },
        "excluded_category_ids": [
          "excluded_category_ids3"
        ],
        "excluded_item_variation_ids": [
          "excluded_item_variation_ids6",
          "excluded_item_variation_ids5"
        ],
        "tax_mode": "AFTER_TAX"
      },
      "item_variation_data": {
        "item_variation_id": "item_variation_id9"
      },
      "category_data": {
        "category_id": "category_id5"
      }
    }
  ]
}
```

