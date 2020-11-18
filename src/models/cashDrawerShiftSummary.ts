import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * The summary of a closed cash drawer shift.
 * This model contains only the money counted to start a cash drawer shift, counted
 * at the end of the shift, and the amount that should be in the drawer at shift
 * end based on summing all cash drawer shift events.
 */
export interface CashDrawerShiftSummary {
  /** The shift unique ID. */
  id?: string;
  /** The current state of a cash drawer shift. */
  state?: string;
  /** The shift start time in ISO 8601 format. */
  openedAt?: string;
  /** The shift end time in ISO 8601 format. */
  endedAt?: string;
  /** The shift close time in ISO 8601 format. */
  closedAt?: string;
  /** An employee free-text description of a cash drawer shift. */
  description?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  openedCashMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  expectedCashMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  closedCashMoney?: Money;
}

export const cashDrawerShiftSummarySchema: Schema<CashDrawerShiftSummary> = object(
  {
    id: ['id', optional(string())],
    state: ['state', optional(string())],
    openedAt: ['opened_at', optional(string())],
    endedAt: ['ended_at', optional(string())],
    closedAt: ['closed_at', optional(string())],
    description: ['description', optional(string())],
    openedCashMoney: ['opened_cash_money', optional(lazy(() => moneySchema))],
    expectedCashMoney: [
      'expected_cash_money',
      optional(lazy(() => moneySchema)),
    ],
    closedCashMoney: ['closed_cash_money', optional(lazy(() => moneySchema))],
  }
);
