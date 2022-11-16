import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface ListTeamMemberBookingProfilesRequest {
  /** Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`). */
  bookableOnly?: boolean | null;
  /** The maximum number of results to return in a paged response. */
  limit?: number | null;
  /** The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. */
  cursor?: string | null;
  /** Indicates whether to include only team members enabled at the given location in the returned result. */
  locationId?: string | null;
}

export const listTeamMemberBookingProfilesRequestSchema: Schema<ListTeamMemberBookingProfilesRequest> = object(
  {
    bookableOnly: ['bookable_only', optional(nullable(boolean()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
  }
);
