
# List Loyalty Programs Response

A response that contains all loyalty programs.

## Structure

`ListLoyaltyProgramsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `programs` | [`LoyaltyProgram[]`](/doc/models/loyalty-program.md) | Optional | A list of `LoyaltyProgram` for the merchant. |

## Example (as JSON)

```json
{
  "programs": [
    {
      "id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
      "status": "ACTIVE",
      "reward_tiers": [
        {
          "id": "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
          "points": 10,
          "name": "10% off entire sale",
          "definition": {
            "scope": "ORDER",
            "discount_type": "FIXED_PERCENTAGE",
            "percentage_discount": "10"
          },
          "created_at": "2020-04-20T16:55:11Z"
        }
      ],
      "terminology": {
        "one": "Point",
        "other": "Points"
      },
      "location_ids": [
        "P034NEENMD09F"
      ],
      "created_at": "2020-04-20T16:55:11Z",
      "updated_at": "2020-05-01T02:00:02Z",
      "accrual_rules": [
        {
          "accrual_type": "SPEND",
          "points": 1,
          "spend_amount_money": {
            "amount": 100
          }
        }
      ]
    }
  ]
}
```

