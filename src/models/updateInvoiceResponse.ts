import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Invoice, invoiceSchema } from './invoice';

/** Describes a `UpdateInvoice` response. */
export interface UpdateInvoiceResponse {
  /**
   * Stores information about an invoice. You use the Invoices API to create and manage
   * invoices. For more information, see [Invoices API Overview](https://developer.squareup.com/docs/invoices-api/overview).
   */
  invoice?: Invoice;
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const updateInvoiceResponseSchema: Schema<UpdateInvoiceResponse> = object(
  {
    invoice: ['invoice', optional(lazy(() => invoiceSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
