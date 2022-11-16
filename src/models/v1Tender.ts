import {
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/**
 * A tender represents a discrete monetary exchange. Square represents this
 * exchange as a money object with a specific currency and amount, where the
 * amount is given in the smallest denomination of the given currency.
 * Square POS can accept more than one form of tender for a single payment (such
 * as by splitting a bill between a credit card and a gift card). The `tender`
 * field of the Payment object lists all forms of tender used for the payment.
 * Split tender payments behave slightly differently from single tender payments:
 * The receipt_url for a split tender corresponds only to the first tender listed
 * in the tender field. To get the receipt URLs for the remaining tenders, use
 * the receipt_url fields of the corresponding Tender objects.
 * *A note on gift cards**: when a customer purchases a Square gift card from a
 * merchant, the merchant receives the full amount of the gift card in the
 * associated payment.
 * When that gift card is used as a tender, the balance of the gift card is
 * reduced and the merchant receives no funds. A `Tender` object with a type of
 * `SQUARE_GIFT_CARD` indicates a gift card was used for some or all of the
 * associated payment.
 */
export interface V1Tender {
  /** The tender's unique ID. */
  id?: string;
  type?: string;
  /** A human-readable description of the tender. */
  name?: string | null;
  /** The ID of the employee that processed the tender. */
  employeeId?: string | null;
  /** The URL of the receipt for the tender. */
  receiptUrl?: string | null;
  /** The brand of a credit card. */
  cardBrand?: string;
  /** The last four digits of the provided credit card's account number. */
  panSuffix?: string | null;
  entryMethod?: string;
  /** Notes entered by the merchant about the tender at the time of payment, if any. Typically only present for tender with the type: OTHER. */
  paymentNote?: string | null;
  totalMoney?: V1Money;
  tenderedMoney?: V1Money;
  /** The time when the tender was created, in ISO 8601 format. */
  tenderedAt?: string | null;
  /** The time when the tender was settled, in ISO 8601 format. */
  settledAt?: string | null;
  changeBackMoney?: V1Money;
  refundedMoney?: V1Money;
  /** Indicates whether or not the tender is associated with an exchange. If is_exchange is true, the tender represents the value of goods returned in an exchange not the actual money paid. The exchange value reduces the tender amounts needed to pay for items purchased in the exchange. */
  isExchange?: boolean | null;
}

export const v1TenderSchema: Schema<V1Tender> = object({
  id: ['id', optional(string())],
  type: ['type', optional(string())],
  name: ['name', optional(nullable(string()))],
  employeeId: ['employee_id', optional(nullable(string()))],
  receiptUrl: ['receipt_url', optional(nullable(string()))],
  cardBrand: ['card_brand', optional(string())],
  panSuffix: ['pan_suffix', optional(nullable(string()))],
  entryMethod: ['entry_method', optional(string())],
  paymentNote: ['payment_note', optional(nullable(string()))],
  totalMoney: ['total_money', optional(lazy(() => v1MoneySchema))],
  tenderedMoney: ['tendered_money', optional(lazy(() => v1MoneySchema))],
  tenderedAt: ['tendered_at', optional(nullable(string()))],
  settledAt: ['settled_at', optional(nullable(string()))],
  changeBackMoney: ['change_back_money', optional(lazy(() => v1MoneySchema))],
  refundedMoney: ['refunded_money', optional(lazy(() => v1MoneySchema))],
  isExchange: ['is_exchange', optional(nullable(boolean()))],
});
