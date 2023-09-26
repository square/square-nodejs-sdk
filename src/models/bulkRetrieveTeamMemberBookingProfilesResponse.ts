import { array, dict, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  RetrieveTeamMemberBookingProfileResponse,
  retrieveTeamMemberBookingProfileResponseSchema,
} from './retrieveTeamMemberBookingProfileResponse';

/** Response payload for the [BulkRetrieveTeamMemberBookingProfiles]($e/Bookings/BulkRetrieveTeamMemberBookingProfiles) endpoint. */
export interface BulkRetrieveTeamMemberBookingProfilesResponse {
  /** The returned team members' booking profiles, as a map with `team_member_id` as the key and [TeamMemberBookingProfile](entity:TeamMemberBookingProfile) the value. */
  teamMemberBookingProfiles?: Record<string, RetrieveTeamMemberBookingProfileResponse>;
  /** Errors that occurred during the request. */
  errors?: Error[];
}

export const bulkRetrieveTeamMemberBookingProfilesResponseSchema: Schema<BulkRetrieveTeamMemberBookingProfilesResponse> = object(
  {
    teamMemberBookingProfiles: [
      'team_member_booking_profiles',
      optional(
        dict(lazy(() => retrieveTeamMemberBookingProfileResponseSchema))
      ),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
