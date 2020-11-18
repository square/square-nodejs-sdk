import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  CashDrawerShiftSummary,
  cashDrawerShiftSummarySchema,
} from './cashDrawerShiftSummary';
import { Error, errorSchema } from './error';

export interface ListCashDrawerShiftsResponse {
  /**
   * A collection of CashDrawerShiftSummary objects for shifts that match
   * the query.
   */
  items?: CashDrawerShiftSummary[];
  /**
   * Opaque cursor for fetching the next page of results. Cursor is not
   * present in the last page of results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listCashDrawerShiftsResponseSchema: Schema<ListCashDrawerShiftsResponse> = object(
  {
    items: ['items', optional(array(lazy(() => cashDrawerShiftSummarySchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
