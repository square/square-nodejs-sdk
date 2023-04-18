import { number, object, Schema } from '../schema';

/** Describes a `CancelInvoice` request. */
export interface CancelInvoiceRequest {
  /**
   * The version of the [invoice](entity:Invoice) to cancel.
   * If you do not know the version, you can call
   * [GetInvoice](api-endpoint:Invoices-GetInvoice) or [ListInvoices](api-endpoint:Invoices-ListInvoices).
   */
  version: number;
}

export const cancelInvoiceRequestSchema: Schema<CancelInvoiceRequest> = object({
  version: ['version', number()],
});
