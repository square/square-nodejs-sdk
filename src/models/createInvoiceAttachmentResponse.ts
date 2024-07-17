import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  InvoiceAttachment,
  invoiceAttachmentSchema,
} from './invoiceAttachment';

/** Represents a [CreateInvoiceAttachment]($e/Invoices/CreateInvoiceAttachment) response. */
export interface CreateInvoiceAttachmentResponse {
  /** Represents a file attached to an [invoice]($m/Invoice). */
  attachment?: InvoiceAttachment;
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const createInvoiceAttachmentResponseSchema: Schema<CreateInvoiceAttachmentResponse> = object(
  {
    attachment: ['attachment', optional(lazy(() => invoiceAttachmentSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
