import { object, optional, Schema, string } from '../schema';

export interface TerminalActionQuerySort {
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
}

export const terminalActionQuerySortSchema: Schema<TerminalActionQuerySort> = object(
  { sortOrder: ['sort_order', optional(string())] }
);
