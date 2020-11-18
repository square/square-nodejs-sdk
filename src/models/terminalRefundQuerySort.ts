import { object, optional, Schema, string } from '../schema';

export interface TerminalRefundQuerySort {
  /**
   * The order in which results are listed.
   * - `ASC` - oldest to newest
   * - `DESC` - newest to oldest (default).
   */
  sortOrder?: string;
}

export const terminalRefundQuerySortSchema: Schema<TerminalRefundQuerySort> = object(
  { sortOrder: ['sort_order', optional(string())] }
);
