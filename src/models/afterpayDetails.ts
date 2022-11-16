import { nullable, object, optional, Schema, string } from '../schema';

/** Additional details about Afterpay payments. */
export interface AfterpayDetails {
  /** Email address on the buyer's Afterpay account. */
  emailAddress?: string | null;
}

export const afterpayDetailsSchema: Schema<AfterpayDetails> = object({
  emailAddress: ['email_address', optional(nullable(string()))],
});
