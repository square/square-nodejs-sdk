import { nullable, object, optional, Schema, string } from '../schema';

/** Contains metadata about a particular [Event]($m/Event). */
export interface EventMetadata {
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The API version of the event. This corresponds to the default API version of the developer application at the time when the event was created. */
  apiVersion?: string | null;
}

export const eventMetadataSchema: Schema<EventMetadata> = object({
  eventId: ['event_id', optional(nullable(string()))],
  apiVersion: ['api_version', optional(nullable(string()))],
});
