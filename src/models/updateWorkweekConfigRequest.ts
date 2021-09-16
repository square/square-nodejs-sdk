import { lazy, object, Schema } from '../schema';
import { WorkweekConfig, workweekConfigSchema } from './workweekConfig';

/** A request to update a `WorkweekConfig` object. */
export interface UpdateWorkweekConfigRequest {
  /**
   * Sets the day of the week and hour of the day that a business starts a
   * workweek. This is used to calculate overtime pay.
   */
  workweekConfig: WorkweekConfig;
}

export const updateWorkweekConfigRequestSchema: Schema<UpdateWorkweekConfigRequest> = object(
  { workweekConfig: ['workweek_config', lazy(() => workweekConfigSchema)] }
);
