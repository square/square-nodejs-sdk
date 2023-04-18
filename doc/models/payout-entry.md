
# Payout Entry

One or more PayoutEntries that make up a Payout. Each one has a date, amount, and type of activity.
The total amount of the payout will equal the sum of the payout entries for a batch payout

## Structure

`PayoutEntry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A unique ID for the payout entry.<br>**Constraints**: *Minimum Length*: `1` |
| `payoutId` | `string` | Required | The ID of the payout entries’ associated payout.<br>**Constraints**: *Minimum Length*: `1` |
| `effectiveAt` | `string \| undefined` | Optional | The timestamp of when the payout entry affected the balance, in RFC 3339 format. |
| `type` | [`string \| undefined`](../../doc/models/activity-type.md) | Optional | - |
| `grossAmountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `feeAmountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `netAmountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `typeAppFeeRevenueDetails` | [`PaymentBalanceActivityAppFeeRevenueDetail \| undefined`](../../doc/models/payment-balance-activity-app-fee-revenue-detail.md) | Optional | - |
| `typeAppFeeRefundDetails` | [`PaymentBalanceActivityAppFeeRefundDetail \| undefined`](../../doc/models/payment-balance-activity-app-fee-refund-detail.md) | Optional | - |
| `typeAutomaticSavingsDetails` | [`PaymentBalanceActivityAutomaticSavingsDetail \| undefined`](../../doc/models/payment-balance-activity-automatic-savings-detail.md) | Optional | - |
| `typeAutomaticSavingsReversedDetails` | [`PaymentBalanceActivityAutomaticSavingsReversedDetail \| undefined`](../../doc/models/payment-balance-activity-automatic-savings-reversed-detail.md) | Optional | - |
| `typeChargeDetails` | [`PaymentBalanceActivityChargeDetail \| undefined`](../../doc/models/payment-balance-activity-charge-detail.md) | Optional | - |
| `typeDepositFeeDetails` | [`PaymentBalanceActivityDepositFeeDetail \| undefined`](../../doc/models/payment-balance-activity-deposit-fee-detail.md) | Optional | - |
| `typeDisputeDetails` | [`PaymentBalanceActivityDisputeDetail \| undefined`](../../doc/models/payment-balance-activity-dispute-detail.md) | Optional | - |
| `typeFeeDetails` | [`PaymentBalanceActivityFeeDetail \| undefined`](../../doc/models/payment-balance-activity-fee-detail.md) | Optional | - |
| `typeFreeProcessingDetails` | [`PaymentBalanceActivityFreeProcessingDetail \| undefined`](../../doc/models/payment-balance-activity-free-processing-detail.md) | Optional | - |
| `typeHoldAdjustmentDetails` | [`PaymentBalanceActivityHoldAdjustmentDetail \| undefined`](../../doc/models/payment-balance-activity-hold-adjustment-detail.md) | Optional | - |
| `typeOpenDisputeDetails` | [`PaymentBalanceActivityOpenDisputeDetail \| undefined`](../../doc/models/payment-balance-activity-open-dispute-detail.md) | Optional | - |
| `typeOtherDetails` | [`PaymentBalanceActivityOtherDetail \| undefined`](../../doc/models/payment-balance-activity-other-detail.md) | Optional | - |
| `typeOtherAdjustmentDetails` | [`PaymentBalanceActivityOtherAdjustmentDetail \| undefined`](../../doc/models/payment-balance-activity-other-adjustment-detail.md) | Optional | - |
| `typeRefundDetails` | [`PaymentBalanceActivityRefundDetail \| undefined`](../../doc/models/payment-balance-activity-refund-detail.md) | Optional | - |
| `typeReleaseAdjustmentDetails` | [`PaymentBalanceActivityReleaseAdjustmentDetail \| undefined`](../../doc/models/payment-balance-activity-release-adjustment-detail.md) | Optional | - |
| `typeReserveHoldDetails` | [`PaymentBalanceActivityReserveHoldDetail \| undefined`](../../doc/models/payment-balance-activity-reserve-hold-detail.md) | Optional | - |
| `typeReserveReleaseDetails` | [`PaymentBalanceActivityReserveReleaseDetail \| undefined`](../../doc/models/payment-balance-activity-reserve-release-detail.md) | Optional | - |
| `typeSquareCapitalPaymentDetails` | [`PaymentBalanceActivitySquareCapitalPaymentDetail \| undefined`](../../doc/models/payment-balance-activity-square-capital-payment-detail.md) | Optional | - |
| `typeSquareCapitalReversedPaymentDetails` | [`PaymentBalanceActivitySquareCapitalReversedPaymentDetail \| undefined`](../../doc/models/payment-balance-activity-square-capital-reversed-payment-detail.md) | Optional | - |
| `typeTaxOnFeeDetails` | [`PaymentBalanceActivityTaxOnFeeDetail \| undefined`](../../doc/models/payment-balance-activity-tax-on-fee-detail.md) | Optional | - |
| `typeThirdPartyFeeDetails` | [`PaymentBalanceActivityThirdPartyFeeDetail \| undefined`](../../doc/models/payment-balance-activity-third-party-fee-detail.md) | Optional | - |
| `typeThirdPartyFeeRefundDetails` | [`PaymentBalanceActivityThirdPartyFeeRefundDetail \| undefined`](../../doc/models/payment-balance-activity-third-party-fee-refund-detail.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "payout_id": "payout_id6",
  "effective_at": "effective_at6",
  "type": "CHARGE",
  "gross_amount_money": {
    "amount": 186,
    "currency": "SVC"
  },
  "fee_amount_money": {
    "amount": 126,
    "currency": "ANG"
  },
  "net_amount_money": {
    "amount": 6,
    "currency": "AOA"
  },
  "type_app_fee_revenue_details": {
    "payment_id": "payment_id0",
    "location_id": "location_id4"
  },
  "type_app_fee_refund_details": {
    "payment_id": "payment_id6",
    "refund_id": "refund_id0",
    "location_id": "location_id0"
  },
  "type_automatic_savings_details": {
    "payment_id": "payment_id4",
    "payout_id": "payout_id0"
  },
  "type_automatic_savings_reversed_details": {
    "payment_id": "payment_id8",
    "payout_id": "payout_id4"
  },
  "type_charge_details": {
    "payment_id": "payment_id4"
  },
  "type_deposit_fee_details": {
    "payout_id": "payout_id8"
  },
  "type_dispute_details": {
    "payment_id": "payment_id4",
    "dispute_id": "dispute_id6"
  },
  "type_fee_details": {
    "payment_id": "payment_id8"
  },
  "type_free_processing_details": {
    "payment_id": "payment_id4"
  },
  "type_hold_adjustment_details": {
    "payment_id": "payment_id8"
  },
  "type_open_dispute_details": {
    "payment_id": "payment_id6",
    "dispute_id": "dispute_id8"
  },
  "type_other_details": {
    "payment_id": "payment_id8"
  },
  "type_other_adjustment_details": {
    "payment_id": "payment_id6"
  },
  "type_refund_details": {
    "payment_id": "payment_id8",
    "refund_id": "refund_id2"
  },
  "type_release_adjustment_details": {
    "payment_id": "payment_id4"
  },
  "type_reserve_hold_details": {
    "payment_id": "payment_id4"
  },
  "type_reserve_release_details": {
    "payment_id": "payment_id6"
  },
  "type_square_capital_payment_details": {
    "payment_id": "payment_id2"
  },
  "type_square_capital_reversed_payment_details": {
    "payment_id": "payment_id6"
  },
  "type_tax_on_fee_details": {
    "payment_id": "payment_id4",
    "tax_rate_description": "tax_rate_description2"
  },
  "type_third_party_fee_details": {
    "payment_id": "payment_id2"
  },
  "type_third_party_fee_refund_details": {
    "payment_id": "payment_id8",
    "refund_id": "refund_id2"
  }
}
```

