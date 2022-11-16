import { nullable, object, optional, Schema, string } from '../schema';

/** Details about the application that took the payment. */
export interface ApplicationDetails {
  /** A list of products to return to external callers. */
  squareProduct?: string;
  /**
   * The Square ID assigned to the application used to take the payment.
   * Application developers can use this information to identify payments that
   * their application processed.
   * For example, if a developer uses a custom application to process payments,
   * this field contains the application ID from the Developer Dashboard.
   * If a seller uses a [Square App Marketplace](https://developer.squareup.com/docs/app-marketplace)
   * application to process payments, the field contains the corresponding application ID.
   */
  applicationId?: string | null;
}

export const applicationDetailsSchema: Schema<ApplicationDetails> = object({
  squareProduct: ['square_product', optional(string())],
  applicationId: ['application_id', optional(nullable(string()))],
});
