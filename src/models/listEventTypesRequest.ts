import { nullable, object, optional, Schema, string } from '../schema';

/** Lists all event types that can be subscribed to. */
export interface ListEventTypesRequest {
  /** The API version for which to list event types. Setting this field overrides the default version used by the application. */
  apiVersion?: string | null;
}

export const listEventTypesRequestSchema: Schema<ListEventTypesRequest> = object(
  { apiVersion: ['api_version', optional(nullable(string()))] }
);
