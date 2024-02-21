import { ApiResponse, RequestOptions } from '../core';
import {
  CreateMobileAuthorizationCodeRequest,
  createMobileAuthorizationCodeRequestSchema,
} from '../models/createMobileAuthorizationCodeRequest';
import {
  CreateMobileAuthorizationCodeResponse,
  createMobileAuthorizationCodeResponseSchema,
} from '../models/createMobileAuthorizationCodeResponse';
import { BaseApi } from './baseApi';

export class MobileAuthorizationApi extends BaseApi {
  /**
   * Generates code to authorize a mobile application to connect to a Square card reader.
   *
   * Authorization codes are one-time-use codes and expire 60 minutes after being issued.
   *
   * __Important:__ The `Authorization` header you provide to this endpoint must have the following
   * format:
   *
   * ```
   * Authorization: Bearer ACCESS_TOKEN
   * ```
   *
   * Replace `ACCESS_TOKEN` with a
   * [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-
   * tokens).
   *
   * @param body         An object containing the fields to POST for
   *                                                                    the request.  See the corresponding object
   *                                                                    definition for field details.
   * @return Response from the API call
   */
  async createMobileAuthorizationCode(
    body: CreateMobileAuthorizationCodeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateMobileAuthorizationCodeResponse>> {
    const req = this.createRequest('POST', '/mobile/authorization-code');
    const mapped = req.prepareArgs({
      body: [body, createMobileAuthorizationCodeRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      createMobileAuthorizationCodeResponseSchema,
      requestOptions
    );
  }
}
