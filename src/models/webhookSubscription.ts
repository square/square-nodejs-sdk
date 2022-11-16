import {
  array,
  boolean,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * Represents the details of a webhook subscription, including notification URL,
 * event types, and signature key.
 */
export interface WebhookSubscription {
  /** A Square-generated unique ID for the subscription. */
  id?: string;
  /** The name of this subscription. */
  name?: string | null;
  /** Indicates whether the subscription is enabled (`true`) or not (`false`). */
  enabled?: boolean | null;
  /** The event types associated with this subscription. */
  eventTypes?: string[] | null;
  /** The URL to which webhooks are sent. */
  notificationUrl?: string | null;
  /**
   * The API version of the subscription.
   * This field is optional for `CreateWebhookSubscription`.
   * The value defaults to the API version used by the application.
   */
  apiVersion?: string | null;
  /** The Square-generated signature key used to validate the origin of the webhook event. */
  signatureKey?: string;
  /** The timestamp of when the subscription was created, in RFC 3339 format. For example, "2016-09-04T23:59:33.123Z". */
  createdAt?: string;
  /**
   * The timestamp of when the subscription was last updated, in RFC 3339 format.
   * For example, "2016-09-04T23:59:33.123Z".
   */
  updatedAt?: string;
}

export const webhookSubscriptionSchema: Schema<WebhookSubscription> = object({
  id: ['id', optional(string())],
  name: ['name', optional(nullable(string()))],
  enabled: ['enabled', optional(nullable(boolean()))],
  eventTypes: ['event_types', optional(nullable(array(string())))],
  notificationUrl: ['notification_url', optional(nullable(string()))],
  apiVersion: ['api_version', optional(nullable(string()))],
  signatureKey: ['signature_key', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
