import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { TeamMemberWage, teamMemberWageSchema } from './teamMemberWage';

/**
 * The response to a request for a set of `TeamMemberWage` objects. Contains
 * a set of `TeamMemberWage`.
 */
export interface ListTeamMemberWagesResponse {
  /** A page of Team Member Wage results. */
  teamMemberWages?: TeamMemberWage[];
  /**
   * Value supplied in the subsequent request to fetch the next next page
   * of Team Member Wage results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listTeamMemberWagesResponseSchema: Schema<ListTeamMemberWagesResponse> = object(
  {
    teamMemberWages: [
      'team_member_wages',
      optional(array(lazy(() => teamMemberWageSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
