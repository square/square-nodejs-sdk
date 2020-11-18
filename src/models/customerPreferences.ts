import { boolean, object, optional, Schema } from '../schema';

/** Represents communication preferences for the customer profile. */
export interface CustomerPreferences {
  /** The customer has unsubscribed from receiving marketing campaign emails. */
  emailUnsubscribed?: boolean;
}

export const customerPreferencesSchema: Schema<CustomerPreferences> = object({
  emailUnsubscribed: ['email_unsubscribed', optional(boolean())],
});
