
# List Gift Cards Response

A response that contains one or more `GiftCard`. The response might contain a set of `Error`
objects if the request resulted in errors.

## Structure

`ListGiftCardsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `giftCards` | [`GiftCard[] \| undefined`](/doc/models/gift-card.md) | Optional | Gift cards retrieved. |
| `cursor` | `string \| undefined` | Optional | When a response is truncated, it includes a cursor that you can use in a<br>subsequent request to fetch the next set of gift cards. If empty, this is<br>the final response. |

## Example (as JSON)

```json
{
  "cursor": "JbFmyvUpaNKsfC1hoLSA4WlqkgkZXTWeKuStajR5BkP7OE0ETAbeWSi6U6u7sH",
  "gift_cards": [
    {
      "balance_money": {
        "amount": 3900,
        "currency": "USD"
      },
      "created_at": "2021-06-09T22:26:54.000Z",
      "gan": "7783320008524605",
      "gan_source": "SQUARE",
      "id": "gftc:00113070ba5745f0b2377c1b9570cb03",
      "state": "ACTIVE",
      "type": "DIGITAL"
    },
    {
      "balance_money": {
        "amount": 2000,
        "currency": "USD"
      },
      "created_at": "2021-05-20T22:26:54.000Z",
      "gan": "7783320002692465",
      "gan_source": "SQUARE",
      "id": "gftc:00128a12725b41e58e0de1d20497a9dd",
      "state": "ACTIVE",
      "type": "DIGITAL"
    }
  ]
}
```

