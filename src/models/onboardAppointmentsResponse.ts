import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

export interface OnboardAppointmentsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const onboardAppointmentsResponseSchema: Schema<OnboardAppointmentsResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
