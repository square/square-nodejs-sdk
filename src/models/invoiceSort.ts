import { object, optional, Schema, string } from '../schema';

/** Identifies the sort field and sort order. */
export interface InvoiceSort {
  /** The field to use for sorting. */
  field: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
}

export const invoiceSortSchema: Schema<InvoiceSort> = object({
  field: ['field', string()],
  order: ['order', optional(string())],
});
