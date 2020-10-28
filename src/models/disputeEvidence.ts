import { object, optional, Schema, string } from '../schema';

export interface DisputeEvidence {
  /** The Square-generated ID of the evidence. */
  evidenceId?: string;
  /** The ID of the dispute the evidence is associated with. */
  disputeId?: string;
  /** The time when the next action is due, in RFC 3339 format. */
  uploadedAt?: string;
  /** Type of the dispute evidence. */
  evidenceType?: string;
}

export const disputeEvidenceSchema: Schema<DisputeEvidence> = object({
  evidenceId: ['evidence_id', optional(string())],
  disputeId: ['dispute_id', optional(string())],
  uploadedAt: ['uploaded_at', optional(string())],
  evidenceType: ['evidence_type', optional(string())],
});
