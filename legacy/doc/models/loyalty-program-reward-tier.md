
# Loyalty Program Reward Tier

Represents a reward tier in a loyalty program. A reward tier defines how buyers can redeem points for a reward, such as the number of points required and the value and scope of the discount. A loyalty program can offer multiple reward tiers.

## Structure

`LoyaltyProgramRewardTier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the reward tier.<br>**Constraints**: *Maximum Length*: `36` |
| `points` | `number` | Required | The points exchanged for the reward tier.<br>**Constraints**: `>= 1` |
| `name` | `string \| undefined` | Optional | The name of the reward tier. |
| `definition` | [`LoyaltyProgramRewardDefinition \| undefined`](../../doc/models/loyalty-program-reward-definition.md) | Optional | Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details<br>are now defined using a catalog pricing rule and other catalog objects. For more information, see<br>[Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details). |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the reward tier was created, in RFC 3339 format. |
| `pricingRuleReference` | [`CatalogObjectReference`](../../doc/models/catalog-object-reference.md) | Required | A reference to a Catalog object at a specific version. In general this is<br>used as an entry point into a graph of catalog objects, where the objects exist<br>at a specific version. |

## Example (as JSON)

```json
{
  "id": "id2",
  "points": 94,
  "name": "name2",
  "definition": {
    "scope": "ORDER",
    "discount_type": "FIXED_AMOUNT",
    "percentage_discount": "percentage_discount2",
    "catalog_object_ids": [
      "catalog_object_ids6"
    ],
    "fixed_discount_money": {
      "amount": 36,
      "currency": "SLL"
    },
    "max_discount_money": {
      "amount": 84,
      "currency": "BOB"
    }
  },
  "created_at": "created_at0",
  "pricing_rule_reference": {
    "object_id": "object_id0",
    "catalog_version": 218
  }
}
```

