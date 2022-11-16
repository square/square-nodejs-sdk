import { nullable, object, optional, Schema, string } from '../schema';

/** A file to be uploaded as dispute evidence. */
export interface DisputeEvidenceFile {
  /** The file name including the file extension. For example: "receipt.tiff". */
  filename?: string | null;
  /** Dispute evidence files must be application/pdf, image/heic, image/heif, image/jpeg, image/png, or image/tiff formats. */
  filetype?: string | null;
}

export const disputeEvidenceFileSchema: Schema<DisputeEvidenceFile> = object({
  filename: ['filename', optional(nullable(string()))],
  filetype: ['filetype', optional(nullable(string()))],
});
