
# Activity Type

## Enumeration

`ActivityType`

## Fields

| Name | Description |
|  --- | --- |
| `ADJUSTMENT` | A manual adjustment applied to the seller's account by Square. |
| `APP_FEE_REFUND` | A refund for an application fee on a payment. |
| `APP_FEE_REVENUE` | Revenue generated from an application fee on a payment. |
| `AUTOMATIC_SAVINGS` | An automatic transfer from the payment processing balance to the Square Savings account. These are generally proportional to the seller's sales. |
| `AUTOMATIC_SAVINGS_REVERSED` | An automatic transfer from the Square Savings account back to the processing balance. These are generally proportional to the seller's refunds. |
| `CHARGE` | A credit card payment capture. |
| `DEPOSIT_FEE` | A fee assessed because of a deposit, such as an instant deposit. |
| `DEPOSIT_FEE_REVERSED` | Indicates that Square returned a fee that was previously assessed because of a deposit, such as an instant deposit, back to the seller's account. |
| `DISPUTE` | The balance change due to a dispute event. |
| `ESCHEATMENT` | An escheatment entry for remittance. |
| `FEE` | The cost plus adjustment fee. |
| `FREE_PROCESSING` | Square offers free payments processing for a variety of business scenarios, including seller<br>referrals or when Square wants to apologize (for example, for a bug, customer service, or repricing complication).<br>This entry represents a credit to the seller for the purposes of free processing. |
| `HOLD_ADJUSTMENT` | An adjustment made by Square related to holding a payment. |
| `INITIAL_BALANCE_CHANGE` | An external change to a seller's balance (initial, in the sense that it causes the creation of the other activity types, such as a hold and refund). |
| `MONEY_TRANSFER` | The balance change from a money transfer. |
| `MONEY_TRANSFER_REVERSAL` | The reversal of a money transfer. |
| `OPEN_DISPUTE` | The balance change for a chargeback that's been filed. |
| `OTHER` | Any other type that doesn't belong in the rest of the types. |
| `OTHER_ADJUSTMENT` | Any other type of adjustment that doesn't fall under existing types. |
| `PAID_SERVICE_FEE` | A fee paid to a third-party seller. |
| `PAID_SERVICE_FEE_REFUND` | A fee refunded to a third-party seller. |
| `REDEMPTION_CODE` | Repayment for a redemption code. |
| `REFUND` | A refund for an existing card payment. |
| `RELEASE_ADJUSTMENT` | An adjustment made by Square related to releasing a payment. |
| `RESERVE_HOLD` | Fees paid for a funding risk reserve. |
| `RESERVE_RELEASE` | Fees released from a risk reserve. |
| `RETURNED_PAYOUT` | An entry created when Square receives a response for the ACH file that Square sent indicating that the<br>settlement of the original entry failed. |
| `SQUARE_CAPITAL_PAYMENT` | A capital merchant cash advance (MCA) assessment. These are generally proportional to the merchant's sales but can be issued for other reasons related to the MCA. |
| `SQUARE_CAPITAL_REVERSED_PAYMENT` | A capital merchant cash advance (MCA) assessment refund. These are generally proportional to the merchant's refunds but can be issued for other reasons related to the MCA. |
| `SUBSCRIPTION_FEE` | A fee charged for subscription to a Square product. |
| `SUBSCRIPTION_FEE_PAID_REFUND` | A Square subscription fee that's been refunded. |
| `SUBSCRIPTION_FEE_REFUND` | The refund of a previously charged Square product subscription fee. |
| `TAX_ON_FEE` | The tax paid on fee amounts. |
| `THIRD_PARTY_FEE` | Fees collected by a third-party platform. |
| `THIRD_PARTY_FEE_REFUND` | Refunded fees from a third-party platform. |
| `PAYOUT` | The balance change due to a money transfer. Note that this type is never returned by the Payouts API. |
| `AUTOMATIC_BITCOIN_CONVERSIONS` | Indicates that the portion of each payment withheld by Square was automatically converted into bitcoin using Cash App. The seller manages their bitcoin in their Cash App account. |
| `AUTOMATIC_BITCOIN_CONVERSIONS_REVERSED` | Indicates that a withheld payment, which was scheduled to be converted into bitcoin using Cash App, was deposited back to the Square payments balance. |
| `CREDIT_CARD_REPAYMENT` | Indicates that a repayment toward the outstanding balance on the seller's Square credit card was made. |
| `CREDIT_CARD_REPAYMENT_REVERSED` | Indicates that a repayment toward the outstanding balance on the seller's Square credit card was reversed. |
| `LOCAL_OFFERS_CASHBACK` | Cashback amount given by a Square Local Offers seller to their customer for a purchase. |
| `LOCAL_OFFERS_FEE` | A commission fee paid by a Square Local Offers seller to Square for a purchase discovered through Square Local Offers. |
| `PERCENTAGE_PROCESSING_ENROLLMENT` | When activating Percentage Processing, a credit is applied to the seller’s account to offset any negative balance caused by a dispute. |
| `PERCENTAGE_PROCESSING_DEACTIVATION` | Deducting the outstanding Percentage Processing balance from the seller’s account. It's the final installment in repaying the dispute-induced negative balance through percentage processing. |
| `PERCENTAGE_PROCESSING_REPAYMENT` | Withheld funds from a payment to cover a negative balance. It's an installment to repay the amount from a dispute that had been offset during Percentage Processing enrollment. |
| `PERCENTAGE_PROCESSING_REPAYMENT_REVERSED` | The reversal of a percentage processing repayment that happens for example when a refund is issued for a payment. |
| `PROCESSING_FEE` | The processing fee for a payment. If sellers opt for Gross Settlement, i.e., direct bank withdrawal instead of deducting fees from daily sales, the processing fee is recorded separately as a new payout entry, not part of the CHARGE payout entry. |
| `PROCESSING_FEE_REFUND` | The processing fee for a payment refund issued by sellers enrolled in Gross Settlement. The refunded processing fee is recorded separately as a new payout entry, not part of the REFUND payout entry. |
| `UNDO_PROCESSING_FEE_REFUND` | When undoing a processing fee refund in a Gross Settlement payment, this payout entry type is used. |
| `GIFT_CARD_LOAD_FEE` | Fee collected during the sale or reload of a gift card. This fee, which is a portion of the amount loaded on the gift card, is deducted from the merchant's payment balance. |
| `GIFT_CARD_LOAD_FEE_REFUND` | Refund for fee charged during the sale or reload of a gift card. |
| `UNDO_GIFT_CARD_LOAD_FEE_REFUND` | The undo of a refund for a fee charged during the sale or reload of a gift card. |
| `BALANCE_FOLDERS_TRANSFER` | A transfer of funds to a banking folder. In the United States, the folder name is 'Checking Folder'; in Canada, it's 'Balance Folder.' |
| `BALANCE_FOLDERS_TRANSFER_REVERSED` | A reversal of transfer of funds from a banking folder. In the United States, the folder name is 'Checking Folder'; in Canada, it's 'Balance Folder.' |
| `GIFT_CARD_POOL_TRANSFER` | A transfer of gift card funds to a central gift card pool account. In franchises, when gift cards are loaded or reloaded at any location, the money transfers to the franchisor's account. |
| `GIFT_CARD_POOL_TRANSFER_REVERSED` | A reversal of transfer of gift card funds from a central gift card pool account. In franchises, when gift cards are loaded or reloaded at any location, the money transfers to the franchisor's account. |
| `SQUARE_PAYROLL_TRANSFER` | A payroll payment that was transferred to a team member’s bank account. |
| `SQUARE_PAYROLL_TRANSFER_REVERSED` | A payroll payment to a team member’s bank account that was deposited back to the seller’s account by Square. |

