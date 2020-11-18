import { array, boolean, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

export interface CheckAppointmentsOnboardedResponse {
  /** Indicates whether the seller has enabled the Square Appointments service (`true`) or not (`false`). */
  appointmentsOnboarded?: boolean;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const checkAppointmentsOnboardedResponseSchema: Schema<CheckAppointmentsOnboardedResponse> = object(
  {
    appointmentsOnboarded: ['appointments_onboarded', optional(boolean())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
