
# Gift Card Activity Type

Indicates the gift card activity type.

## Enumeration

`GiftCardActivityType`

## Fields

| Name | Description |
|  --- | --- |
| `ACTIVATE` | Activated a gift card with a balance. |
| `LOAD` | Loaded a gift card with additional funds. |
| `REDEEM` | Redeemed a gift card. |
| `CLEAR_BALANCE` | Cleared a gift card balance to zero. |
| `DEACTIVATE` | Permanently blocked a gift card from a balance-changing<br>activity. |
| `ADJUST_INCREMENT` | Manually increased a gift card balance. |
| `ADJUST_DECREMENT` | Manually decreased a gift card balance. |
| `REFUND` | Added money to a gift card because a transaction<br>paid with this gift card was refunded. |
| `UNLINKED_ACTIVITY_REFUND` | Added money to a gift card because a transaction<br>not linked to this gift card was refunded<br>to this gift card. |
| `IMPORT` | Imported a third-party gift card. |
| `BLOCK` | Temporarily blocked a gift card from balance-changing<br>activities. |
| `UNBLOCK` | Unblocked a gift card. It can resume balance-changing activities. |
| `IMPORT_REVERSAL` | A third-party gift card was imported with a balance.<br>The import is reversed. |

