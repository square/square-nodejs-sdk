import { array, lazy, object, optional, Schema, string } from '../schema';
import { Invoice, invoiceSchema } from './invoice';

/** Describes a `UpdateInvoice` request. */
export interface UpdateInvoiceRequest {
  /**
   * Stores information about an invoice. You use the Invoices API to create and process
   * invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).
   */
  invoice: Invoice;
  /**
   * A unique string that identifies the `UpdateInvoice` request. If you do not
   * provide `idempotency_key` (or provide an empty string as the value), the endpoint
   * treats each request as independent.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey?: string;
  /**
   * List of fields to clear.
   * For examples, see [Update an invoice](https://developer.squareup.com/docs/invoices-api/overview#update-an-invoice).
   */
  fieldsToClear?: string[];
}

export const updateInvoiceRequestSchema: Schema<UpdateInvoiceRequest> = object({
  invoice: ['invoice', lazy(() => invoiceSchema)],
  idempotencyKey: ['idempotency_key', optional(string())],
  fieldsToClear: ['fields_to_clear', optional(array(string()))],
});
