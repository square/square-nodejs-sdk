import { array, boolean, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

export interface RevokeTokenResponse {
  /** If the request is successful, this is `true`. */
  success?: boolean;
  /**
   * An error object that provides details about how creation of the obtain
   * token failed.
   */
  errors?: Error[];
}

export const revokeTokenResponseSchema: Schema<RevokeTokenResponse> = object({
  success: ['success', optional(boolean())],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
