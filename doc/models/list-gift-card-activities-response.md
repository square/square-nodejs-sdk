
# List Gift Card Activities Response

A response that contains one or more `GiftCardActivity`. The response might contain a set of `Error` objects
if the request resulted in errors.

## Structure

`ListGiftCardActivitiesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `giftCardActivities` | [`GiftCardActivity[] \| undefined`](/doc/models/gift-card-activity.md) | Optional | Gift card activities retrieved. |
| `cursor` | `string \| undefined` | Optional | When a response is truncated, it includes a cursor that you can use in a<br>subsequent request to fetch the next set of activities. If empty, this is<br>the final response. |

## Example (as JSON)

```json
{
  "gift_card_activities": [
    {
      "created_at": "2021-06-02T22:26:38.000Z",
      "gift_card_balance_money": {
        "amount": 700,
        "currency": "USD"
      },
      "gift_card_gan": "7783320002929081",
      "gift_card_id": "gftc:6d55a72470d940c6ba09c0ab8ad08d20",
      "id": "gcact_897698f894b44b3db46c6147e26a0e19",
      "location_id": "81FN9BNFZTKS4",
      "redeem_activity_details": {
        "amount_money": {
          "amount": 300,
          "currency": "USD"
        }
      },
      "type": "REDEEM"
    },
    {
      "activate_activity_details": {
        "amount_money": {
          "amount": 1000,
          "currency": "USD"
        },
        "line_item_uid": "eIWl7X0nMuO9Ewbh0ChIx",
        "order_id": "jJNGHm4gLI6XkFbwtiSLqK72KkAZY"
      },
      "created_at": "2021-05-20T22:26:54.000Z",
      "gift_card_balance_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "gift_card_gan": "7783320002929081",
      "gift_card_id": "gftc:6d55a72470d940c6ba09c0ab8ad08d20",
      "id": "gcact_b968ebfc7d46437b945be7b9e09123b4",
      "location_id": "81FN9BNFZTKS4",
      "type": "ACTIVATE"
    }
  ]
}
```

