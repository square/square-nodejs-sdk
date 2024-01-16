import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Represents a [DeleteInvoiceAttachment]($e/Invoices/DeleteInvoiceAttachment) response. */
export interface DeleteInvoiceAttachmentResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const deleteInvoiceAttachmentResponseSchema: Schema<DeleteInvoiceAttachmentResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
