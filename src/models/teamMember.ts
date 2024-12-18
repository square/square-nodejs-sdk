import {
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  TeamMemberAssignedLocations,
  teamMemberAssignedLocationsSchema,
} from './teamMemberAssignedLocations';
import { WageSetting, wageSettingSchema } from './wageSetting';

/** A record representing an individual team member for a business. */
export interface TeamMember {
  /** The unique ID for the team member. */
  id?: string;
  /** A second ID used to associate the team member with an entity in another system. */
  referenceId?: string | null;
  /** Whether the team member is the owner of the Square account. */
  isOwner?: boolean;
  /** Enumerates the possible statuses the team member can have within a business. */
  status?: string;
  /** The given name (that is, the first name) associated with the team member. */
  givenName?: string | null;
  /** The family name (that is, the last name) associated with the team member. */
  familyName?: string | null;
  /**
   * The email address associated with the team member. After accepting the invitation
   * from Square, only the team member can change this value.
   */
  emailAddress?: string | null;
  /**
   * The team member's phone number, in E.164 format. For example:
   * +14155552671 - the country code is 1 for US
   * +551155256325 - the country code is 55 for BR
   */
  phoneNumber?: string | null;
  /** The timestamp when the team member was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the team member was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /** An object that represents a team member's assignment to locations. */
  assignedLocations?: TeamMemberAssignedLocations;
  /**
   * Represents information about the overtime exemption status, job assignments, and compensation
   * for a [team member]($m/TeamMember).
   */
  wageSetting?: WageSetting;
}

export const teamMemberSchema: Schema<TeamMember> = object({
  id: ['id', optional(string())],
  referenceId: ['reference_id', optional(nullable(string()))],
  isOwner: ['is_owner', optional(boolean())],
  status: ['status', optional(string())],
  givenName: ['given_name', optional(nullable(string()))],
  familyName: ['family_name', optional(nullable(string()))],
  emailAddress: ['email_address', optional(nullable(string()))],
  phoneNumber: ['phone_number', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  assignedLocations: [
    'assigned_locations',
    optional(lazy(() => teamMemberAssignedLocationsSchema)),
  ],
  wageSetting: ['wage_setting', optional(lazy(() => wageSettingSchema))],
});
