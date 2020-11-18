import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { WorkweekConfig, workweekConfigSchema } from './workweekConfig';

/**
 * The response to a request for a set of `WorkweekConfig` objects. Contains
 * the requested `WorkweekConfig` objects. May contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface ListWorkweekConfigsResponse {
  /** A page of Employee Wage results. */
  workweekConfigs?: WorkweekConfig[];
  /**
   * Value supplied in the subsequent request to fetch the next page of
   * Employee Wage results.
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
