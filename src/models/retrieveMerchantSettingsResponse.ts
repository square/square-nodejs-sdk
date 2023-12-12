import { array, lazy, object, optional, Schema } from '../schema';
import {
  CheckoutMerchantSettings,
  checkoutMerchantSettingsSchema,
} from './checkoutMerchantSettings';
import { Error, errorSchema } from './error';

export interface RetrieveMerchantSettingsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  merchantSettings?: CheckoutMerchantSettings;
}

export const retrieveMerchantSettingsResponseSchema: Schema<RetrieveMerchantSettingsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    merchantSettings: [
      'merchant_settings',
      optional(lazy(() => checkoutMerchantSettingsSchema)),
    ],
  }
);
