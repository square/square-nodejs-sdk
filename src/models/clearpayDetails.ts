import { object, optional, Schema, string } from '../schema';

/** Additional details about Clearpay payments. */
export interface ClearpayDetails {
  /** Email address on the buyer's Clearpay account. */
  emailAddress?: string;
}

export const clearpayDetailsSchema: Schema<ClearpayDetails> = object({
  emailAddress: ['email_address', optional(string())],
});
