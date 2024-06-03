import { object, optional, Schema, string } from '../schema';

/** Criteria to sort events by. */
export interface SearchEventsSort {
  /** Specifies the sort key for events returned from a search. */
  field?: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
}

export const searchEventsSortSchema: Schema<SearchEventsSort> = object({
  field: ['field', optional(string())],
  order: ['order', optional(string())],
});
