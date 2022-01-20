import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  TeamMemberBookingProfile,
  teamMemberBookingProfileSchema,
} from './teamMemberBookingProfile';

export interface RetrieveTeamMemberBookingProfileResponse {
  /** The booking profile of a seller's team member, including the team member's ID, display name, description and whether the team member can be booked as a service provider. */
  teamMemberBookingProfile?: TeamMemberBookingProfile;
  /** Errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveTeamMemberBookingProfileResponseSchema: Schema<RetrieveTeamMemberBookingProfileResponse> = object(
  {
    teamMemberBookingProfile: [
      'team_member_booking_profile',
      optional(lazy(() => teamMemberBookingProfileSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
