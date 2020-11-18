import { lazy, object, Schema } from '../schema';
import { WageSetting, wageSettingSchema } from './wageSetting';

/** Represents an update request for the `WageSetting` object describing a `TeamMember`. */
export interface UpdateWageSettingRequest {
  /** An object representing a team member's wage information. */
  wageSetting: WageSetting;
}

export const updateWageSettingRequestSchema: Schema<UpdateWageSettingRequest> = object(
  { wageSetting: ['wage_setting', lazy(() => wageSettingSchema)] }
);
