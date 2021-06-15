import { lazy, object, optional, Schema, string } from '../schema';
import {
  DisputeEvidenceCreatedWebhookData,
  disputeEvidenceCreatedWebhookDataSchema,
} from './disputeEvidenceCreatedWebhookData';

/**
 * Published when evidence is added to a [Dispute]($m/Dispute)
 * from the Disputes Dashboard in the Seller Dashboard, the Square Point of Sale app,
 * or by calling either [CreateDisputeEvidenceFile]($e/Disputes/CreateDisputeEvidenceFile) or [CreateDisputeEvidenceText]($e/Disputes/CreateDisputeEvidenceText).
 */
export interface DisputeEvidenceCreatedWebhook {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string;
  /** The ID of the target location associated with the event. */
  locationId?: string;
  /** The type of event this represents. */
  type?: string;
  /** A unique ID for the webhook event. */
  eventId?: string;
  /** Timestamp of when the webhook event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: DisputeEvidenceCreatedWebhookData;
}

export const disputeEvidenceCreatedWebhookSchema: Schema<DisputeEvidenceCreatedWebhook> = object(
  {
    merchantId: ['merchant_id', optional(string())],
    locationId: ['location_id', optional(string())],
    type: ['type', optional(string())],
    eventId: ['event_id', optional(string())],
    createdAt: ['created_at', optional(string())],
    data: [
      'data',
      optional(lazy(() => disputeEvidenceCreatedWebhookDataSchema)),
    ],
  }
);
