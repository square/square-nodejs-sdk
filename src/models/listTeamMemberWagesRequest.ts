import { number, object, optional, Schema, string } from '../schema';

/** A request for a set of `TeamMemberWage` objects. */
export interface ListTeamMemberWagesRequest {
  /**
   * Filter the returned wages to only those that are associated with the
   * specified team member.
   */
  teamMemberId?: string;
  /**
   * The maximum number of `TeamMemberWage` results to return per page. The number can range between
   * 1 and 200. The default is 200.
   */
  limit?: number;
  /** A pointer to the next page of `EmployeeWage` results to fetch. */
  cursor?: string;
}

export const listTeamMemberWagesRequestSchema: Schema<ListTeamMemberWagesRequest> = object(
  {
    teamMemberId: ['team_member_id', optional(string())],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
