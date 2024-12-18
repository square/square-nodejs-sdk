import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Job, jobSchema } from './job';

/**
 * Represents an [UpdateJob]($e/Team/UpdateJob) response. Either `job` or `errors`
 * is present in the response.
 */
export interface UpdateJobResponse {
  /**
   * Represents a job that can be assigned to [team members]($m/TeamMember). This object defines the
   * job's title and tip eligibility. Compensation is defined in a [job assignment]($m/JobAssignment)
   * in a team member's wage setting.
   */
  job?: Job;
  /** The errors that occurred during the request. */
  errors?: Error[];
}

export const updateJobResponseSchema: Schema<UpdateJobResponse> = object({
  job: ['job', optional(lazy(() => jobSchema))],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
