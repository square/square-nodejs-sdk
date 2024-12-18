import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Job, jobSchema } from './job';

/**
 * Represents a [ListJobs]($e/Team/ListJobs) response. Either `jobs` or `errors`
 * is present in the response. If additional results are available, the `cursor` field is also present.
 */
export interface ListJobsResponse {
  /** The retrieved jobs. A single paged response contains up to 100 jobs. */
  jobs?: Job[];
  /**
   * An opaque cursor used to retrieve the next page of results. This field is present only
   * if the request succeeded and additional results are available. For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** The errors that occurred during the request. */
  errors?: Error[];
}

export const listJobsResponseSchema: Schema<ListJobsResponse> = object({
  jobs: ['jobs', optional(array(lazy(() => jobSchema)))],
  cursor: ['cursor', optional(string())],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
