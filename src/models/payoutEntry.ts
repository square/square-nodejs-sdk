import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';
import {
  PaymentBalanceActivityAppFeeRefundDetail,
  paymentBalanceActivityAppFeeRefundDetailSchema,
} from './paymentBalanceActivityAppFeeRefundDetail';
import {
  PaymentBalanceActivityAppFeeRevenueDetail,
  paymentBalanceActivityAppFeeRevenueDetailSchema,
} from './paymentBalanceActivityAppFeeRevenueDetail';
import {
  PaymentBalanceActivityAutomaticSavingsDetail,
  paymentBalanceActivityAutomaticSavingsDetailSchema,
} from './paymentBalanceActivityAutomaticSavingsDetail';
import {
  PaymentBalanceActivityAutomaticSavingsReversedDetail,
  paymentBalanceActivityAutomaticSavingsReversedDetailSchema,
} from './paymentBalanceActivityAutomaticSavingsReversedDetail';
import {
  PaymentBalanceActivityChargeDetail,
  paymentBalanceActivityChargeDetailSchema,
} from './paymentBalanceActivityChargeDetail';
import {
  PaymentBalanceActivityDepositFeeDetail,
  paymentBalanceActivityDepositFeeDetailSchema,
} from './paymentBalanceActivityDepositFeeDetail';
import {
  PaymentBalanceActivityDisputeDetail,
  paymentBalanceActivityDisputeDetailSchema,
} from './paymentBalanceActivityDisputeDetail';
import {
  PaymentBalanceActivityFeeDetail,
  paymentBalanceActivityFeeDetailSchema,
} from './paymentBalanceActivityFeeDetail';
import {
  PaymentBalanceActivityFreeProcessingDetail,
  paymentBalanceActivityFreeProcessingDetailSchema,
} from './paymentBalanceActivityFreeProcessingDetail';
import {
  PaymentBalanceActivityHoldAdjustmentDetail,
  paymentBalanceActivityHoldAdjustmentDetailSchema,
} from './paymentBalanceActivityHoldAdjustmentDetail';
import {
  PaymentBalanceActivityOpenDisputeDetail,
  paymentBalanceActivityOpenDisputeDetailSchema,
} from './paymentBalanceActivityOpenDisputeDetail';
import {
  PaymentBalanceActivityOtherAdjustmentDetail,
  paymentBalanceActivityOtherAdjustmentDetailSchema,
} from './paymentBalanceActivityOtherAdjustmentDetail';
import {
  PaymentBalanceActivityOtherDetail,
  paymentBalanceActivityOtherDetailSchema,
} from './paymentBalanceActivityOtherDetail';
import {
  PaymentBalanceActivityRefundDetail,
  paymentBalanceActivityRefundDetailSchema,
} from './paymentBalanceActivityRefundDetail';
import {
  PaymentBalanceActivityReleaseAdjustmentDetail,
  paymentBalanceActivityReleaseAdjustmentDetailSchema,
} from './paymentBalanceActivityReleaseAdjustmentDetail';
import {
  PaymentBalanceActivityReserveHoldDetail,
  paymentBalanceActivityReserveHoldDetailSchema,
} from './paymentBalanceActivityReserveHoldDetail';
import {
  PaymentBalanceActivityReserveReleaseDetail,
  paymentBalanceActivityReserveReleaseDetailSchema,
} from './paymentBalanceActivityReserveReleaseDetail';
import {
  PaymentBalanceActivitySquareCapitalPaymentDetail,
  paymentBalanceActivitySquareCapitalPaymentDetailSchema,
} from './paymentBalanceActivitySquareCapitalPaymentDetail';
import {
  PaymentBalanceActivitySquareCapitalReversedPaymentDetail,
  paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema,
} from './paymentBalanceActivitySquareCapitalReversedPaymentDetail';
import {
  PaymentBalanceActivityTaxOnFeeDetail,
  paymentBalanceActivityTaxOnFeeDetailSchema,
} from './paymentBalanceActivityTaxOnFeeDetail';
import {
  PaymentBalanceActivityThirdPartyFeeDetail,
  paymentBalanceActivityThirdPartyFeeDetailSchema,
} from './paymentBalanceActivityThirdPartyFeeDetail';
import {
  PaymentBalanceActivityThirdPartyFeeRefundDetail,
  paymentBalanceActivityThirdPartyFeeRefundDetailSchema,
} from './paymentBalanceActivityThirdPartyFeeRefundDetail';

