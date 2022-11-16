import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * Stores details about an external payment. Contains only non-confidential information.
 * For more information, see
 * [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
 */
export interface ExternalPaymentDetails {
  /**
   * The type of external payment the seller received. It can be one of the following:
   * - CHECK - Paid using a physical check.
   * - BANK_TRANSFER - Paid using external bank transfer.
   * - OTHER\_GIFT\_CARD - Paid using a non-Square gift card.
   * - CRYPTO - Paid using a crypto currency.
   * - SQUARE_CASH - Paid using Square Cash App.
   * - SOCIAL - Paid using peer-to-peer payment applications.
   * - EXTERNAL - A third-party application gathered this payment outside of Square.
   * - EMONEY - Paid using an E-money provider.
   * - CARD - A credit or debit card that Square does not support.
   * - STORED_BALANCE - Use for house accounts, store credit, and so forth.
   * - FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals
   * - OTHER - A type not listed here.
   */
  type: string;
  /**
   * A description of the external payment source. For example,
   * "Food Delivery Service".
   */
  source: string;
  /** An ID to associate the payment to its originating source. */
  sourceId?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  sourceFeeMoney?: Money;
}

export const externalPaymentDetailsSchema: Schema<ExternalPaymentDetails> = object(
  {
    type: ['type', string()],
    source: ['source', string()],
    sourceId: ['source_id', optional(nullable(string()))],
    sourceFeeMoney: ['source_fee_money', optional(lazy(() => moneySchema))],
  }
);
