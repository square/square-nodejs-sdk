import { boolean, object, optional, Schema } from '../schema';

export interface RevokeTokenResponse {
  /** If the request is successful, this is true. */
  success?: boolean;
}

export const revokeTokenResponseSchema: Schema<RevokeTokenResponse> = object({
  success: ['success', optional(boolean())],
});
