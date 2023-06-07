import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Destination, destinationSchema } from './destination';
import { Money, moneySchema } from './money';
import { PayoutFee, payoutFeeSchema } from './payoutFee';

/**
 * An accounting of the amount owed the seller and record of the actual transfer to their
 * external bank account or to the Square balance.
 */
export interface Payout {
  /** A unique ID for the payout. */
  id: string;
  /** Payout status types */
  status?: string;
  /** The ID of the location associated with the payout. */
  locationId: string;
  /** The timestamp of when the payout was created and submitted for deposit to the seller's banking destination, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the payout was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
  /** Information about the destination against which the payout was made. */
  destination?: Destination;
  /**
   * The version number, which is incremented each time an update is made to this payout record.
   * The version number helps developers receive event notifications or feeds out of order.
   */
  version?: number;
  /**
   * The type of payout: “BATCH” or “SIMPLE”.
   * BATCH payouts include a list of payout entries that can be considered settled.
   * SIMPLE payouts do not have any payout entries associated with them
   * and will show up as one of the payout entries in a future BATCH payout.
   */
  type?: string;
  /** A list of transfer fees and any taxes on the fees assessed by Square for this payout. */
  payoutFee?: PayoutFee[] | null;
  /** The calendar date, in ISO 8601 format (YYYY-MM-DD), when the payout is due to arrive in the seller’s banking destination. */
  arrivalDate?: string | null;
  /** A unique ID for each `Payout` object that might also appear on the seller’s bank statement. You can use this ID to automate the process of reconciling each payout with the corresponding line item on the bank statement. */
  endToEndId?: string | null;
}

export const payoutSchema: Schema<Payout> = object({
  id: ['id', string()],
  status: ['status', optional(string())],
  locationId: ['location_id', string()],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  destination: ['destination', optional(lazy(() => destinationSchema))],
  version: ['version', optional(number())],
  type: ['type', optional(string())],
  payoutFee: [
    'payout_fee',
    optional(nullable(array(lazy(() => payoutFeeSchema)))),
  ],
  arrivalDate: ['arrival_date', optional(nullable(string()))],
  endToEndId: ['end_to_end_id', optional(nullable(string()))],
});
