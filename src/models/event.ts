import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { EventData, eventDataSchema } from './eventData';

export interface Event {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event this represents. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: EventData;
}

export const eventSchema: Schema<Event> = object({
  merchantId: ['merchant_id', optional(nullable(string()))],
  locationId: ['location_id', optional(nullable(string()))],
  type: ['type', optional(nullable(string()))],
  eventId: ['event_id', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  data: ['data', optional(lazy(() => eventDataSchema))],
});
