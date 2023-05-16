import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  CashDrawerShiftSummary,
  cashDrawerShiftSummarySchema,
} from './cashDrawerShiftSummary';
import { Error, errorSchema } from './error';

export interface ListCashDrawerShiftsResponse {
  /**
   * Opaque cursor for fetching the next page of results. Cursor is not
   * present in the last page of results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * A collection of CashDrawerShiftSummary objects for shifts that match
   * the query.
   */
  cashDrawerShifts?: CashDrawerShiftSummary[];
}

export const listCashDrawerShiftsResponseSchema: Schema<ListCashDrawerShiftsResponse> = object(
  {
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cashDrawerShifts: [
      'cash_drawer_shifts',
      optional(array(lazy(() => cashDrawerShiftSummarySchema))),
    ],
  }
);
