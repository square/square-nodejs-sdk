import { nullable, number, object, optional, Schema, string } from '../schema';

/** A request for a set of `TeamMemberWage` objects. */
export interface ListTeamMemberWagesRequest {
  /**
   * Filter the returned wages to only those that are associated with the
   * specified team member.
   */
  teamMemberId?: string | null;
  /**
   * The maximum number of `TeamMemberWage` results to return per page. The number can range between
   * 1 and 200. The default is 200.
   */
  limit?: number | null;
  /** A pointer to the next page of `EmployeeWage` results to fetch. */
  cursor?: string | null;
}

export const listTeamMemberWagesRequestSchema: Schema<ListTeamMemberWagesRequest> = object(
  {
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
  }
);
