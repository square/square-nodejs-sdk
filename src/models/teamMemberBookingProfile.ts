import { boolean, nullable, object, optional, Schema, string } from '../schema';

/** The booking profile of a seller's team member, including the team member's ID, display name, description and whether the team member can be booked as a service provider. */
export interface TeamMemberBookingProfile {
  /** The ID of the [TeamMember](entity:TeamMember) object for the team member associated with the booking profile. */
  teamMemberId?: string;
  /** The description of the team member. */
  description?: string;
  /** The display name of the team member. */
  displayName?: string;
  /** Indicates whether the team member can be booked through the Bookings API or the seller's online booking channel or site (`true`) or not (`false`). */
  isBookable?: boolean | null;
  /** The URL of the team member's image for the bookings profile. */
  profileImageUrl?: string;
}

export const teamMemberBookingProfileSchema: Schema<TeamMemberBookingProfile> = object(
  {
    teamMemberId: ['team_member_id', optional(string())],
    description: ['description', optional(string())],
    displayName: ['display_name', optional(string())],
    isBookable: ['is_bookable', optional(nullable(boolean()))],
    profileImageUrl: ['profile_image_url', optional(string())],
  }
);
