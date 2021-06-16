import { object, optional, Schema, string } from '../schema';

/** Defines the parameters for a `DeprecatedCreateDisputeEvidenceFile` request. */
export interface DeprecatedCreateDisputeEvidenceFileRequest {
  /** The Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). */
  idempotencyKey: string;
  /** The type of the dispute evidence. */
  evidenceType?: string;
  /**
   * The MIME type of the uploaded file.
   * The type can be image/heic, image/heif, image/jpeg, application/pdf, image/png, or image/tiff.
   */
  contentType?: string;
}

export const deprecatedCreateDisputeEvidenceFileRequestSchema: Schema<DeprecatedCreateDisputeEvidenceFileRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    evidenceType: ['evidence_type', optional(string())],
    contentType: ['content_type', optional(string())],
  }
);
