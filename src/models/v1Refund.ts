import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';
import {
  V1PaymentSurcharge,
  v1PaymentSurchargeSchema,
} from './v1PaymentSurcharge';
import { V1PaymentTax, v1PaymentTaxSchema } from './v1PaymentTax';

/** V1Refund */
export interface V1Refund {
  type?: string;
  /** The merchant-specified reason for the refund. */
  reason?: string;
  refundedMoney?: V1Money;
  refundedProcessingFeeMoney?: V1Money;
  refundedTaxMoney?: V1Money;
  refundedAdditiveTaxMoney?: V1Money;
  /** All of the additive taxes associated with the refund. */
  refundedAdditiveTax?: V1PaymentTax[];
  refundedInclusiveTaxMoney?: V1Money;
  /** All of the inclusive taxes associated with the refund. */
  refundedInclusiveTax?: V1PaymentTax[];
  refundedTipMoney?: V1Money;
  refundedDiscountMoney?: V1Money;
  refundedSurchargeMoney?: V1Money;
  /** A list of all surcharges associated with the refund. */
  refundedSurcharges?: V1PaymentSurcharge[];
  /** The time when the merchant initiated the refund for Square to process, in ISO 8601 format. */
  createdAt?: string;
  /** The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. */
  processedAt?: string;
  /** A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds (is_exchange == true), payment_id is the ID of the original payment ID even if the payment includes other tenders. */
  paymentId?: string;
  merchantId?: string;
  /** Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects the value of goods returned in the exchange not the total money refunded. */
  isExchange?: boolean;
}

export const v1RefundSchema: Schema<V1Refund> = object({
  type: ['type', optional(string())],
  reason: ['reason', optional(string())],
  refundedMoney: ['refunded_money', optional(lazy(() => v1MoneySchema))],
  refundedProcessingFeeMoney: [
    'refunded_processing_fee_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  refundedTaxMoney: ['refunded_tax_money', optional(lazy(() => v1MoneySchema))],
  refundedAdditiveTaxMoney: [
    'refunded_additive_tax_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  refundedAdditiveTax: [
    'refunded_additive_tax',
    optional(array(lazy(() => v1PaymentTaxSchema))),
  ],
  refundedInclusiveTaxMoney: [
    'refunded_inclusive_tax_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  refundedInclusiveTax: [
    'refunded_inclusive_tax',
    optional(array(lazy(() => v1PaymentTaxSchema))),
  ],
  refundedTipMoney: ['refunded_tip_money', optional(lazy(() => v1MoneySchema))],
  refundedDiscountMoney: [
    'refunded_discount_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  refundedSurchargeMoney: [
    'refunded_surcharge_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  refundedSurcharges: [
    'refunded_surcharges',
    optional(array(lazy(() => v1PaymentSurchargeSchema))),
  ],
  createdAt: ['created_at', optional(string())],
  processedAt: ['processed_at', optional(string())],
  paymentId: ['payment_id', optional(string())],
  merchantId: ['merchant_id', optional(string())],
  isExchange: ['is_exchange', optional(boolean())],
});
