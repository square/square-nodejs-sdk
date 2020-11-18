import { object, optional, Schema, string } from '../schema';

export interface RenewTokenRequest {
  /** The token you want to renew. */
  accessToken?: string;
}

export const renewTokenRequestSchema: Schema<RenewTokenRequest> = object({
  accessToken: ['access_token', optional(string())],
});
