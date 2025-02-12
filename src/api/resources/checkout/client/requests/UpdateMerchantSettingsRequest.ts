/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {
 *         merchantSettings: {}
 *     }
 */
export interface UpdateMerchantSettingsRequest {
    /** Describe your updates using the `merchant_settings` object. Make sure it contains only the fields that have changed. */
    merchantSettings: Square.CheckoutMerchantSettings;
}
