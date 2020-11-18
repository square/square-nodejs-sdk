import { lazy, object, optional, Schema } from '../schema';
import { TeamMember, teamMemberSchema } from './teamMember';

/** Represents an update request for a `TeamMember` object. */
export interface UpdateTeamMemberRequest {
  /** A record representing an individual team member for a business. */
  teamMember?: TeamMember;
}

export const updateTeamMemberRequestSchema: Schema<UpdateTeamMemberRequest> = object(
  { teamMember: ['team_member', optional(lazy(() => teamMemberSchema))] }
);
