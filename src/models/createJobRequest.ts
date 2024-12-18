import { lazy, object, Schema, string } from '../schema';
import { Job, jobSchema } from './job';

/** Represents a [CreateJob]($e/Team/CreateJob) request. */
export interface CreateJobRequest {
  /**
   * Represents a job that can be assigned to [team members]($m/TeamMember). This object defines the
   * job's title and tip eligibility. Compensation is defined in a [job assignment]($m/JobAssignment)
   * in a team member's wage setting.
   */
  job: Job;
  /**
   * A unique identifier for the `CreateJob` request. Keys can be any valid string,
   * but must be unique for each request. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey: string;
}

export const createJobRequestSchema: Schema<CreateJobRequest> = object({
  job: ['job', lazy(() => jobSchema)],
  idempotencyKey: ['idempotency_key', string()],
});
