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
  /** The name of the affected object’s type. */
  type?: string | null;
  /** The ID of the affected object. */
  id?: string;
  /** This is true if the affected object has been deleted; otherwise, it's absent. */
  deleted?: boolean | null;
  /** An object containing fields and values relevant to the event. It is absent if the affected object has been deleted. */
  object?: Record<string, unknown> | null;
}

export const eventDataSchema: Schema<EventData> = object({
  type: ['type', optional(nullable(string()))],
  id: ['id', optional(string())],
  deleted: ['deleted', optional(nullable(boolean()))],
  object: ['object', optional(nullable(dict(unknown())))],
});
