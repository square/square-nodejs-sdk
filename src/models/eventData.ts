import {
  boolean,
  dict,
  nullable,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface EventData {
  /** Name of the affected object’s type. */
  type?: string | null;
  /** ID of the affected object. */
  id?: string;
  /** Is true if the affected object was deleted. Otherwise absent. */
  deleted?: boolean | null;
  /** An object containing fields and values relevant to the event. Is absent if affected object was deleted. */
  object?: Record<string, unknown> | null;
}

export const eventDataSchema: Schema<EventData> = object({
  type: ['type', optional(nullable(string()))],
  id: ['id', optional(string())],
  deleted: ['deleted', optional(nullable(boolean()))],
  object: ['object', optional(nullable(dict(unknown())))],
});
