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

/** An object representing a team member's wage information. */
export interface WageSetting {
  /** The unique ID of the `TeamMember` whom this wage setting describes. */
  teamMemberId?: string | null;
  /**
   * Required. The ordered list of jobs that the team member is assigned to.
   * The first job assignment is considered the team member's primary job.
   * The minimum length is 1 and the maximum length is 12.
   */
  jobAssignments?: JobAssignment[] | null;
  /** Whether the team member is exempt from the overtime rules of the seller's country. */
  isOvertimeExempt?: boolean | null;
  /**
   * Used for resolving concurrency issues. The request fails if the version
   * provided does not match the server version at the time of the request. If not provided,
   * Square executes a blind write, potentially overwriting data from another write. For more information,
   * see [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency).
   */
  version?: number;
  /**
   * The timestamp, in RFC 3339 format, describing when the wage setting object was created.
   * For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z".
   */
  createdAt?: string;
  /**
   * The timestamp, in RFC 3339 format, describing when the wage setting object was last updated.
   * For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z".
   */
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
