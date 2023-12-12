import { array, lazy, object, optional, Schema } from '../schema';
import {
  CheckoutMerchantSettings,
  checkoutMerchantSettingsSchema,
} from './checkoutMerchantSettings';
import { Error, errorSchema } from './error';

export interface UpdateMerchantSettingsResponse {
  /** Any errors that occurred when updating the merchant settings. */
  errors?: Error[];
  merchantSettings?: CheckoutMerchantSettings;
}

export const updateMerchantSettingsResponseSchema: Schema<UpdateMerchantSettingsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    merchantSettings: [
      'merchant_settings',
      optional(lazy(() => checkoutMerchantSettingsSchema)),
    ],
  }
);
