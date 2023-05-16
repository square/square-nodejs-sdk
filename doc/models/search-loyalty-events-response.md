
# Search Loyalty Events Response

A response that contains loyalty events that satisfy the search
criteria, in order by the `created_at` date.

## Structure

`SearchLoyaltyEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `events` | [`LoyaltyEvent[] \| undefined`](../../doc/models/loyalty-event.md) | Optional | The loyalty events that satisfy the search criteria. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent<br>request. If empty, this is the final response.<br>For more information,<br>see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "events": [
    {
      "accumulate_points": {
        "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
        "order_id": "PyATxhYLfsMqpVkcKJITPydgEYfZY",
        "points": 5
      },
      "created_at": "2020-05-08T22:01:30Z",
      "id": "c27c8465-806e-36f2-b4b3-71f5887b5ba8",
      "location_id": "P034NEENMD09F",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "source": "LOYALTY_API",
      "type": "ACCUMULATE_POINTS",
      "create_reward": {
        "loyalty_program_id": "loyalty_program_id8",
        "reward_id": "reward_id2",
        "points": 148
      },
      "redeem_reward": {
        "loyalty_program_id": "loyalty_program_id8",
        "reward_id": "reward_id2",
        "order_id": "order_id2"
      },
      "delete_reward": {
        "loyalty_program_id": "loyalty_program_id4",
        "reward_id": "reward_id8",
        "points": 130
      },
      "adjust_points": {
        "loyalty_program_id": "loyalty_program_id8",
        "points": 142,
        "reason": "reason6"
      }
    },
    {
      "created_at": "2020-05-08T22:01:15Z",
      "id": "e4a5cbc3-a4d0-3779-98e9-e578885d9430",
      "location_id": "P034NEENMD09F",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "redeem_reward": {
        "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
        "order_id": "PyATxhYLfsMqpVkcKJITPydgEYfZY",
        "reward_id": "d03f79f4-815f-3500-b851-cc1e68a457f9"
      },
      "source": "LOYALTY_API",
      "type": "REDEEM_REWARD",
      "accumulate_points": {
        "loyalty_program_id": "loyalty_program_id3",
        "points": 119,
        "order_id": "order_id7"
      },
      "create_reward": {
        "loyalty_program_id": "loyalty_program_id9",
        "reward_id": "reward_id3",
        "points": 147
      },
      "delete_reward": {
        "loyalty_program_id": "loyalty_program_id3",
        "reward_id": "reward_id7",
        "points": 131
      },
      "adjust_points": {
        "loyalty_program_id": "loyalty_program_id9",
        "points": 141,
        "reason": "reason5"
      }
    },
    {
      "create_reward": {
        "loyalty_program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
        "points": -10,
        "reward_id": "d03f79f4-815f-3500-b851-cc1e68a457f9"
      },
      "created_at": "2020-05-08T22:00:44Z",
      "id": "5e127479-0b03-3671-ab1e-15faea8b7188",
      "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
      "source": "LOYALTY_API",
      "type": "CREATE_REWARD",
      "accumulate_points": {
        "loyalty_program_id": "loyalty_program_id4",
        "points": 118,
        "order_id": "order_id8"
      },
      "redeem_reward": {
        "loyalty_program_id": "loyalty_program_id0",
        "reward_id": "reward_id4",
        "order_id": "order_id4"
      },
      "delete_reward": {
        "loyalty_program_id": "loyalty_program_id2",
        "reward_id": "reward_id6",
        "points": 132
      },
      "adjust_points": {
        "loyalty_program_id": "loyalty_program_id0",
        "points": 140,
        "reason": "reason4"
      }
    }
  ],
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ],
  "cursor": "cursor6"
}
```

