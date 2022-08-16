import { object, optional, Schema, string } from '../schema';

/** Defines the parameters for a `CreateDisputeEvidenceFile` request. */
export interface CreateDisputeEvidenceFileRequest {
  /** A unique key identifying the request. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). */
  idempotencyKey: string;
  /** The type of the dispute evidence. */
  evidenceType?: string;
  /**
   * The MIME type of the uploaded file.
   * The type can be image/heic, image/heif, image/jpeg, application/pdf, image/png, or image/tiff.
   */
  contentType?: string;
}

export const createDisputeEvidenceFileRequestSchema: Schema<CreateDisputeEvidenceFileRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    evidenceType: ['evidence_type', optional(string())],
    contentType: ['content_type', optional(string())],
  }
);
