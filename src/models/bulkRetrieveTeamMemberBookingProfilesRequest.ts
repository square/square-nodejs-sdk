import { array, object, Schema, string } from '../schema';

/** Request payload for the [BulkRetrieveTeamMemberBookingProfiles]($e/Bookings/BulkRetrieveTeamMemberBookingProfiles) endpoint. */
export interface BulkRetrieveTeamMemberBookingProfilesRequest {
  /** A non-empty list of IDs of team members whose booking profiles you want to retrieve. */
  teamMemberIds: string[];
}

export const bulkRetrieveTeamMemberBookingProfilesRequestSchema: Schema<BulkRetrieveTeamMemberBookingProfilesRequest> = object(
  { teamMemberIds: ['team_member_ids', array(string())] }
);
