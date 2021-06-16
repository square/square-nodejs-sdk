
# Gift Card Activity

Represents an action performed on a gift card that affects its state or balance.

## Structure

`GiftCardActivity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique ID of the gift card activity. |
| `type` | [`string`](/doc/models/gift-card-activity-type.md) | Required | - |
| `locationId` | `string` | Required | The ID of the location at which the activity occurred. |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the gift card activity was created, in RFC 3339 format. |
| `giftCardId` | `string \| undefined` | Optional | The gift card ID. The ID is not required if a GAN is present. |
| `giftCardGan` | `string \| undefined` | Optional | The gift card GAN. The GAN is not required if `gift_card_id` is present. |
| `giftCardBalanceMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `loadActivityDetails` | [`GiftCardActivityLoad \| undefined`](/doc/models/gift-card-activity-load.md) | Optional | Present only when `GiftCardActivityType` is LOAD. |
| `activateActivityDetails` | [`GiftCardActivityActivate \| undefined`](/doc/models/gift-card-activity-activate.md) | Optional | Describes a gift card activity of the ACTIVATE type. |
| `redeemActivityDetails` | [`GiftCardActivityRedeem \| undefined`](/doc/models/gift-card-activity-redeem.md) | Optional | Present only when `GiftCardActivityType` is REDEEM. |
| `clearBalanceActivityDetails` | [`GiftCardActivityClearBalance \| undefined`](/doc/models/gift-card-activity-clear-balance.md) | Optional | Describes a gift card activity of the CLEAR_BALANCE type. |
| `deactivateActivityDetails` | [`GiftCardActivityDeactivate \| undefined`](/doc/models/gift-card-activity-deactivate.md) | Optional | Describes a gift card activity of the DEACTIVATE type. |
| `adjustIncrementActivityDetails` | [`GiftCardActivityAdjustIncrement \| undefined`](/doc/models/gift-card-activity-adjust-increment.md) | Optional | Describes a gift card activity of the ADJUST_INCREMENT type. |
| `adjustDecrementActivityDetails` | [`GiftCardActivityAdjustDecrement \| undefined`](/doc/models/gift-card-activity-adjust-decrement.md) | Optional | Describes a gift card activity of the ADJUST_DECREMENT type. |
| `refundActivityDetails` | [`GiftCardActivityRefund \| undefined`](/doc/models/gift-card-activity-refund.md) | Optional | Present only when `GiftCardActivityType` is REFUND. |
| `unlinkedActivityRefundActivityDetails` | [`GiftCardActivityUnlinkedActivityRefund \| undefined`](/doc/models/gift-card-activity-unlinked-activity-refund.md) | Optional | Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND. |
| `importActivityDetails` | [`GiftCardActivityImport \| undefined`](/doc/models/gift-card-activity-import.md) | Optional | Describes a gift card activity of the IMPORT type and the `GiftCardGANSource` is OTHER<br>(a third-party gift card). |
| `blockActivityDetails` | [`GiftCardActivityBlock \| undefined`](/doc/models/gift-card-activity-block.md) | Optional | Describes a gift card activity of the BLOCK type. |
| `unblockActivityDetails` | [`GiftCardActivityUnblock \| undefined`](/doc/models/gift-card-activity-unblock.md) | Optional | Present only when `GiftCardActivityType` is UNBLOCK. |
| `importReversalActivityDetails` | [`GiftCardActivityImportReversal \| undefined`](/doc/models/gift-card-activity-import-reversal.md) | Optional | Present only when GiftCardActivityType is IMPORT_REVERSAL and GiftCardGANSource is OTHER |

## Example (as JSON)

```json
{
  "id": "id0",
  "type": "ADJUST_INCREMENT",
  "location_id": "location_id4",
  "created_at": "created_at2",
  "gift_card_id": "gift_card_id8",
  "gift_card_gan": "gift_card_gan6",
  "gift_card_balance_money": {
    "amount": 82,
    "currency": "LSL"
  }
}
```

