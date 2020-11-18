import { object, optional, Schema, string } from '../schema';

/** V1TimecardEvent */
export interface V1TimecardEvent {
  /** The event's unique ID. */
  id?: string;
  /**
   * Actions that resulted in a change to a timecard. All timecard
   * events created with the Connect API have an event type that begins with
   * `API`.
   */
  eventType?: string;
  /** The time the employee clocked in, in ISO 8601 format. */
  clockinTime?: string;
  /** The time the employee clocked out, in ISO 8601 format. */
  clockoutTime?: string;
  /** The time when the event was created, in ISO 8601 format. */
  createdAt?: string;
}

export const v1TimecardEventSchema: Schema<V1TimecardEvent> = object({
  id: ['id', optional(string())],
  eventType: ['event_type', optional(string())],
  clockinTime: ['clockin_time', optional(string())],
  clockoutTime: ['clockout_time', optional(string())],
  createdAt: ['created_at', optional(string())],
});
