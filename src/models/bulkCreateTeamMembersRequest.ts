import { dict, lazy, object, Schema } from '../schema';
import {
  CreateTeamMemberRequest,
  createTeamMemberRequestSchema,
} from './createTeamMemberRequest';

/** Represents a bulk create request for `TeamMember` objects. */
export interface BulkCreateTeamMembersRequest {
  /** The data which will be used to create the `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`. */
  teamMembers: Record<string, CreateTeamMemberRequest>;
}

export const bulkCreateTeamMembersRequestSchema: Schema<BulkCreateTeamMembersRequest> = object(
  {
    teamMembers: [
      'team_members',
      dict(lazy(() => createTeamMemberRequestSchema)),
    ],
  }
);
