import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { WageSetting, wageSettingSchema } from './wageSetting';

/**
 * Represents a response from an update request containing the updated `WageSetting` object
 * or error messages.
 */
export interface UpdateWageSettingResponse {
  /**
   * Represents information about the overtime exemption status, job assignments, and compensation
   * for a [team member]($m/TeamMember).
   */
  wageSetting?: WageSetting;
  /** The errors that occurred during the request. */
  errors?: Error[];
}

export const updateWageSettingResponseSchema: Schema<UpdateWageSettingResponse> = object(
  {
    wageSetting: ['wage_setting', optional(lazy(() => wageSettingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
