import { object, optional, Schema, string } from '../schema';

/** V1OrderHistoryEntry */
export interface V1OrderHistoryEntry {
  action?: string;
  /** The time when the action was performed, in ISO 8601 format. */
  createdAt?: string;
}

export const v1OrderHistoryEntrySchema: Schema<V1OrderHistoryEntry> = object({
  action: ['action', optional(string())],
  createdAt: ['created_at', optional(string())],
});
