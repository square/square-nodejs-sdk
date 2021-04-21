import { object, optional, Schema, string } from '../schema';

/**
 * Represents the mapping that associates a loyalty account with a buyer.
 * Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see
 * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
export interface LoyaltyAccountMapping {
  /** The Square-assigned ID of the mapping. */
  id?: string;
  /** The type of mapping. */
  type?: string;
  /**
   * The mapping value, which is used with `type` to represent a phone number mapping. The value can be a phone number in E.164 format. For example, "+14155551111".
   * When specifying a mapping, the `phone_number` field is preferred to using `type` and `value`.
   */
  value?: string;
  /** The timestamp when the mapping was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * The phone number of the buyer, in E.164 format. For example, "+14155551111".
   * When specifying a mapping, this `phone_number` field is preferred to using `type` and `value`.
   */
  phoneNumber?: string;
}

export const loyaltyAccountMappingSchema: Schema<LoyaltyAccountMapping> = object(
  {
    id: ['id', optional(string())],
    type: ['type', optional(string())],
    value: ['value', optional(string())],
    createdAt: ['created_at', optional(string())],
    phoneNumber: ['phone_number', optional(string())],
  }
);
