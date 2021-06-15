import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { WageSetting, wageSettingSchema } from './wageSetting';

/** Represents a response from a retrieve request containing the specified `WageSetting` object or error messages. */
export interface RetrieveWageSettingResponse {
  /** An object representing a team member's wage information. */
  wageSetting?: WageSetting;
  /** The errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveWageSettingResponseSchema: Schema<RetrieveWageSettingResponse> = object(
  {
    wageSetting: ['wage_setting', optional(lazy(() => wageSettingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
