import { nullable, object, optional, Schema, string } from '../schema';

export interface CheckoutLocationSettingsBranding {
  headerType?: string;
  /** The HTML-supported hex color for the button on the checkout page (for example, "#FFFFFF"). */
  buttonColor?: string | null;
  buttonShape?: string;
}

export const checkoutLocationSettingsBrandingSchema: Schema<CheckoutLocationSettingsBranding> = object(
  {
    headerType: ['header_type', optional(string())],
    buttonColor: ['button_color', optional(nullable(string()))],
    buttonShape: ['button_shape', optional(string())],
  }
);
