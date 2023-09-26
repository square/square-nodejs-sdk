
# Create Loyalty Promotion Request

Represents a [CreateLoyaltyPromotion](../../doc/api/loyalty.md#create-loyalty-promotion) request.

## Structure

`CreateLoyaltyPromotionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyPromotion` | [`LoyaltyPromotion`](../../doc/models/loyalty-promotion.md) | Required | Represents a promotion for a [loyalty program](../../doc/models/loyalty-program.md). Loyalty promotions enable buyers<br>to earn extra points on top of those earned from the base program.<br><br>A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED` status. |
| `idempotencyKey` | `string` | Required | A unique identifier for this request, which is used to ensure idempotency. For more information,<br>see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |

## Example (as JSON)

```json
{
  "idempotency_key": "ec78c477-b1c3-4899-a209-a4e71337c996",
  "loyalty_promotion": {
    "available_time": {
      "time_periods": [
        "BEGIN:VEVENT\nDTSTART:20220816T160000\nDURATION:PT2H\nRRULE:FREQ=WEEKLY;BYDAY=TU\nEND:VEVENT"
      ],
      "start_date": "start_date4",
      "end_date": "end_date8"
    },
    "incentive": {
      "points_multiplier_data": {
        "multiplier": "3.0",
        "points_multiplier": 134
      },
      "type": "POINTS_MULTIPLIER",
      "points_addition_data": {
        "points_addition": 218
      }
    },
    "minimum_spend_amount_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "name": "Tuesday Happy Hour Promo",
    "qualifying_category_ids": [
      "XTQPYLR3IIU9C44VRCB3XD12"
    ],
    "trigger_limit": {
      "interval": "DAY",
      "times": 1
    },
    "id": "id4",
    "status": "ACTIVE",
    "created_at": "created_at2",
    "canceled_at": "canceled_at0"
  }
}
```

