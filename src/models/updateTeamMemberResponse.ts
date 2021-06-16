import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TeamMember, teamMemberSchema } from './teamMember';

/** Represents a response from an update request containing the updated `TeamMember` object or error messages. */
export interface UpdateTeamMemberResponse {
  /** A record representing an individual team member for a business. */
  teamMember?: TeamMember;
  /** The errors that occurred during the request. */
  errors?: Error[];
}

export const updateTeamMemberResponseSchema: Schema<UpdateTeamMemberResponse> = object(
  {
    teamMember: ['team_member', optional(lazy(() => teamMemberSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
