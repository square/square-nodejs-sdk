
# Activity Type

## Enumeration

`ActivityType`

## Fields

| Name | Description |
|  --- | --- |
| `ADJUSTMENT` | A manual adjustment applied to the seller's account by Square. |
| `APP_FEE_REFUND` | A refund for an application fee on a payment. |
| `APP_FEE_REVENUE` | Revenue generated from an application fee on a payment. |
| `AUTOMATIC_SAVINGS` | An automatic transfer from the payment processing balance to the Square Savings account.<br>These are, generally, proportional to the seller's sales. |
| `AUTOMATIC_SAVINGS_REVERSED` | An automatic transfer from the Square Savings account back to the processing balance.<br>These are, generally, proportional to the seller's refunds. |
| `CHARGE` | A credit card payment capture. |
| `DEPOSIT_FEE` | Any fees involved with deposits such as instant deposits. |
| `DISPUTE` | The balance change due to a dispute event. |
| `ESCHEATMENT` | An escheatment entry for remittance. |
| `FEE` | The Square processing fee. |
| `FREE_PROCESSING` | Square offers free payments processing for a variety of business scenarios, including seller<br>referrals or when Square wants to apologize (for example, for a bug, customer service, or repricing complication).<br>This entry represents a credit to the seller for the purposes of free processing. |
| `HOLD_ADJUSTMENT` | An adjustment made by Square related to holding a payment. |
| `INITIAL_BALANCE_CHANGE` | An external change to a seller's balance. Initial, in the sense that it<br>causes the creation of the other activity types, such as hold and refund. |
| `MONEY_TRANSFER` | The balance change from a money transfer. |
| `MONEY_TRANSFER_REVERSAL` | The reversal of a money transfer. |
| `OPEN_DISPUTE` | The balance change for a chargeback that has been filed. |
| `OTHER` | Any other type that does not belong in the rest of the types. |
| `OTHER_ADJUSTMENT` | Any other type of adjustment that does not fall under existing types. |
| `PAID_SERVICE_FEE` | A fee paid to a third-party merchant. |
| `PAID_SERVICE_FEE_REFUND` | A fee paid to a third-party merchant. |
| `REDEMPTION_CODE` | Repayment for a redemption code. |
| `REFUND` | A refund for an existing card payment. |
| `RELEASE_ADJUSTMENT` | An adjustment made by Square related to releasing a payment. |
| `RESERVE_HOLD` | Fees paid for funding risk reserve. |
| `RESERVE_RELEASE` | Fees released from risk reserve. |
| `RETURNED_PAYOUT` | An entry created when Square receives a response for the ACH file that Square sent indicating that the<br>settlement of the original entry failed. |
| `SQUARE_CAPITAL_PAYMENT` | A capital merchant cash advance (MCA) assessment. These are, generally,<br>proportional to the merchant's sales but can be issued for other reasons related to the MCA. |
| `SQUARE_CAPITAL_REVERSED_PAYMENT` | A capital merchant cash advance (MCA) assessment refund. These are, generally,<br>proportional to the merchant's refunds but can be issued for other reasons related to the MCA. |
| `SUBSCRIPTION_FEE` | A fee charged for subscription to a Square product. |
| `SUBSCRIPTION_FEE_PAID_REFUND` | A Square subscription fee that has been refunded. |
| `SUBSCRIPTION_FEE_REFUND` | The refund of a previously charged Square product subscription fee. |
| `TAX_ON_FEE` | The tax paid on fee amounts. |
| `THIRD_PARTY_FEE` | Fees collected by a third-party platform. |
| `THIRD_PARTY_FEE_REFUND` | Refunded fees from a third-party platform. |
| `PAYOUT` | Balance change due to money transfer. |
| `AUTOMATIC_BITCOIN_CONVERSIONS` | Indicates the withholding of a portion of each payment by Square that has been<br>automatically converted into bitcoin using Cash App. The seller manages their bitcoin in<br>their Cash App account. |
| `AUTOMATIC_BITCOIN_CONVERSIONS_REVERSED` | Indicates a return of the payment withholding that had been scheduled to be converted<br>into bitcoin using Cash App to the Square payments balance. |
| `CREDIT_CARD_REPAYMENT` | The repayment made toward the outstanding balance on the seller's Square credit card. |
| `CREDIT_CARD_REPAYMENT_REVERSED` | The reversal of the repayment made toward the outstanding balance on the seller's<br>Square credit card. |

