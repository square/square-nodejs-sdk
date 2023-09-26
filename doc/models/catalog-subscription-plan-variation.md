
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
| `subscriptionPlanId` | `string \| null \| undefined` | Optional | The id of the subscription plan, if there is one. |

## Example (as JSON)

```json
{
  "name": "name2",
  "phases": [
    {
      "uid": "uid0",
      "cadence": "QUARTERLY",
      "periods": 112,
      "recurring_price_money": {
        "amount": 66,
        "currency": "TMT"
      },
      "ordinal": 78,
      "pricing": {
        "type": "STATIC",
        "discount_ids": [
          "discount_ids5",
          "discount_ids6"
        ],
        "price_money": {
          "amount": 202,
          "currency": "CNY"
        }
      }
    }
  ],
  "subscription_plan_id": "subscription_plan_id0"
}
```

