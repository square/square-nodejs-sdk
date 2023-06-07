
# Catalog Subscription Plan

Describes a subscription plan. A subscription plan represents what you want to sell in a subscription model, and includes references to each of the associated subscription plan variations.
For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).

## Structure

`CatalogSubscriptionPlan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the plan. |
| `phases` | [`SubscriptionPhase[] \| undefined`](../../doc/models/subscription-phase.md) | Optional | A list of SubscriptionPhase containing the [SubscriptionPhase](entity:SubscriptionPhase) for this plan.<br>This field it required. Not including this field will throw a REQUIRED_FIELD_MISSING error |
| `subscriptionPlanVariations` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | The list of subscription plan variations available for this product |
| `eligibleItemIds` | `string[] \| undefined` | Optional | The list of IDs of `CatalogItems` that are eligible for subscription by this SubscriptionPlan's variations. |
| `eligibleCategoryIds` | `string[] \| undefined` | Optional | The list of IDs of `CatalogCategory` that are eligible for subscription by this SubscriptionPlan's variations. |
| `allItems` | `boolean \| undefined` | Optional | If true, all items in the merchant's catalog are subscribable by this SubscriptionPlan. |

## Example (as JSON)

```json
{
  "name": "name0",
  "phases": [
    {
      "uid": "uid5",
      "cadence": "EVERY_FOUR_MONTHS",
      "periods": 241,
      "recurring_price_money": {
        "amount": 193,
        "currency": "MOP"
      },
      "ordinal": 207,
      "pricing": {
        "type": "RELATIVE",
        "discount_ids": [
          "discount_ids0",
          "discount_ids1",
          "discount_ids2"
        ],
        "price_money": {
          "amount": 251,
          "currency": "SLL"
        }
      }
    },
    {
      "uid": "uid6",
      "cadence": "QUARTERLY",
      "periods": 242,
      "recurring_price_money": {
        "amount": 194,
        "currency": "MRO"
      },
      "ordinal": 208,
      "pricing": {
        "type": "STATIC",
        "discount_ids": [
          "discount_ids9",
          "discount_ids0"
        ],
        "price_money": {
          "amount": 252,
          "currency": "SOS"
        }
      }
    }
  ],
  "subscription_plan_variations": [
    {
      "type": "MODIFIER_LIST",
      "id": "id2",
      "updated_at": "updated_at2",
      "version": 18,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name7",
          "string_value": "string_value1",
          "custom_attribute_definition_id": "custom_attribute_definition_id5",
          "type": "SELECTION",
          "number_value": "number_value7"
        },
        "key1": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "NUMBER",
          "number_value": "number_value8"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id6",
          "location_id": "location_id6"
        }
      ]
    },
    {
      "type": "DISCOUNT",
      "id": "id3",
      "updated_at": "updated_at1",
      "version": 19,
      "is_deleted": true,
      "custom_attribute_values": {
        "key0": {
          "name": "name6",
          "string_value": "string_value0",
          "custom_attribute_definition_id": "custom_attribute_definition_id6",
          "type": "STRING",
          "number_value": "number_value6"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id7",
          "location_id": "location_id7"
        },
        {
          "catalog_v1_id": "catalog_v1_id8",
          "location_id": "location_id8"
        }
      ]
    }
  ],
  "eligible_item_ids": [
    "eligible_item_ids8"
  ],
  "eligible_category_ids": [
    "eligible_category_ids7"
  ],
  "all_items": false
}
```

