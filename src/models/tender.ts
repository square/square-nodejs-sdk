import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  AdditionalRecipient,
  additionalRecipientSchema,
} from './additionalRecipient';
import { Money, moneySchema } from './money';
import {
  TenderCardDetails,
  tenderCardDetailsSchema,
} from './tenderCardDetails';
import {
  TenderCashDetails,
  tenderCashDetailsSchema,
} from './tenderCashDetails';

/** Represents a tender (i.e., a method of payment) used in a Square transaction. */
export interface Tender {
  /** The tender's unique ID. */
  id?: string;
  /** The ID of the transaction's associated location. */
  locationId?: string;
  /** The ID of the tender's associated transaction. */
  transactionId?: string;
  /** The timestamp for when the tender was created, in RFC 3339 format. */
  createdAt?: string;
  /** An optional note associated with the tender at the time of payment. */
  note?: string;
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
  customerId?: string;
  /** Indicates a tender's type. */
  type: string;
  /** Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` */
  cardDetails?: TenderCardDetails;
  /** Represents the details of a tender with `type` `CASH`. */
  cashDetails?: TenderCashDetails;
  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender.
   * For example, fees assessed on the purchase by a third party integration.
   */
  additionalRecipients?: AdditionalRecipient[];
  /**
   * The ID of the [Payment](#type-payment) that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  paymentId?: string;
}

export const tenderSchema: Schema<Tender> = object({
  id: ['id', optional(string())],
  locationId: ['location_id', optional(string())],
  transactionId: ['transaction_id', optional(string())],
  createdAt: ['created_at', optional(string())],
  note: ['note', optional(string())],
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  tipMoney: ['tip_money', optional(lazy(() => moneySchema))],
  processingFeeMoney: [
    'processing_fee_money',
    optional(lazy(() => moneySchema)),
  ],
  customerId: ['customer_id', optional(string())],
  type: ['type', string()],
  cardDetails: ['card_details', optional(lazy(() => tenderCardDetailsSchema))],
  cashDetails: ['cash_details', optional(lazy(() => tenderCashDetailsSchema))],
  additionalRecipients: [
    'additional_recipients',
    optional(array(lazy(() => additionalRecipientSchema))),
  ],
  paymentId: ['payment_id', optional(string())],
});
