import { object, optional, Schema, string } from '../schema';

/** Contains the metadata of a webhook event type. */
export interface EventTypeMetadata {
  /** The event type. */
  eventType?: string;
  /** The API version at which the event type was introduced. */
  apiVersionIntroduced?: string;
  /** The release status of the event type. */
  releaseStatus?: string;
}

export const eventTypeMetadataSchema: Schema<EventTypeMetadata> = object({
  eventType: ['event_type', optional(string())],
  apiVersionIntroduced: ['api_version_introduced', optional(string())],
  releaseStatus: ['release_status', optional(string())],
});
