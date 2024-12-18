import { nullable, object, optional, Schema, string } from '../schema';

/** Represents a [ListJobs]($e/Team/ListJobs) request. */
export interface ListJobsRequest {
  /**
   * The pagination cursor returned by the previous call to this endpoint. Provide this
   * cursor to retrieve the next page of results for your original request. For more information,
   * see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
}

export const listJobsRequestSchema: Schema<ListJobsRequest> = object({
  cursor: ['cursor', optional(nullable(string()))],
});
