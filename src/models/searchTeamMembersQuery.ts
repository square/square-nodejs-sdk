import { lazy, object, optional, Schema } from '../schema';
import {
  SearchTeamMembersFilter,
  searchTeamMembersFilterSchema,
} from './searchTeamMembersFilter';

/** Represents the parameters in a search for `TeamMember` objects. */
export interface SearchTeamMembersQuery {
  /**
   * Represents a filter used in a search for `TeamMember` objects. `AND` logic is applied
   * between the individual fields, and `OR` logic is applied within list-based fields.
   * For example, setting this filter value:
   * ```
   * filter = (locations_ids = ["A", "B"], status = ACTIVE)
   * ```
   * returns only active team members assigned to either location "A" or "B".
   */
  filter?: SearchTeamMembersFilter;
}

export const searchTeamMembersQuerySchema: Schema<SearchTeamMembersQuery> = object(
  { filter: ['filter', optional(lazy(() => searchTeamMembersFilterSchema))] }
);
