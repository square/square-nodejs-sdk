import { number, object, optional, Schema } from '../schema';

/** Describes a `DeleteInvoice` request. */
export interface DeleteInvoiceRequest {
  /**
   * The version of the [invoice]($m/Invoice) to delete.
   * If you do not know the version, you can call [GetInvoice]($e/Invoices/GetInvoice) or
   * [ListInvoices]($e/Invoices/ListInvoices).
   */
  version?: number;
}

export const deleteInvoiceRequestSchema: Schema<DeleteInvoiceRequest> = object({
  version: ['version', optional(number())],
});
