import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import {
  TeamMemberBookingProfile,
  teamMemberBookingProfileSchema,
} from './teamMemberBookingProfile';

export interface ListTeamMemberBookingProfilesResponse {
  /** The list of team member booking profiles. */
  teamMemberBookingProfiles?: TeamMemberBookingProfile[];
  /** The cursor for paginating through the results. */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listTeamMemberBookingProfilesResponseSchema: Schema<ListTeamMemberBookingProfilesResponse> = object(
  {
    teamMemberBookingProfiles: [
      'team_member_booking_profiles',
      optional(array(lazy(() => teamMemberBookingProfileSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
