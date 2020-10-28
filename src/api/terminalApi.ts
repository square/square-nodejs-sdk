import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  CancelTerminalCheckoutResponse,
  cancelTerminalCheckoutResponseSchema,
} from '../models/cancelTerminalCheckoutResponse';
import {
  CreateTerminalCheckoutRequest,
  createTerminalCheckoutRequestSchema,
} from '../models/createTerminalCheckoutRequest';
import {
  CreateTerminalCheckoutResponse,
  createTerminalCheckoutResponseSchema,
} from '../models/createTerminalCheckoutResponse';
import {
  GetTerminalCheckoutResponse,
  getTerminalCheckoutResponseSchema,
} from '../models/getTerminalCheckoutResponse';
import {
  SearchTerminalCheckoutsRequest,
  searchTerminalCheckoutsRequestSchema,
} from '../models/searchTerminalCheckoutsRequest';
import {
  SearchTerminalCheckoutsResponse,
  searchTerminalCheckoutsResponseSchema,
} from '../models/searchTerminalCheckoutsResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class TerminalApi extends BaseApi {
  /**
   * Creates a new Terminal checkout request and sends it to the specified device to take a payment for
   * the requested amount.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createTerminalCheckout(
    body: CreateTerminalCheckoutRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateTerminalCheckoutResponse>> {
    const req = this.createRequest('POST', '/v2/terminals/checkouts');
    const mapped = req.prepareArgs({
      body: [body, createTerminalCheckoutRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(createTerminalCheckoutResponseSchema, requestOptions);
  }

  /**
   * Retrieves a filtered list of Terminal checkout requests created by the account making the request.
   *
   * @param body An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchTerminalCheckouts(
    body: SearchTerminalCheckoutsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchTerminalCheckoutsResponse>> {
    const req = this.createRequest('POST', '/v2/terminals/checkouts/search');
    const mapped = req.prepareArgs({
      body: [body, searchTerminalCheckoutsRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(
      searchTerminalCheckoutsResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a Terminal checkout request by checkout_id.
   *
   * @param checkoutId  Unique ID for the desired `TerminalCheckout`
   * @return Response from the API call
   */
  async getTerminalCheckout(
    checkoutId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTerminalCheckoutResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ checkoutId: [checkoutId, string()] });
    req.appendTemplatePath`/v2/terminals/checkouts/${mapped.checkoutId}`;
    return req.callAsJson(getTerminalCheckoutResponseSchema, requestOptions);
  }

  /**
   * Cancels a Terminal checkout request, if the status of the request permits it.
   *
   * @param checkoutId  Unique ID for the desired `TerminalCheckout`
   * @return Response from the API call
   */
  async cancelTerminalCheckout(
    checkoutId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelTerminalCheckoutResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ checkoutId: [checkoutId, string()] });
    req.appendTemplatePath`/v2/terminals/checkouts/${mapped.checkoutId}/cancel`;
    return req.callAsJson(cancelTerminalCheckoutResponseSchema, requestOptions);
  }
}
