
# List Loyalty Programs Response

A response that contains all loyalty programs.

## Structure

`ListLoyaltyProgramsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `programs` | [`LoyaltyProgram[] \| undefined`](../../doc/models/loyalty-program.md) | Optional | A list of `LoyaltyProgram` for the merchant. |

## Example (as JSON)

```json
{
  "programs": [
    {
      "accrual_rules": [
        {
          "accrual_type": "SPEND",
          "points": 1,
          "spend_data": {
            "amount_money": {
              "amount": 100,
              "currency": "USD"
            },
            "excluded_category_ids": [
              "7ZERJKO5PVYXCVUHV2JCZ2UG",
              "FQKAOJE5C4FIMF5A2URMLW6V"
            ],
            "excluded_item_variation_ids": [
              "CBZXBUVVTYUBZGQO44RHMR6B",
              "EDILT24Z2NISEXDKGY6HP7XV"
            ],
            "tax_mode": "BEFORE_TAX"
          }
        }
      ],
      "created_at": "2020-04-20T16:55:11Z",
      "id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
      "location_ids": [
        "P034NEENMD09F"
      ],
      "reward_tiers": [
        {
          "created_at": "2020-04-20T16:55:11Z",
          "definition": {
            "discount_type": "FIXED_PERCENTAGE",
            "percentage_discount": "10",
            "scope": "ORDER",
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
          "id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
          "name": "10% off entire sale",
          "points": 10,
          "pricing_rule_reference": {
            "catalog_version": 1605486402527,
            "object_id": "74C4JSHESNLTB2A7ITO5HO6F"
          }
        }
      ],
      "status": "ACTIVE",
      "terminology": {
        "one": "Point",
        "other": "Points"
      },
      "updated_at": "2020-05-01T02:00:02Z",
      "expiration_policy": {
        "expiration_duration": "expiration_duration0"
      }
    }
  ],
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

