import { array, lazy, nullable, object, optional, Schema } from '../schema';
import {
  BusinessHoursPeriod,
  businessHoursPeriodSchema,
} from './businessHoursPeriod';

/** The hours of operation for a location. */
export interface BusinessHours {
  /** The list of time periods during which the business is open. There can be at most 10 periods per day. */
  periods?: BusinessHoursPeriod[] | null;
}

export const businessHoursSchema: Schema<BusinessHours> = object({
  periods: [
    'periods',
    optional(nullable(array(lazy(() => businessHoursPeriodSchema)))),
  ],
});
