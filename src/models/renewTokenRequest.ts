import { nullable, object, optional, Schema, string } from '../schema';

export interface RenewTokenRequest {
  /** The token you want to renew. */
  accessToken?: string | null;
}

export const renewTokenRequestSchema: Schema<RenewTokenRequest> = object({
  accessToken: ['access_token', optional(nullable(string()))],
});
