
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
| `monthlyBillingAnchorDate` | `bigint \| null \| undefined` | Optional | The day of the month the billing period starts.<br>**Constraints**: `>= 1`, `<= 31` |
| `canProrate` | `boolean \| null \| undefined` | Optional | Whether bills for this plan variation can be split for proration. |
| `successorPlanVariationId` | `string \| null \| undefined` | Optional | The ID of a "successor" plan variation to this one. If the field is set, and this object is disabled at all<br>locations, it indicates that this variation is deprecated and the object identified by the successor ID be used in<br>its stead. |

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
        "currency": "ZMW"
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
          "currency": "GTQ"
        }
      }
    }
  ],
  "subscription_plan_id": "subscription_plan_id0",
  "monthly_billing_anchor_date": 38,
  "can_prorate": false,
  "successor_plan_variation_id": "successor_plan_variation_id2"
}
```

