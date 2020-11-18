
# Loyalty Program

## Structure

`LoyaltyProgram`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` |  | The Square-assigned ID of the loyalty program. Updates to<br>the loyalty program do not modify the identifier. |
| `status` | [`string`](/doc/models/loyalty-program-status.md) |  | Whether the program is currently active. |
| `rewardTiers` | [`LoyaltyProgramRewardTier[]`](/doc/models/loyalty-program-reward-tier.md) |  | The list of rewards for buyers, sorted by ascending points. |
| `expirationPolicy` | [`LoyaltyProgramExpirationPolicy`](/doc/models/loyalty-program-expiration-policy.md) | Optional | Describes when the loyalty program expires. |
| `terminology` | [`LoyaltyProgramTerminology`](/doc/models/loyalty-program-terminology.md) |  | - |
| `locationIds` | `string[]` |  | The [locations](#type-Location) at which the program is active. |
| `createdAt` | `string` |  | The timestamp when the program was created, in RFC 3339 format. |
| `updatedAt` | `string` |  | The timestamp when the reward was last updated, in RFC 3339 format. |
| `accrualRules` | [`LoyaltyProgramAccrualRule[]`](/doc/models/loyalty-program-accrual-rule.md) |  | Defines how buyers can earn loyalty points. |

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
      "created_at": "created_at7"
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
      "created_at": "created_at8"
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
      "visit_minimum_amount_money": {
        "amount": 238,
        "currency": "ISK"
      },
      "spend_amount_money": {
        "amount": 98,
        "currency": "UGX"
      },
      "catalog_object_id": "catalog_object_id8"
    },
    {
      "accrual_type": "SPEND",
      "points": 99,
      "visit_minimum_amount_money": {
        "amount": 237,
        "currency": "JMD"
      },
      "spend_amount_money": {
        "amount": 99,
        "currency": "USD"
      },
      "catalog_object_id": "catalog_object_id7"
    }
  ]
}
```

