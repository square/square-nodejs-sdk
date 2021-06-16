import { array, dict, lazy, object, optional, Schema } from '../schema';
import {
  CreateTeamMemberResponse,
  createTeamMemberResponseSchema,
} from './createTeamMemberResponse';
import { Error, errorSchema } from './error';

/** Represents a response from a bulk create request containing the created `TeamMember` objects or error messages. */
export interface BulkCreateTeamMembersResponse {
  /** The successfully created `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`. */
  teamMembers?: Record<string, CreateTeamMemberResponse>;
  /** The errors that occurred during the request. */
  errors?: Error[];
}

export const bulkCreateTeamMembersResponseSchema: Schema<BulkCreateTeamMembersResponse> = object(
  {
    teamMembers: [
      'team_members',
      optional(dict(lazy(() => createTeamMemberResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
