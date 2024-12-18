import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { JobAssignment, jobAssignmentSchema } from './jobAssignment';

/**
 * Represents information about the overtime exemption status, job assignments, and compensation
 * for a [team member]($m/TeamMember).
 */
export interface WageSetting {
  /** The ID of the team member associated with the wage setting. */
  teamMemberId?: string | null;
  /**
   * **Required** The ordered list of jobs that the team member is assigned to.
   * The first job assignment is considered the team member's primary job.
   */
  jobAssignments?: JobAssignment[] | null;
  /** Whether the team member is exempt from the overtime rules of the seller's country. */
  isOvertimeExempt?: boolean | null;
  /**
   * **Read only** Used for resolving concurrency issues. The request fails if the version
   * provided does not match the server version at the time of the request. If not provided,
   * Square executes a blind write, potentially overwriting data from another write. For more information,
   * see [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency).
   */
  version?: number;
  /** The timestamp when the wage setting was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the wage setting was last updated, in RFC 3339 format. */
  updatedAt?: string;
}

export const wageSettingSchema: Schema<WageSetting> = object({
  teamMemberId: ['team_member_id', optional(nullable(string()))],
  jobAssignments: [
    'job_assignments',
    optional(nullable(array(lazy(() => jobAssignmentSchema)))),
  ],
  isOvertimeExempt: ['is_overtime_exempt', optional(nullable(boolean()))],
  version: ['version', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
