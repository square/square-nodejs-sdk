import { dict, lazy, object, Schema } from '../schema';
import {
  CreateTeamMemberRequest,
  createTeamMemberRequestSchema,
} from './createTeamMemberRequest';

/** Represents a bulk create request for `TeamMember` objects. */
export interface BulkCreateTeamMembersRequest {
  /**
   * The data used to create the `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`.
   * The maximum number of create objects is 25.
   * If you include a team member's `wage_setting`, you must provide `job_id` for each job assignment. To get job IDs,
   * call [ListJobs](api-endpoint:Team-ListJobs).
   */
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
