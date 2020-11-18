import { object, optional, Schema, string } from '../schema';

/** Additional information for a single-location account specified by its associated business account, if it has one. */
export interface V1MerchantLocationDetails {
  /** The nickname assigned to the single-location account by the parent business. This value appears in the parent business's multi-location dashboard. */
  nickname?: string;
}

export const v1MerchantLocationDetailsSchema: Schema<V1MerchantLocationDetails> = object(
  { nickname: ['nickname', optional(string())] }
);
