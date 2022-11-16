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
  /**
   * The IDs of all employees that were logged into Square Point of Sale at any
   * point while the cash drawer shift was open.
   */
  employeeIds?: string[] | null;
  /** The ID of the employee that started the cash drawer shift. */
  openingEmployeeId?: string | null;
  /** The ID of the employee that ended the cash drawer shift. */
  endingEmployeeId?: string | null;
  /**
   * The ID of the employee that closed the cash drawer shift by auditing
   * the cash drawer contents.
   */
  closingEmployeeId?: string | null;
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
}

export const cashDrawerShiftSchema: Schema<CashDrawerShift> = object({
  id: ['id', optional(string())],
  state: ['state', optional(string())],
  openedAt: ['opened_at', optional(nullable(string()))],
  endedAt: ['ended_at', optional(nullable(string()))],
  closedAt: ['closed_at', optional(nullable(string()))],
  employeeIds: ['employee_ids', optional(nullable(array(string())))],
  openingEmployeeId: ['opening_employee_id', optional(nullable(string()))],
  endingEmployeeId: ['ending_employee_id', optional(nullable(string()))],
  closingEmployeeId: ['closing_employee_id', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  openedCashMoney: ['opened_cash_money', optional(lazy(() => moneySchema))],
  cashPaymentMoney: ['cash_payment_money', optional(lazy(() => moneySchema))],
  cashRefundsMoney: ['cash_refunds_money', optional(lazy(() => moneySchema))],
  cashPaidInMoney: ['cash_paid_in_money', optional(lazy(() => moneySchema))],
  cashPaidOutMoney: ['cash_paid_out_money', optional(lazy(() => moneySchema))],
  expectedCashMoney: ['expected_cash_money', optional(lazy(() => moneySchema))],
  closedCashMoney: ['closed_cash_money', optional(lazy(() => moneySchema))],
  device: ['device', optional(lazy(() => cashDrawerDeviceSchema))],
});
