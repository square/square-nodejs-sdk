import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { WorkweekConfig, workweekConfigSchema } from './workweekConfig';

/**
 * The response to a request for a set of `WorkweekConfig` objects. The response contains
 * the requested `WorkweekConfig` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface ListWorkweekConfigsResponse {
  /** A page of `WorkweekConfig` results. */
  workweekConfigs?: WorkweekConfig[];
  /**
   * The value supplied in the subsequent request to fetch the next page of
   * `WorkweekConfig` results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listWorkweekConfigsResponseSchema: Schema<ListWorkweekConfigsResponse> = object(
  {
    workweekConfigs: [
      'workweek_configs',
      optional(array(lazy(() => workweekConfigSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
