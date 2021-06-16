import { object, Schema, string } from '../schema';

/** A request to retrieve gift cards by their GANs. */
export interface RetrieveGiftCardFromGANRequest {
  /**
   * The gift card account number (GAN) of the gift card to retrieve.
   * The maximum length of a GAN is 255 digits to account for third-party GANs that have been imported.
   * Square-issued gift cards have 16-digit GANs.
   */
  gan: string;
}

export const retrieveGiftCardFromGANRequestSchema: Schema<RetrieveGiftCardFromGANRequest> = object(
  { gan: ['gan', string()] }
);
