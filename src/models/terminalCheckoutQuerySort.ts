import { object, optional, Schema, string } from '../schema';

export interface TerminalCheckoutQuerySort {
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
}

export const terminalCheckoutQuerySortSchema: Schema<TerminalCheckoutQuerySort> = object(
  { sortOrder: ['sort_order', optional(string())] }
);
