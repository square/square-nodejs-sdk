import { lazy, object, optional, Schema } from '../schema';
import { Dispute, disputeSchema } from './dispute';

export interface DisputeEvidenceCreatedWebhookObject {
  /** Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder initiated with their bank. */
  object?: Dispute;
}

export const disputeEvidenceCreatedWebhookObjectSchema: Schema<DisputeEvidenceCreatedWebhookObject> = object(
  { object: ['object', optional(lazy(() => disputeSchema))] }
);
