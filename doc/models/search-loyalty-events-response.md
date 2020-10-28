
# Search Loyalty Events Response

A response that contains loyalty events that satisfy the search
criteria, in order by the `created_at` date.

## Structure

`SearchLoyaltyEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `events` | [`LoyaltyEvent[]`](/doc/models/loyalty-event.md) | Optional | The loyalty events that satisfy the search criteria. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent<br>request. If empty, this is the final response.<br>For more information,<br>see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination). |

## Example (as JSON)

```json
{
  "events": [
    {
      "id": "c27c8465-806e-36f2-b4b3-71f5887b5ba8",
      "type": "ACCUMULATE_POINTS",
      "created_at": "2020-05-08T22:01:30Z",
      "accumulate_points": {
        "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
        "points": 5,
        "order_id": "PyATxhYLfsMqpVkcKJITPydgEYfZY"
      },
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "location_id": "P034NEENMD09F",
      "source": "LOYALTY_API"
    },
    {
      "id": "e4a5cbc3-a4d0-3779-98e9-e578885d9430",
      "type": "REDEEM_REWARD",
      "created_at": "2020-05-08T22:01:15Z",
      "redeem_reward": {
        "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
        "reward_id": "d03f79f4-815f-3500-b851-cc1e68a457f9",
        "order_id": "PyATxhYLfsMqpVkcKJITPydgEYfZY"
      },
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "location_id": "P034NEENMD09F",
      "source": "LOYALTY_API"
    },
    {
      "id": "5e127479-0b03-3671-ab1e-15faea8b7188",
      "type": "CREATE_REWARD",
      "created_at": "2020-05-08T22:00:44Z",
      "create_reward": {
        "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
        "reward_id": "d03f79f4-815f-3500-b851-cc1e68a457f9",
        "points": -10
      },
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "source": "LOYALTY_API"
    }
  ]
}
```