/**
 * One or more PayoutEntries that make up a Payout. Each one has a date, amount, and type of activity.
 * The total amount of the payout will equal the sum of the payout entries for a batch payout
 */
export interface PayoutEntry {
  /** A unique ID for the payout entry. */
  id: string;
  /** The ID of the payout entries’ associated payout. */
  payoutId: string;
  /** The timestamp of when the payout entry affected the balance, in RFC 3339 format. */
  effectiveAt?: string | null;
  type?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  grossAmountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  feeAmountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  netAmountMoney?: Money;
  typeAppFeeRevenueDetails?: PaymentBalanceActivityAppFeeRevenueDetail;
  typeAppFeeRefundDetails?: PaymentBalanceActivityAppFeeRefundDetail;
  typeAutomaticSavingsDetails?: PaymentBalanceActivityAutomaticSavingsDetail;
  typeAutomaticSavingsReversedDetails?: PaymentBalanceActivityAutomaticSavingsReversedDetail;
  typeChargeDetails?: PaymentBalanceActivityChargeDetail;
  typeDepositFeeDetails?: PaymentBalanceActivityDepositFeeDetail;
  typeDisputeDetails?: PaymentBalanceActivityDisputeDetail;
  typeFeeDetails?: PaymentBalanceActivityFeeDetail;
  typeFreeProcessingDetails?: PaymentBalanceActivityFreeProcessingDetail;
  typeHoldAdjustmentDetails?: PaymentBalanceActivityHoldAdjustmentDetail;
  typeOpenDisputeDetails?: PaymentBalanceActivityOpenDisputeDetail;
  typeOtherDetails?: PaymentBalanceActivityOtherDetail;
  typeOtherAdjustmentDetails?: PaymentBalanceActivityOtherAdjustmentDetail;
  typeRefundDetails?: PaymentBalanceActivityRefundDetail;
  typeReleaseAdjustmentDetails?: PaymentBalanceActivityReleaseAdjustmentDetail;
  typeReserveHoldDetails?: PaymentBalanceActivityReserveHoldDetail;
  typeReserveReleaseDetails?: PaymentBalanceActivityReserveReleaseDetail;
  typeSquareCapitalPaymentDetails?: PaymentBalanceActivitySquareCapitalPaymentDetail;
  typeSquareCapitalReversedPaymentDetails?: PaymentBalanceActivitySquareCapitalReversedPaymentDetail;
  typeTaxOnFeeDetails?: PaymentBalanceActivityTaxOnFeeDetail;
  typeThirdPartyFeeDetails?: PaymentBalanceActivityThirdPartyFeeDetail;
  typeThirdPartyFeeRefundDetails?: PaymentBalanceActivityThirdPartyFeeRefundDetail;
}

