import { number, object, optional, Schema, string } from '../schema';

/** Represents a file attached to an [invoice]($m/Invoice). */
export interface InvoiceAttachment {
  /** The Square-assigned ID of the attachment. */
  id?: string;
  /** The file name of the attachment, which is displayed on the invoice. */
  filename?: string;
  /**
   * The description of the attachment, which is displayed on the invoice.
   * This field maps to the seller-defined **Message** field.
   */
  description?: string;
  /** The file size of the attachment in bytes. */
  filesize?: number;
  /** The MD5 hash that was generated from the file contents. */
  hash?: string;
  /**
   * The mime type of the attachment.
   * The following mime types are supported:
   * image/gif, image/jpeg, image/png, image/tiff, image/bmp, application/pdf.
   */
  mimeType?: string;
  /** The timestamp when the attachment was uploaded, in RFC 3339 format. */
  uploadedAt?: string;
}

export const invoiceAttachmentSchema: Schema<InvoiceAttachment> = object({
  id: ['id', optional(string())],
  filename: ['filename', optional(string())],
  description: ['description', optional(string())],
  filesize: ['filesize', optional(number())],
  hash: ['hash', optional(string())],
  mimeType: ['mime_type', optional(string())],
  uploadedAt: ['uploaded_at', optional(string())],
});
