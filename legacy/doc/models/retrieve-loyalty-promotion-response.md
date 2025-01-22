
# Retrieve Loyalty Promotion Response

Represents a [RetrieveLoyaltyPromotionPromotions](../../doc/api/loyalty.md#retrieve-loyalty-promotion) response.

## Structure

`RetrieveLoyaltyPromotionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `loyaltyPromotion` | [`LoyaltyPromotion \| undefined`](../../doc/models/loyalty-promotion.md) | Optional | Represents a promotion for a [loyalty program](../../doc/models/loyalty-program.md). Loyalty promotions enable buyers<br>to earn extra points on top of those earned from the base program.<br><br>A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED` status. |

## Example (as JSON)

```json
{
  "loyalty_promotion": {
    "available_time": {
      "start_date": "2022-08-16",
      "time_periods": [
        "BEGIN:VEVENT\nDTSTART:20220816T160000\nDURATION:PT2H\nRRULE:FREQ=WEEKLY;BYDAY=TU\nEND:VEVENT"
      ],
      "end_date": "end_date8"
    },
    "created_at": "2022-08-16T08:38:54Z",
    "id": "loypromo_f0f9b849-725e-378d-b810-511237e07b67",
    "incentive": {
      "points_multiplier_data": {
        "multiplier": "3.000",
        "points_multiplier": 3
      },
      "type": "POINTS_MULTIPLIER",
      "points_addition_data": {
        "points_addition": 218
      }
    },
    "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
    "minimum_spend_amount_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "name": "Tuesday Happy Hour Promo",
    "qualifying_item_variation_ids": [
      "CJ3RYL56ITAKMD4VRCM7XERS",
      "AT3RYLR3TUA9C34VRCB7X5RR"
    ],
    "status": "ACTIVE",
    "trigger_limit": {
      "interval": "DAY",
      "times": 1
    },
    "updated_at": "2022-08-16T08:38:54Z",
    "canceled_at": "canceled_at0"
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

