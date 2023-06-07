import { object, optional, Schema, string } from '../schema';

export interface SignatureImage {
  /**
   * The mime/type of the image data.
   * Use `image/png;base64` for png.
   */
  imageType?: string;
  /** The base64 representation of the image. */
  data?: string;
}

export const signatureImageSchema: Schema<SignatureImage> = object({
  imageType: ['image_type', optional(string())],
  data: ['data', optional(string())],
});
