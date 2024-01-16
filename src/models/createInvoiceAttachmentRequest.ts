import { object, optional, Schema, string } from '../schema';

/** Represents a [CreateInvoiceAttachment]($e/Invoices/CreateInvoiceAttachment) request. */
export interface CreateInvoiceAttachmentRequest {
  /**
   * A unique string that identifies the `CreateInvoiceAttachment` request.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
  /** The description of the attachment to display on the invoice. */
  description?: string;
}

export const createInvoiceAttachmentRequestSchema: Schema<CreateInvoiceAttachmentRequest> = object(
  {
    idempotencyKey: ['idempotency_key', optional(string())],
    description: ['description', optional(string())],
  }
);
