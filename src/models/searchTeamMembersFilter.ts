import {
  array,
  boolean,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * Represents a filter used in a search for `TeamMember` objects. `AND` logic is applied
 * between the individual fields, and `OR` logic is applied within list-based fields.
 * For example, setting this filter value:
 * ```
 * filter = (locations_ids = ["A", "B"], status = ACTIVE)
 * ```
 * returns only active team members assigned to either location "A" or "B".
 */
export interface SearchTeamMembersFilter {
  /**
   * When present, filters by team members assigned to the specified locations.
   * When empty, includes team members assigned to any location.
   */
  locationIds?: string[] | null;
  /** Enumerates the possible statuses the team member can have within a business. */
  status?: string;
  /** When present and set to true, returns the team member who is the owner of the Square account. */
  isOwner?: boolean | null;
}

export const searchTeamMembersFilterSchema: Schema<SearchTeamMembersFilter> = object(
  {
    locationIds: ['location_ids', optional(nullable(array(string())))],
    status: ['status', optional(string())],
    isOwner: ['is_owner', optional(nullable(boolean()))],
  }
);
