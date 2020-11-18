import { array, object, optional, Schema, string } from '../schema';

/**
 * Represents a filter used in a search for `TeamMember` objects. `AND` logic is applied
 * between the individual fields, and `OR` logic is applied within list-based fields.
 * For example, setting this filter value,
 * ```
 * filter = (locations_ids = ["A", "B"], status = ACTIVE)
 * ```
 * returns only active team members assigned to either location "A" or "B".
 */
export interface SearchTeamMembersFilter {
  /**
   * When present, filter by team members assigned to the specified locations.
   * When empty, include team members assigned to any location.
   */
  locationIds?: string[];
  /** Enumerates the possible statuses the team member can have within a business. */
  status?: string;
}

export const searchTeamMembersFilterSchema: Schema<SearchTeamMembersFilter> = object(
  {
    locationIds: ['location_ids', optional(array(string()))],
    status: ['status', optional(string())],
  }
);
