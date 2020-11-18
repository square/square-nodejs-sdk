import { array, lazy, object, optional, Schema, string } from '../schema';
import { Device, deviceSchema } from './device';
import {
  V1CashDrawerEvent,
  v1CashDrawerEventSchema,
} from './v1CashDrawerEvent';
import { V1Money, v1MoneySchema } from './v1Money';

/** Contains details for a single cash drawer shift. */
export interface V1CashDrawerShift {
  /** The shift's unique ID. */
  id?: string;
  eventType?: string;
  /** The time when the shift began, in ISO 8601 format. */
  openedAt?: string;
  /** The time when the shift ended, in ISO 8601 format. */
  endedAt?: string;
  /** The time when the shift was closed, in ISO 8601 format. */
  closedAt?: string;
  /** The IDs of all employees that were logged into Square Register at some point during the cash drawer shift. */
  employeeIds?: string[];
  /** The ID of the employee that started the cash drawer shift. */
  openingEmployeeId?: string;
  /** The ID of the employee that ended the cash drawer shift. */
  endingEmployeeId?: string;
  /** The ID of the employee that closed the cash drawer shift by auditing the cash drawer's contents. */
  closingEmployeeId?: string;
  /** A description of the cash drawer shift. */
  description?: string;
  startingCashMoney?: V1Money;
  cashPaymentMoney?: V1Money;
  cashRefundsMoney?: V1Money;
  cashPaidInMoney?: V1Money;
  cashPaidOutMoney?: V1Money;
  expectedCashMoney?: V1Money;
  closedCashMoney?: V1Money;
  device?: Device;
  /** All of the events (payments, refunds, and so on) that involved the cash drawer during the shift. */
  events?: V1CashDrawerEvent[];
}

export const v1CashDrawerShiftSchema: Schema<V1CashDrawerShift> = object({
  id: ['id', optional(string())],
  eventType: ['event_type', optional(string())],
  openedAt: ['opened_at', optional(string())],
  endedAt: ['ended_at', optional(string())],
  closedAt: ['closed_at', optional(string())],
  employeeIds: ['employee_ids', optional(array(string()))],
  openingEmployeeId: ['opening_employee_id', optional(string())],
  endingEmployeeId: ['ending_employee_id', optional(string())],
  closingEmployeeId: ['closing_employee_id', optional(string())],
  description: ['description', optional(string())],
  startingCashMoney: [
    'starting_cash_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  cashPaymentMoney: ['cash_payment_money', optional(lazy(() => v1MoneySchema))],
  cashRefundsMoney: ['cash_refunds_money', optional(lazy(() => v1MoneySchema))],
  cashPaidInMoney: ['cash_paid_in_money', optional(lazy(() => v1MoneySchema))],
  cashPaidOutMoney: [
    'cash_paid_out_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  expectedCashMoney: [
    'expected_cash_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  closedCashMoney: ['closed_cash_money', optional(lazy(() => v1MoneySchema))],
  device: ['device', optional(lazy(() => deviceSchema))],
  events: ['events', optional(array(lazy(() => v1CashDrawerEventSchema)))],
});
