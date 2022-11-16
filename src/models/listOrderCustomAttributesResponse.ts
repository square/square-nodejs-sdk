import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';
import { Error, errorSchema } from './error';

/** Represents a response from listing order custom attributes. */
export interface ListOrderCustomAttributesResponse {
  /** The retrieved custom attributes. If no custom attribute are found, Square returns an empty object (`{}`). */
  customAttributes?: CustomAttribute[];
  /**
   * The cursor to provide in your next call to this endpoint to retrieve the next page of results for your original request.
   * This field is present only if the request succeeded and additional results are available.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listOrderCustomAttributesResponseSchema: Schema<ListOrderCustomAttributesResponse> = object(
  {
    customAttributes: [
      'custom_attributes',
      optional(array(lazy(() => customAttributeSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
