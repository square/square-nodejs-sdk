import { array, lazy, object, optional, Schema } from '../schema';
import {
  CheckoutLocationSettings,
  checkoutLocationSettingsSchema,
} from './checkoutLocationSettings';
import { Error, errorSchema } from './error';

export interface UpdateLocationSettingsResponse {
  /** Any errors that occurred when updating the location settings. */
  errors?: Error[];
  locationSettings?: CheckoutLocationSettings;
}

export const updateLocationSettingsResponseSchema: Schema<UpdateLocationSettingsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    locationSettings: [
      'location_settings',
      optional(lazy(() => checkoutLocationSettingsSchema)),
    ],
  }
);
