import { array, lazy, object, optional, Schema } from '../schema';
import { CashDrawerShift, cashDrawerShiftSchema } from './cashDrawerShift';
import { Error, errorSchema } from './error';

export interface RetrieveCashDrawerShiftResponse {
  /**
   * This model gives the details of a cash drawer shift.
   * The cash_payment_money, cash_refund_money, cash_paid_in_money,
   * and cash_paid_out_money fields are all computed by summing their respective
   * event types.
   */
  cashDrawerShift?: CashDrawerShift;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveCashDrawerShiftResponseSchema: Schema<RetrieveCashDrawerShiftResponse> = object(
  {
    cashDrawerShift: [
      'cash_drawer_shift',
      optional(lazy(() => cashDrawerShiftSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
