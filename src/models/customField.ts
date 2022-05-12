import { object, Schema, string } from '../schema';

/**
 * Describes a custom form field to add to the checkout page to collect more information from buyers during checkout.
 * For more information,
 * see [Specify checkout options](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations#specify-checkout-options-1).
 */
export interface CustomField {
  /** The title of the custom field. */
  title: string;
}

export const customFieldSchema: Schema<CustomField> = object({
  title: ['title', string()],
});
