import { object, optional, Schema, string } from '../schema';

/**
 * Associates a loyalty account with the buyer's phone number.
 * For more information, see
 * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
export interface LoyaltyAccountMapping {
  /** The Square-assigned ID of the mapping. */
  id?: string;
  /** The type of mapping. */
  type: string;
  /** The phone number, in E.164 format. For example, "+14155551111". */
  value: string;
  /** The timestamp when the mapping was created, in RFC 3339 format. */
  createdAt?: string;
}

export const loyaltyAccountMappingSchema: Schema<LoyaltyAccountMapping> = object(
  {
    id: ['id', optional(string())],
    type: ['type', string()],
    value: ['value', string()],
    createdAt: ['created_at', optional(string())],
  }
);
