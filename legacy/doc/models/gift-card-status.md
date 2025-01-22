
# Gift Card Status

Indicates the gift card state.

## Enumeration

`GiftCardStatus`

## Fields

| Name | Description |
|  --- | --- |
| `ACTIVE` | The gift card is active and can be used as a payment source. |
| `DEACTIVATED` | Any activity that changes the gift card balance is permanently forbidden. |
| `BLOCKED` | Any activity that changes the gift card balance is temporarily forbidden. |
| `PENDING` | The gift card is pending activation.<br>This is the initial state when a gift card is created. Typically, you'll call<br>[CreateGiftCardActivity](../../doc/api/gift-card-activities.md#create-gift-card-activity) to create an<br>`ACTIVATE` activity that activates the gift card with an initial balance before first use. |

