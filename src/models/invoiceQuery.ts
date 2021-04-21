import { lazy, object, optional, Schema } from '../schema';
import { InvoiceFilter, invoiceFilterSchema } from './invoiceFilter';
import { InvoiceSort, invoiceSortSchema } from './invoiceSort';

/** Describes query criteria for searching invoices. */
export interface InvoiceQuery {
  /** Describes query filters to apply. */
  filter: InvoiceFilter;
  /** Identifies the sort field and sort order. */
  sort?: InvoiceSort;
}

export const invoiceQuerySchema: Schema<InvoiceQuery> = object({
  filter: ['filter', lazy(() => invoiceFilterSchema)],
  sort: ['sort', optional(lazy(() => invoiceSortSchema))],
});
