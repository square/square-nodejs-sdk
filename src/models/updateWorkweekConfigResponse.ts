import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { WorkweekConfig, workweekConfigSchema } from './workweekConfig';

/**
 * The response to a request to update a `WorkweekConfig` object. Contains
 * the updated `WorkweekConfig` object. May contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface UpdateWorkweekConfigResponse {
  /**
   * Sets the Day of the week and hour of the day that a business starts a
   * work week. Used for the calculation of overtime pay.
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
