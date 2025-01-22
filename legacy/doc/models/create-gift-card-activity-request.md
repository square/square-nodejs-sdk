
# Create Gift Card Activity Request

A request to create a gift card activity.

## Structure

`CreateGiftCardActivityRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A unique string that identifies the `CreateGiftCardActivity` request.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `giftCardActivity` | [`GiftCardActivity`](../../doc/models/gift-card-activity.md) | Required | Represents an action performed on a [gift card](../../doc/models/gift-card.md) that affects its state or balance.<br>A gift card activity contains information about a specific activity type. For example, a `REDEEM` activity<br>includes a `redeem_activity_details` field that contains information about the redemption. |

## Example (as JSON)

```json
{
  "gift_card_activity": {
    "activate_activity_details": {
      "line_item_uid": "eIWl7X0nMuO9Ewbh0ChIx",
      "order_id": "jJNGHm4gLI6XkFbwtiSLqK72KkAZY"
    },
    "gift_card_id": "gftc:6d55a72470d940c6ba09c0ab8ad08d20",
    "location_id": "81FN9BNFZTKS4",
    "type": "ACTIVATE",
    "id": "id6",
    "created_at": "created_at6",
    "gift_card_gan": "gift_card_gan2",
    "gift_card_balance_money": {
      "amount": 82,
      "currency": "IRR"
    }
  },
  "idempotency_key": "U16kfr-kA70er-q4Rsym-7U7NnY"
}
```

