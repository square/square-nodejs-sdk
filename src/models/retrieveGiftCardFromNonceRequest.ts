import { object, Schema, string } from '../schema';

/** A request to retrieve gift cards by using nonces. */
export interface RetrieveGiftCardFromNonceRequest {
  /** The nonce of the gift card to retrieve. */
  nonce: string;
}

export const retrieveGiftCardFromNonceRequestSchema: Schema<RetrieveGiftCardFromNonceRequest> = object(
  { nonce: ['nonce', string()] }
);
