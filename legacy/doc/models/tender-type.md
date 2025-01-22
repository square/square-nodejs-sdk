
# Tender Type

Indicates a tender's type.

## Enumeration

`TenderType`

## Fields

| Name | Description |
|  --- | --- |
| `CARD` | A credit card. |
| `CASH` | Cash. |
| `THIRD_PARTY_CARD` | A credit card processed with a card processor other than Square.<br><br>This value applies only to merchants in countries where Square does not<br>yet provide card processing. |
| `SQUARE_GIFT_CARD` | A Square gift card. |
| `NO_SALE` | This tender represents the register being opened for a "no sale" event. |
| `BANK_ACCOUNT` | A bank account payment. |
| `WALLET` | A payment from a digital wallet, e.g. Cash App, Paypay, Rakuten Pay,<br>Au Pay, D Barai, Merpay, Wechat Pay, Alipay.<br><br>Note: Some "digital wallets", including Google Pay and Apple Pay, facilitate<br>card payments.  Those payments have the `CARD` type. |
| `BUY_NOW_PAY_LATER` | A Buy Now Pay Later payment. |
| `SQUARE_ACCOUNT` | A Square House Account payment. |
| `OTHER` | A form of tender that does not match any other value. |

