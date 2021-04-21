import { object, optional, Schema, string } from '../schema';

/**
 * Represents an error encountered during a request to the Connect API.
 * See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.
 */
export interface Error {
  /**
   * Indicates which high-level category of error has occurred during a
   * request to the Connect API.
   */
  category: string;
  /**
   * Indicates the specific error that occurred during a request to a
   * Square API.
   */
  code: string;
  /** A human-readable description of the error for debugging purposes. */
  detail?: string;
  /**
   * The name of the field provided in the original request (if any) that
   * the error pertains to.
   */
  field?: string;
}

export const errorSchema: Schema<Error> = object({
  category: ['category', string()],
  code: ['code', string()],
  detail: ['detail', optional(string())],
  field: ['field', optional(string())],
});
