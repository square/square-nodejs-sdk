import { number, object, optional, Schema } from '../schema';

/** Describes a `DeleteInvoice` request. */
export interface DeleteInvoiceRequest {
  /**
   * The version of the [invoice](#type-invoice) to delete.
   * If you do not know the version, you can call [GetInvoice](#endpoint-Invoices-GetInvoice) or
   * [ListInvoices](#endpoint-Invoices-ListInvoices).
   */
  version?: number;
}

export const deleteInvoiceRequestSchema: Schema<DeleteInvoiceRequest> = object({
  version: ['version', optional(number())],
});
