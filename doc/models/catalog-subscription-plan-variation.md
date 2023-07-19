
# Catalog Subscription Plan Variation

Describes a subscription plan variation. A subscription plan variation represents how the subscription for a product or service is sold.
For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).

## Structure

`CatalogSubscriptionPlanVariation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the plan variation. |
| `phases` | [`SubscriptionPhase[]`](../../doc/models/subscription-phase.md) | Required | A list containing each [SubscriptionPhase](entity:SubscriptionPhase) for this plan variation. |
| `subscriptionPlanId` | `string \| undefined` | Optional | The id of the subscription plan, if there is one. |

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
        "currency": "CHE"
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
          "currency": "NZD"
        }
      }
    }
  ],
  "subscription_plan_id": "subscription_plan_id2"
}
```

