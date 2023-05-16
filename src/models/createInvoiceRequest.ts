import { lazy, object, optional, Schema, string } from '../schema';
import { Invoice, invoiceSchema } from './invoice';

/** Describes a `CreateInvoice` request. */
export interface CreateInvoiceRequest {
  /**
   * Stores information about an invoice. You use the Invoices API to create and manage
   * invoices. For more information, see [Invoices API Overview](https://developer.squareup.com/docs/invoices-api/overview).
   */
  invoice: Invoice;
  /**
   * A unique string that identifies the `CreateInvoice` request. If you do not
   * provide `idempotency_key` (or provide an empty string as the value), the endpoint
   * treats each request as independent.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
}

export const createInvoiceRequestSchema: Schema<CreateInvoiceRequest> = object({
  invoice: ['invoice', lazy(() => invoiceSchema)],
  idempotencyKey: ['idempotency_key', optional(string())],
});
