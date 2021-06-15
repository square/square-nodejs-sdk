import { object, optional, Schema, string } from '../schema';

/** Defines the parameters for a `DeprecatedCreateDisputeEvidenceText` request. */
export interface DeprecatedCreateDisputeEvidenceTextRequest {
  /** The Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). */
  idempotencyKey: string;
  /** The type of the dispute evidence. */
  evidenceType?: string;
  /** The evidence string. */
  evidenceText: string;
}

export const deprecatedCreateDisputeEvidenceTextRequestSchema: Schema<DeprecatedCreateDisputeEvidenceTextRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    evidenceType: ['evidence_type', optional(string())],
    evidenceText: ['evidence_text', string()],
  }
);
