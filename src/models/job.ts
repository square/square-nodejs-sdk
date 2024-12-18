import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * Represents a job that can be assigned to [team members]($m/TeamMember). This object defines the
 * job's title and tip eligibility. Compensation is defined in a [job assignment]($m/JobAssignment)
 * in a team member's wage setting.
 */
export interface Job {
  /**
   * **Read only** The unique Square-assigned ID of the job. If you need a job ID for an API request,
   * call [ListJobs](api-endpoint:Team-ListJobs) or use the ID returned when you created the job.
   * You can also get job IDs from a team member's wage setting.
   */
  id?: string;
  /** The title of the job. */
  title?: string | null;
  /** Indicates whether team members can earn tips for the job. */
  isTipEligible?: boolean | null;
  /** The timestamp when the job was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the job was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * **Read only** The current version of the job. Include this field in `UpdateJob` requests to enable
   * [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency)
   * control and avoid overwrites from concurrent requests. Requests fail if the provided version doesn't
   * match the server version at the time of the request.
   */
  version?: number;
}

export const jobSchema: Schema<Job> = object({
  id: ['id', optional(string())],
  title: ['title', optional(nullable(string()))],
  isTipEligible: ['is_tip_eligible', optional(nullable(boolean()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  version: ['version', optional(number())],
});
