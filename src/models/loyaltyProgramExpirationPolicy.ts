import { object, Schema, string } from '../schema';

/** Describes when the loyalty program expires. */
export interface LoyaltyProgramExpirationPolicy {
  /** The duration of time before points expire, in RFC 3339 format. */
  expirationDuration: string;
}

export const loyaltyProgramExpirationPolicySchema: Schema<LoyaltyProgramExpirationPolicy> = object(
  { expirationDuration: ['expiration_duration', string()] }
);
