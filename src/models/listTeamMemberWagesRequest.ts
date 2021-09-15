import { number, object, optional, Schema, string } from '../schema';

/** A request for a set of `TeamMemberWage` objects */
export interface ListTeamMemberWagesRequest {
  /**
   * Filter wages returned to only those that are associated with the
   * specified team member.
   */
  teamMemberId?: string;
  /**
   * Maximum number of Team Member Wages to return per page. Can range between
   * 1 and 200. The default is the maximum at 200.
   */
  limit?: number;
  /** Pointer to the next page of Employee Wage results to fetch. */
  cursor?: string;
}

export const listTeamMemberWagesRequestSchema: Schema<ListTeamMemberWagesRequest> = object(
  {
    teamMemberId: ['team_member_id', optional(string())],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
