import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { WorkweekConfig, workweekConfigSchema } from './workweekConfig';

/**
 * The response to a request to update a `WorkweekConfig` object. The response contains
 * the updated `WorkweekConfig` object and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface UpdateWorkweekConfigResponse {
  /**
   * Sets the day of the week and hour of the day that a business starts a
   * workweek. This is used to calculate overtime pay.
   */
  workweekConfig?: WorkweekConfig;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const updateWorkweekConfigResponseSchema: Schema<UpdateWorkweekConfigResponse> = object(
  {
    workweekConfig: [
      'workweek_config',
      optional(lazy(() => workweekConfigSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
