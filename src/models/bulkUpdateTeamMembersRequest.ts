import { dict, lazy, object, Schema } from '../schema';
import {
  UpdateTeamMemberRequest,
  updateTeamMemberRequestSchema,
} from './updateTeamMemberRequest';

/** Represents a bulk update request for `TeamMember` objects. */
export interface BulkUpdateTeamMembersRequest {
  /**
   * The data used to update the `TeamMember` objects. Each key is the `team_member_id` that maps to the `UpdateTeamMemberRequest`.
   * The maximum number of update objects is 25.
   * For each team member, include the fields to add, change, or clear. Fields can be cleared using a null value.
   * To update `wage_setting.job_assignments`, you must provide the complete list of job assignments. If needed,
   * call [ListJobs](api-endpoint:Team-ListJobs) to get the required `job_id` values.
   */
  teamMembers: Record<string, UpdateTeamMemberRequest>;
}

export const bulkUpdateTeamMembersRequestSchema: Schema<BulkUpdateTeamMembersRequest> = object(
  {
    teamMembers: [
      'team_members',
      dict(lazy(() => updateTeamMemberRequestSchema)),
    ],
  }
);
