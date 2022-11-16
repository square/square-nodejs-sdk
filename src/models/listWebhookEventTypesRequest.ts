import { nullable, object, optional, Schema, string } from '../schema';

/** Lists all webhook event types that can be subscribed to. */
export interface ListWebhookEventTypesRequest {
  /** The API version for which to list event types. Setting this field overrides the default version used by the application. */
  apiVersion?: string | null;
}

export const listWebhookEventTypesRequestSchema: Schema<ListWebhookEventTypesRequest> = object(
  { apiVersion: ['api_version', optional(nullable(string()))] }
);
