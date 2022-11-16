import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  DisputeEvidenceFile,
  disputeEvidenceFileSchema,
} from './disputeEvidenceFile';

export interface DisputeEvidence {
  /** The Square-generated ID of the evidence. */
  evidenceId?: string | null;
  /** The Square-generated ID of the evidence. */
  id?: string;
  /** The ID of the dispute the evidence is associated with. */
  disputeId?: string | null;
  /** A file to be uploaded as dispute evidence. */
  evidenceFile?: DisputeEvidenceFile;
  /** Raw text */
  evidenceText?: string | null;
  /** The time when the evidence was uploaded, in RFC 3339 format. */
  uploadedAt?: string | null;
  /** The type of the dispute evidence. */
  evidenceType?: string;
}

export const disputeEvidenceSchema: Schema<DisputeEvidence> = object({
  evidenceId: ['evidence_id', optional(nullable(string()))],
  id: ['id', optional(string())],
  disputeId: ['dispute_id', optional(nullable(string()))],
  evidenceFile: [
    'evidence_file',
    optional(lazy(() => disputeEvidenceFileSchema)),
  ],
  evidenceText: ['evidence_text', optional(nullable(string()))],
  uploadedAt: ['uploaded_at', optional(nullable(string()))],
  evidenceType: ['evidence_type', optional(string())],
});
