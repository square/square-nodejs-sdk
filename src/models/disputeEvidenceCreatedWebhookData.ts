import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  DisputeEvidenceCreatedWebhookObject,
  disputeEvidenceCreatedWebhookObjectSchema,
} from './disputeEvidenceCreatedWebhookObject';

export interface DisputeEvidenceCreatedWebhookData {
  /** Name of the affected dispute's type. */
  type?: string | null;
  /** ID of the affected dispute. */
  id?: string;
  object?: DisputeEvidenceCreatedWebhookObject;
}

export const disputeEvidenceCreatedWebhookDataSchema: Schema<DisputeEvidenceCreatedWebhookData> = object(
  {
    type: ['type', optional(nullable(string()))],
    id: ['id', optional(string())],
    object: [
      'object',
      optional(lazy(() => disputeEvidenceCreatedWebhookObjectSchema)),
    ],
  }
);
