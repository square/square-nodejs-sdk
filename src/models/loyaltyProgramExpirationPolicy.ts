import { object, Schema, string } from '../schema';

/** Describes when the loyalty program expires. */
export interface LoyaltyProgramExpirationPolicy {
  /** The number of months before points expire, in RFC 3339 duration format. For example, a value of `P12M` represents a duration of 12 months. */
  expirationDuration: string;
}

export const loyaltyProgramExpirationPolicySchema: Schema<LoyaltyProgramExpirationPolicy> = object(
  { expirationDuration: ['expiration_duration', string()] }
);
