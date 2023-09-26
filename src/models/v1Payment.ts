import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V1Device, v1DeviceSchema } from './v1Device';
import { V1Money, v1MoneySchema } from './v1Money';
import {
  V1PaymentItemization,
  v1PaymentItemizationSchema,
} from './v1PaymentItemization';
import {
  V1PaymentSurcharge,
  v1PaymentSurchargeSchema,
} from './v1PaymentSurcharge';
import { V1PaymentTax, v1PaymentTaxSchema } from './v1PaymentTax';
import { V1Refund, v1RefundSchema } from './v1Refund';
import { V1Tender, v1TenderSchema } from './v1Tender';

/**
 * A payment represents a paid transaction between a Square merchant and a
 * customer. Payment details are usually available from Connect API endpoints
 * within a few minutes after the transaction completes.
 * Each Payment object includes several fields that end in `_money`. These fields
 * describe the various amounts of money that contribute to the payment total:
 * <ul>
 * <li>
 * Monetary values are <b>positive</b> if they represent an
 * <em>increase</em> in the amount of money the merchant receives (e.g.,
 * <code>tax_money</code>, <code>tip_money</code>).
 * </li>
 * <li>
 * Monetary values are <b>negative</b> if they represent an
 * <em>decrease</em> in the amount of money the merchant receives (e.g.,
 * <code>discount_money</code>, <code>refunded_money</code>).
 * </li>
 * </ul>
 */
export interface V1Payment {
  /** The payment's unique identifier. */
  id?: string;
  /** The unique identifier of the merchant that took the payment. */
  merchantId?: string | null;
  /** The time when the payment was created, in ISO 8601 format. Reflects the time of the first payment if the object represents an incomplete partial payment, and the time of the last or complete payment otherwise. */
  createdAt?: string;
  /** The unique identifier of the Square account that took the payment. */
  creatorId?: string | null;
  device?: V1Device;
  /** The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page. */
  paymentUrl?: string | null;
  /**
   * The URL of the receipt for the payment. Note that for split tender
   * payments, this URL corresponds to the receipt for the first tender
   * listed in the payment's tender field. Each Tender object has its own
   * receipt_url field you can use to get the other receipts associated with
   * a split tender payment.
   */
  receiptUrl?: string | null;
  inclusiveTaxMoney?: V1Money;
  additiveTaxMoney?: V1Money;
  taxMoney?: V1Money;
  tipMoney?: V1Money;
  discountMoney?: V1Money;
  totalCollectedMoney?: V1Money;
  processingFeeMoney?: V1Money;
  netTotalMoney?: V1Money;
  refundedMoney?: V1Money;
  swedishRoundingMoney?: V1Money;
  grossSalesMoney?: V1Money;
  netSalesMoney?: V1Money;
  /** All of the inclusive taxes associated with the payment. */
  inclusiveTax?: V1PaymentTax[] | null;
  /** All of the additive taxes associated with the payment. */
  additiveTax?: V1PaymentTax[] | null;
  /** All of the tenders associated with the payment. */
  tender?: V1Tender[] | null;
  /** All of the refunds applied to the payment. Note that the value of all refunds on a payment can exceed the value of all tenders if a merchant chooses to refund money to a tender after previously accepting returned goods as part of an exchange. */
  refunds?: V1Refund[] | null;
  /** The items purchased in the payment. */
  itemizations?: V1PaymentItemization[] | null;
  surchargeMoney?: V1Money;
  /** A list of all surcharges associated with the payment. */
  surcharges?: V1PaymentSurcharge[] | null;
  /**
   * Indicates whether or not the payment is only partially paid for.
   * If true, this payment will have the tenders collected so far, but the
   * itemizations will be empty until the payment is completed.
   */
  isPartial?: boolean | null;
}

export const v1PaymentSchema: Schema<V1Payment> = object({
  id: ['id', optional(string())],
  merchantId: ['merchant_id', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  creatorId: ['creator_id', optional(nullable(string()))],
  device: ['device', optional(lazy(() => v1DeviceSchema))],
  paymentUrl: ['payment_url', optional(nullable(string()))],
  receiptUrl: ['receipt_url', optional(nullable(string()))],
  inclusiveTaxMoney: [
    'inclusive_tax_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  additiveTaxMoney: ['additive_tax_money', optional(lazy(() => v1MoneySchema))],
  taxMoney: ['tax_money', optional(lazy(() => v1MoneySchema))],
  tipMoney: ['tip_money', optional(lazy(() => v1MoneySchema))],
  discountMoney: ['discount_money', optional(lazy(() => v1MoneySchema))],
  totalCollectedMoney: [
    'total_collected_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  processingFeeMoney: [
    'processing_fee_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  netTotalMoney: ['net_total_money', optional(lazy(() => v1MoneySchema))],
  refundedMoney: ['refunded_money', optional(lazy(() => v1MoneySchema))],
  swedishRoundingMoney: [
    'swedish_rounding_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  grossSalesMoney: ['gross_sales_money', optional(lazy(() => v1MoneySchema))],
  netSalesMoney: ['net_sales_money', optional(lazy(() => v1MoneySchema))],
  inclusiveTax: [
    'inclusive_tax',
    optional(nullable(array(lazy(() => v1PaymentTaxSchema)))),
  ],
  additiveTax: [
    'additive_tax',
    optional(nullable(array(lazy(() => v1PaymentTaxSchema)))),
  ],
  tender: ['tender', optional(nullable(array(lazy(() => v1TenderSchema))))],
  refunds: ['refunds', optional(nullable(array(lazy(() => v1RefundSchema))))],
  itemizations: [
    'itemizations',
    optional(nullable(array(lazy(() => v1PaymentItemizationSchema)))),
  ],
  surchargeMoney: ['surcharge_money', optional(lazy(() => v1MoneySchema))],
  surcharges: [
    'surcharges',
    optional(nullable(array(lazy(() => v1PaymentSurchargeSchema)))),
  ],
  isPartial: ['is_partial', optional(nullable(boolean()))],
});
