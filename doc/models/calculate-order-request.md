
# Calculate Order Request

## Structure

`CalculateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`Order`](../../doc/models/order.md) | Required | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. `Order` objects also<br>include information about any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |
| `proposedRewards` | [`OrderReward[] \| null \| undefined`](../../doc/models/order-reward.md) | Optional | Identifies one or more loyalty reward tiers to apply during the order calculation.<br>The discounts defined by the reward tiers are added to the order only to preview the<br>effect of applying the specified rewards. The rewards do not correspond to actual<br>redemptions; that is, no `reward`s are created. Therefore, the reward `id`s are<br>random strings used only to reference the reward tier. |

## Example (as JSON)

```json
{
  "idempotency_key": "b3e98fe3-b8de-471c-82f1-545f371e637c",
  "order": {
    "discounts": [
      {
        "name": "50% Off",
        "percentage": "50",
        "scope": "ORDER"
      }
    ],
    "line_items": [
      {
        "base_price_money": {
          "amount": 500,
          "currency": "USD"
        },
        "name": "Item 1",
        "quantity": "1",
        "uid": "uid1",
        "quantity_unit": {
          "measurement_unit": {
            "custom_unit": {
              "name": "name9",
              "abbreviation": "abbreviation1"
            },
            "area_unit": "METRIC_SQUARE_CENTIMETER",
            "length_unit": "IMPERIAL_MILE",
            "volume_unit": "GENERIC_FLUID_OUNCE",
            "weight_unit": "METRIC_KILOGRAM"
          },
          "precision": 201,
          "catalog_object_id": "catalog_object_id1",
          "catalog_version": 135
        },
        "note": "note3",
        "catalog_object_id": "catalog_object_id5"
      },
      {
        "base_price_money": {
          "amount": 300,
          "currency": "USD"
        },
        "name": "Item 2",
        "quantity": "2",
        "uid": "uid0",
        "quantity_unit": {
          "measurement_unit": {
            "custom_unit": {
              "name": "name8",
              "abbreviation": "abbreviation0"
            },
            "area_unit": "IMPERIAL_SQUARE_MILE",
            "length_unit": "METRIC_MILLIMETER",
            "volume_unit": "METRIC_LITER",
            "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
          },
          "precision": 200,
          "catalog_object_id": "catalog_object_id0",
          "catalog_version": 134
        },
        "note": "note4",
        "catalog_object_id": "catalog_object_id6"
      }
    ],
    "location_id": "D7AVYMEAPJ3A3",
    "id": "id6",
    "reference_id": "reference_id4",
    "source": {
      "name": "name2"
    },
    "customer_id": "customer_id4"
  },
  "proposed_rewards": [
    {
      "id": "id0",
      "reward_tier_id": "reward_tier_id6"
    },
    {
      "id": "id1",
      "reward_tier_id": "reward_tier_id7"
    }
  ]
}
```

