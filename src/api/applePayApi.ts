import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  RegisterDomainRequest,
  registerDomainRequestSchema,
} from '../models/registerDomainRequest';
import {
  RegisterDomainResponse,
  registerDomainResponseSchema,
} from '../models/registerDomainResponse';
import { BaseApi } from './baseApi';

export class ApplePayApi extends BaseApi {
  /**
   * Activates a domain for use with Web Apple Pay and Square. A validation
   * will be performed on this domain by Apple to ensure is it properly set up as
   * an Apple Pay enabled domain.
   *
   * This endpoint provides an easy way for platform developers to bulk activate
   * Web Apple Pay with Square for merchants using their platform.
   *
   * To learn more about Apple Pay on Web see the Apple Pay section in the
   * [Square Payment Form Walkthrough](https://developer.squareup.com/docs/payment-form/payment-form-
   * walkthrough).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   */
  async registerDomain(
    body: RegisterDomainRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RegisterDomainResponse>> {
    const req = this.createRequest('POST', '/v2/apple-pay/domains');
    const mapped = req.prepareArgs({
      body: [body, registerDomainRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(registerDomainResponseSchema, requestOptions);
  }
}
