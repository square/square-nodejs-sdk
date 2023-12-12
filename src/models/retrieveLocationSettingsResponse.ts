import { array, lazy, object, optional, Schema } from '../schema';
import {
  CheckoutLocationSettings,
  checkoutLocationSettingsSchema,
} from './checkoutLocationSettings';
import { Error, errorSchema } from './error';

export interface RetrieveLocationSettingsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  locationSettings?: CheckoutLocationSettings;
}

export const retrieveLocationSettingsResponseSchema: Schema<RetrieveLocationSettingsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    locationSettings: [
      'location_settings',
      optional(lazy(() => checkoutLocationSettingsSchema)),
    ],
  }
);
