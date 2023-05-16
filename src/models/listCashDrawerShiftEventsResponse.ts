import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  CashDrawerShiftEvent,
  cashDrawerShiftEventSchema,
} from './cashDrawerShiftEvent';
import { Error, errorSchema } from './error';

export interface ListCashDrawerShiftEventsResponse {
  /**
   * Opaque cursor for fetching the next page. Cursor is not present in
   * the last page of results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * All of the events (payments, refunds, etc.) for a cash drawer during
   * the shift.
   */
  cashDrawerShiftEvents?: CashDrawerShiftEvent[];
}

export const listCashDrawerShiftEventsResponseSchema: Schema<ListCashDrawerShiftEventsResponse> = object(
  {
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cashDrawerShiftEvents: [
      'cash_drawer_shift_events',
      optional(array(lazy(() => cashDrawerShiftEventSchema))),
    ],
  }
);
