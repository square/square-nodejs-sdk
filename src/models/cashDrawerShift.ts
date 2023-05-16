import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CashDrawerDevice, cashDrawerDeviceSchema } from './cashDrawerDevice';
import { Money, moneySchema } from './money';

/**
 * This model gives the details of a cash drawer shift.
 * The cash_payment_money, cash_refund_money, cash_paid_in_money,
 * and cash_paid_out_money fields are all computed by summing their respective
 * event types.
 */
export interface CashDrawerShift {
  /** The shift unique ID. */
  id?: string;
  /** The current state of a cash drawer shift. */
  state?: string;
  /** The time when the shift began, in ISO 8601 format. */
  openedAt?: string | null;
  /** The time when the shift ended, in ISO 8601 format. */
  endedAt?: string | null;
  /** The time when the shift was closed, in ISO 8601 format. */
  closedAt?: string | null;
  /** The free-form text description of a cash drawer by an employee. */
  description?: string | null;
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
  cashPaymentMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  cashRefundsMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  cashPaidInMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  cashPaidOutMoney?: Money;
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
  device?: CashDrawerDevice;
  /** The shift start time in RFC 3339 format. */
  createdAt?: string;
  /** The shift updated at time in RFC 3339 format. */
  updatedAt?: string;
  /** The ID of the location the cash drawer shift belongs to. */
  locationId?: string;
  /**
   * The IDs of all team members that were logged into Square Point of Sale at any
   * point while the cash drawer shift was open.
   */
  teamMemberIds?: string[];
  /** The ID of the team member that started the cash drawer shift. */
  openingTeamMemberId?: string;
  /** The ID of the team member that ended the cash drawer shift. */
  endingTeamMemberId?: string;
  /**
   * The ID of the team member that closed the cash drawer shift by auditing
   * the cash drawer contents.
   */
  closingTeamMemberId?: string;
}

export const cashDrawerShiftSchema: Schema<CashDrawerShift> = object({
  id: ['id', optional(string())],
  state: ['state', optional(string())],
  openedAt: ['opened_at', optional(nullable(string()))],
  endedAt: ['ended_at', optional(nullable(string()))],
  closedAt: ['closed_at', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  openedCashMoney: ['opened_cash_money', optional(lazy(() => moneySchema))],
  cashPaymentMoney: ['cash_payment_money', optional(lazy(() => moneySchema))],
  cashRefundsMoney: ['cash_refunds_money', optional(lazy(() => moneySchema))],
  cashPaidInMoney: ['cash_paid_in_money', optional(lazy(() => moneySchema))],
  cashPaidOutMoney: ['cash_paid_out_money', optional(lazy(() => moneySchema))],
  expectedCashMoney: ['expected_cash_money', optional(lazy(() => moneySchema))],
  closedCashMoney: ['closed_cash_money', optional(lazy(() => moneySchema))],
  device: ['device', optional(lazy(() => cashDrawerDeviceSchema))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  locationId: ['location_id', optional(string())],
  teamMemberIds: ['team_member_ids', optional(array(string()))],
  openingTeamMemberId: ['opening_team_member_id', optional(string())],
  endingTeamMemberId: ['ending_team_member_id', optional(string())],
  closingTeamMemberId: ['closing_team_member_id', optional(string())],
});
