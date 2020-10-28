import { array, lazy, object, optional, Schema } from '../schema';
import {
  BusinessHoursPeriod,
  businessHoursPeriodSchema,
} from './businessHoursPeriod';

/** Represents the hours of operation for a business location. */
export interface BusinessHours {
  /**
   * The list of time periods during which the business is open. There may be at most 10
   * periods per day.
   */
  periods?: BusinessHoursPeriod[];
}

export const businessHoursSchema: Schema<BusinessHours> = object({
  periods: ['periods', optional(array(lazy(() => businessHoursPeriodSchema)))],
});
