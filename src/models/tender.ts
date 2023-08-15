import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AdditionalRecipient,
  additionalRecipientSchema,
} from './additionalRecipient';
import { Money, moneySchema } from './money';
import {
  TenderBankAccountDetails,
  tenderBankAccountDetailsSchema,
} from './tenderBankAccountDetails';
import {
  TenderBuyNowPayLaterDetails,
  tenderBuyNowPayLaterDetailsSchema,
} from './tenderBuyNowPayLaterDetails';
import { TenderCardDetails, tenderCardDetailsSchema } from './tenderCardDetails';
import { TenderCashDetails, tenderCashDetailsSchema } from './tenderCashDetails';
import {
  TenderSquareAccountDetails,
  tenderSquareAccountDetailsSchema,
} from './tenderSquareAccountDetails';

/** Represents a tender (i.e., a method of payment) used in a Square transaction. */
export interface Tender {
  /** The tender's unique ID. It is the associated payment ID. */
  id?: string;
  /** The ID of the transaction's associated location. */
  locationId?: string | null;
  /** The ID of the tender's associated transaction. */
  transactionId?: string | null;
  /** The timestamp for when the tender was created, in RFC 3339 format. */
  createdAt?: string;
  /** An optional note associated with the tender at the time of payment. */
  note?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  tipMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  processingFeeMoney?: Money;
  /**
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  customerId?: string | null;
  /** Indicates a tender's type. */
  type: string;
  /** Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` */
  cardDetails?: TenderCardDetails;
  /** Represents the details of a tender with `type` `CASH`. */
  cashDetails?: TenderCashDetails;
  /**
   * Represents the details of a tender with `type` `BANK_ACCOUNT`.
   * See [BankAccountPaymentDetails]($m/BankAccountPaymentDetails)
   * for more exposed details of a bank account payment.
   */
  bankAccountDetails?: TenderBankAccountDetails;
  /** Represents the details of a tender with `type` `BUY_NOW_PAY_LATER`. */
  buyNowPayLaterDetails?: TenderBuyNowPayLaterDetails;
  /** Represents the details of a tender with `type` `SQUARE_ACCOUNT`. */
  squareAccountDetails?: TenderSquareAccountDetails;
  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender.
   * For example, fees assessed on the purchase by a third party integration.
   */
  additionalRecipients?: AdditionalRecipient[] | null;
  /**
   * The ID of the [Payment](entity:Payment) that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  paymentId?: string | null;
}

export const tenderSchema: Schema<Tender> = object({
  id: ['id', optional(string())],
  locationId: ['location_id', optional(nullable(string()))],
  transactionId: ['transaction_id', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  note: ['note', optional(nullable(string()))],
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  tipMoney: ['tip_money', optional(lazy(() => moneySchema))],
  processingFeeMoney: [
    'processing_fee_money',
    optional(lazy(() => moneySchema)),
  ],
  customerId: ['customer_id', optional(nullable(string()))],
  type: ['type', string()],
  cardDetails: ['card_details', optional(lazy(() => tenderCardDetailsSchema))],
  cashDetails: ['cash_details', optional(lazy(() => tenderCashDetailsSchema))],
  bankAccountDetails: [
    'bank_account_details',
    optional(lazy(() => tenderBankAccountDetailsSchema)),
  ],
  buyNowPayLaterDetails: [
    'buy_now_pay_later_details',
    optional(lazy(() => tenderBuyNowPayLaterDetailsSchema)),
  ],
  squareAccountDetails: [
    'square_account_details',
    optional(lazy(() => tenderSquareAccountDetailsSchema)),
  ],
  additionalRecipients: [
    'additional_recipients',
    optional(nullable(array(lazy(() => additionalRecipientSchema)))),
  ],
  paymentId: ['payment_id', optional(nullable(string()))],
});
