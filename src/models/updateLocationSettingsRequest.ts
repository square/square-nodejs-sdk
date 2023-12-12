import { lazy, object, Schema } from '../schema';
import {
  CheckoutLocationSettings,
  checkoutLocationSettingsSchema,
} from './checkoutLocationSettings';

export interface UpdateLocationSettingsRequest {
  locationSettings: CheckoutLocationSettings;
}

export const updateLocationSettingsRequestSchema: Schema<UpdateLocationSettingsRequest> = object(
  {
    locationSettings: [
      'location_settings',
      lazy(() => checkoutLocationSettingsSchema),
    ],
  }
);
