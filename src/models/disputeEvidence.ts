import { lazy, object, optional, Schema, string } from '../schema';
import {
  DisputeEvidenceFile,
  disputeEvidenceFileSchema,
} from './disputeEvidenceFile';

export interface DisputeEvidence {
  /** The Square-generated ID of the evidence. */
  evidenceId?: string;
  /** The Square-generated ID of the evidence. */
  id?: string;
  /** The ID of the dispute the evidence is associated with. */
  disputeId?: string;
  /** A file to be uploaded as dispute evidence. */
  evidenceFile?: DisputeEvidenceFile;
  /** Raw text */
  evidenceText?: string;
  /** The time when the evidence was uploaded, in RFC 3339 format. */
  uploadedAt?: string;
  /** The type of the dispute evidence. */
  evidenceType?: string;
}

export const disputeEvidenceSchema: Schema<DisputeEvidence> = object({
  evidenceId: ['evidence_id', optional(string())],
  id: ['id', optional(string())],
  disputeId: ['dispute_id', optional(string())],
  evidenceFile: [
    'evidence_file',
    optional(lazy(() => disputeEvidenceFileSchema)),
  ],
  evidenceText: ['evidence_text', optional(string())],
  uploadedAt: ['uploaded_at', optional(string())],
  evidenceType: ['evidence_type', optional(string())],
});
