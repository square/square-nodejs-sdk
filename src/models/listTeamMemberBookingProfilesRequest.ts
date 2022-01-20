import { boolean, number, object, optional, Schema, string } from '../schema';

export interface ListTeamMemberBookingProfilesRequest {
  /** Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`). */
  bookableOnly?: boolean;
  /** The maximum number of results to return in a paged response. */
  limit?: number;
  /** The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. */
  cursor?: string;
  /** Indicates whether to include only team members enabled at the given location in the returned result. */
  locationId?: string;
}

export const listTeamMemberBookingProfilesRequestSchema: Schema<ListTeamMemberBookingProfilesRequest> = object(
  {
    bookableOnly: ['bookable_only', optional(boolean())],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
    locationId: ['location_id', optional(string())],
  }
);
