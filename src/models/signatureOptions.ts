import { array, lazy, object, optional, Schema, string } from '../schema';
import { SignatureImage, signatureImageSchema } from './signatureImage';

export interface SignatureOptions {
  /** The title text to display in the signature capture flow on the Terminal. */
  title: string;
  /** The body text to display in the signature capture flow on the Terminal. */
  body: string;
  /** An image representation of the collected signature. */
  signature?: SignatureImage[];
}

export const signatureOptionsSchema: Schema<SignatureOptions> = object({
  title: ['title', string()],
  body: ['body', string()],
  signature: ['signature', optional(array(lazy(() => signatureImageSchema)))],
});
