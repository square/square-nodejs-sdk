import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Invoice, invoiceSchema } from './invoice';

/** Describes a `UpdateInvoice` request. */
export interface UpdateInvoiceRequest {
  /**
   * Stores information about an invoice. You use the Invoices API to create and manage
   * invoices. For more information, see [Invoices API Overview](https://developer.squareup.com/docs/invoices-api/overview).
   */
  invoice: Invoice;
  /**
   * A unique string that identifies the `UpdateInvoice` request. If you do not
   * provide `idempotency_key` (or provide an empty string as the value), the endpoint
   * treats each request as independent.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
  /**
   * The list of fields to clear.
   * For examples, see [Update an Invoice](https://developer.squareup.com/docs/invoices-api/update-invoices).
   */
  fieldsToClear?: string[] | null;
}

export const updateInvoiceRequestSchema: Schema<UpdateInvoiceRequest> = object({
  invoice: ['invoice', lazy(() => invoiceSchema)],
  idempotencyKey: ['idempotency_key', optional(nullable(string()))],
  fieldsToClear: ['fields_to_clear', optional(nullable(array(string())))],
});
