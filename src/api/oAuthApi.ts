import { ApiResponse, RequestOptions } from '../core';
import {
  ObtainTokenRequest,
  obtainTokenRequestSchema,
} from '../models/obtainTokenRequest';
import {
  ObtainTokenResponse,
  obtainTokenResponseSchema,
} from '../models/obtainTokenResponse';
import {
  RetrieveTokenStatusResponse,
  retrieveTokenStatusResponseSchema,
} from '../models/retrieveTokenStatusResponse';
import {
  RevokeTokenRequest,
  revokeTokenRequestSchema,
} from '../models/revokeTokenRequest';
import {
  RevokeTokenResponse,
  revokeTokenResponseSchema,
} from '../models/revokeTokenResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class OAuthApi extends BaseApi {
  /**
   * Revokes an access token generated with the OAuth flow.
   *
   * If an account has more than one OAuth access token for your application, this
   * endpoint revokes all of them, regardless of which token you specify.
   *
   * __Important:__ The `Authorization` header for this endpoint must have the
   * following format:
   *
   * ```
   * Authorization: Client APPLICATION_SECRET
   * ```
   *
   * Replace `APPLICATION_SECRET` with the application secret on the **OAuth**
   * page for your application in the Developer Dashboard.
   *
   * @param body          An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @param authorization Client APPLICATION_SECRET
   * @return Response from the API call
   */
  async revokeToken(
    body: RevokeTokenRequest,
    authorization: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RevokeTokenResponse>> {
    const req = this.createRequest('POST', '/oauth2/revoke');
    const mapped = req.prepareArgs({
      body: [body, revokeTokenRequestSchema],
      authorization: [authorization, string()],
    });
    req.header('Content-Type', 'application/json');
    req.header('Authorization', mapped.authorization);
    req.json(mapped.body);
    req.authenticate(false);
    return req.callAsJson(revokeTokenResponseSchema, requestOptions);
  }

  /**
   * Returns an OAuth access token and a refresh token unless the
   * `short_lived` parameter is set to `true`, in which case the endpoint
   * returns only an access token.
   *
   * The `grant_type` parameter specifies the type of OAuth request. If
   * `grant_type` is `authorization_code`, you must include the authorization
   * code you received when a seller granted you authorization. If `grant_type`
   * is `refresh_token`, you must provide a valid refresh token. If you're using
   * an old version of the Square APIs (prior to March 13, 2019), `grant_type`
   * can be `migration_token` and you must provide a valid migration token.
   *
   * You can use the `scopes` parameter to limit the set of permissions granted
   * to the access token and refresh token. You can use the `short_lived` parameter
   * to create an access token that expires in 24 hours.
   *
   * __Note:__ OAuth tokens should be encrypted and stored on a secure server.
   * Application clients should never interact directly with OAuth tokens.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  async obtainToken(
    body: ObtainTokenRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ObtainTokenResponse>> {
    const req = this.createRequest('POST', '/oauth2/token');
    const mapped = req.prepareArgs({ body: [body, obtainTokenRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate(false);
    return req.callAsJson(obtainTokenResponseSchema, requestOptions);
  }

  /**
   * Returns information about an [OAuth access token](https://developer.squareup.com/docs/build-
   * basics/access-tokens#get-an-oauth-access-token) or an application’s [personal access token](https:
   * //developer.squareup.com/docs/build-basics/access-tokens#get-a-personal-access-token).
   *
   * Add the access token to the Authorization header of the request.
   *
   * __Important:__ The `Authorization` header you provide to this endpoint must have the following
   * format:
   *
   * ```
   * Authorization: Bearer ACCESS_TOKEN
   * ```
   *
   * where `ACCESS_TOKEN` is a
   * [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-
   * tokens).
   *
   * If the access token is expired or not a valid access token, the endpoint returns an `UNAUTHORIZED`
   * error.
   *
   * @return Response from the API call
   */
  async retrieveTokenStatus(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveTokenStatusResponse>> {
    const req = this.createRequest('POST', '/oauth2/token/status');
    req.authenticate([{ global: true }]);
    return req.callAsJson(retrieveTokenStatusResponseSchema, requestOptions);
  }
}
