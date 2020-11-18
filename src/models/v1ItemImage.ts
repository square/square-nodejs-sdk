import { object, optional, Schema, string } from '../schema';

/** V1ItemImage */
export interface V1ItemImage {
  /** The image's unique ID. */
  id?: string;
  /** The image's publicly accessible URL. */
  url?: string;
}

export const v1ItemImageSchema: Schema<V1ItemImage> = object({
  id: ['id', optional(string())],
  url: ['url', optional(string())],
});
