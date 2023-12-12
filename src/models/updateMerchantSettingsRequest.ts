import { lazy, object, Schema } from '../schema';
import {
  CheckoutMerchantSettings,
  checkoutMerchantSettingsSchema,
} from './checkoutMerchantSettings';

export interface UpdateMerchantSettingsRequest {
  merchantSettings: CheckoutMerchantSettings;
}

export const updateMerchantSettingsRequestSchema: Schema<UpdateMerchantSettingsRequest> = object(
  {
    merchantSettings: [
      'merchant_settings',
      lazy(() => checkoutMerchantSettingsSchema),
    ],
  }
);