export const payoutEntrySchema: Schema<PayoutEntry> = object({
  id: ['id', string()],
  payoutId: ['payout_id', string()],
  effectiveAt: ['effective_at', optional(nullable(string()))],
  type: ['type', optional(string())],
  grossAmountMoney: ['gross_amount_money', optional(lazy(() => moneySchema))],
  feeAmountMoney: ['fee_amount_money', optional(lazy(() => moneySchema))],
  netAmountMoney: ['net_amount_money', optional(lazy(() => moneySchema))],
  typeAppFeeRevenueDetails: [
    'type_app_fee_revenue_details',
    optional(lazy(() => paymentBalanceActivityAppFeeRevenueDetailSchema)),
  ],
  typeAppFeeRefundDetails: [
    'type_app_fee_refund_details',
    optional(lazy(() => paymentBalanceActivityAppFeeRefundDetailSchema)),
  ],
  typeAutomaticSavingsDetails: [
    'type_automatic_savings_details',
    optional(lazy(() => paymentBalanceActivityAutomaticSavingsDetailSchema)),
  ],
  typeAutomaticSavingsReversedDetails: [
    'type_automatic_savings_reversed_details',
    optional(
      lazy(() => paymentBalanceActivityAutomaticSavingsReversedDetailSchema)
    ),
  ],
  typeChargeDetails: [
    'type_charge_details',
    optional(lazy(() => paymentBalanceActivityChargeDetailSchema)),
  ],
  typeDepositFeeDetails: [
    'type_deposit_fee_details',
    optional(lazy(() => paymentBalanceActivityDepositFeeDetailSchema)),
  ],
  typeDisputeDetails: [
    'type_dispute_details',
    optional(lazy(() => paymentBalanceActivityDisputeDetailSchema)),
  ],
  typeFeeDetails: [
    'type_fee_details',
    optional(lazy(() => paymentBalanceActivityFeeDetailSchema)),
  ],
  typeFreeProcessingDetails: [
    'type_free_processing_details',
    optional(lazy(() => paymentBalanceActivityFreeProcessingDetailSchema)),
  ],
  typeHoldAdjustmentDetails: [
    'type_hold_adjustment_details',
    optional(lazy(() => paymentBalanceActivityHoldAdjustmentDetailSchema)),
  ],
  typeOpenDisputeDetails: [
    'type_open_dispute_details',
    optional(lazy(() => paymentBalanceActivityOpenDisputeDetailSchema)),
  ],
  typeOtherDetails: [
    'type_other_details',
    optional(lazy(() => paymentBalanceActivityOtherDetailSchema)),
  ],
  typeOtherAdjustmentDetails: [
    'type_other_adjustment_details',
    optional(lazy(() => paymentBalanceActivityOtherAdjustmentDetailSchema)),
  ],
  typeRefundDetails: [
    'type_refund_details',
    optional(lazy(() => paymentBalanceActivityRefundDetailSchema)),
  ],
  typeReleaseAdjustmentDetails: [
    'type_release_adjustment_details',
    optional(lazy(() => paymentBalanceActivityReleaseAdjustmentDetailSchema)),
  ],
  typeReserveHoldDetails: [
    'type_reserve_hold_details',
    optional(lazy(() => paymentBalanceActivityReserveHoldDetailSchema)),
  ],
  typeReserveReleaseDetails: [
    'type_reserve_release_details',
    optional(lazy(() => paymentBalanceActivityReserveReleaseDetailSchema)),
  ],
  typeSquareCapitalPaymentDetails: [
    'type_square_capital_payment_details',
    optional(
      lazy(() => paymentBalanceActivitySquareCapitalPaymentDetailSchema)
    ),
  ],
  typeSquareCapitalReversedPaymentDetails: [
    'type_square_capital_reversed_payment_details',
    optional(
      lazy(() => paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema)
    ),
  ],
  typeTaxOnFeeDetails: [
    'type_tax_on_fee_details',
    optional(lazy(() => paymentBalanceActivityTaxOnFeeDetailSchema)),
  ],
  typeThirdPartyFeeDetails: [
    'type_third_party_fee_details',
    optional(lazy(() => paymentBalanceActivityThirdPartyFeeDetailSchema)),
  ],
  typeThirdPartyFeeRefundDetails: [
    'type_third_party_fee_refund_details',
    optional(lazy(() => paymentBalanceActivityThirdPartyFeeRefundDetailSchema)),
  ],
});
