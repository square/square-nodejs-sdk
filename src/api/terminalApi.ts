import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  CancelTerminalCheckoutResponse,
  cancelTerminalCheckoutResponseSchema,
} from '../models/cancelTerminalCheckoutResponse';
import {
  CancelTerminalRefundResponse,
  cancelTerminalRefundResponseSchema,
} from '../models/cancelTerminalRefundResponse';
import {
  CreateTerminalCheckoutRequest,
  createTerminalCheckoutRequestSchema,
} from '../models/createTerminalCheckoutRequest';
import {
  CreateTerminalCheckoutResponse,
  createTerminalCheckoutResponseSchema,
} from '../models/createTerminalCheckoutResponse';
import {
  CreateTerminalRefundRequest,
  createTerminalRefundRequestSchema,
} from '../models/createTerminalRefundRequest';
import {
  CreateTerminalRefundResponse,
  createTerminalRefundResponseSchema,
} from '../models/createTerminalRefundResponse';
import {
  GetTerminalCheckoutResponse,
  getTerminalCheckoutResponseSchema,
} from '../models/getTerminalCheckoutResponse';
import {
  GetTerminalRefundResponse,
  getTerminalRefundResponseSchema,
} from '../models/getTerminalRefundResponse';
import {
  SearchTerminalCheckoutsRequest,
  searchTerminalCheckoutsRequestSchema,
} from '../models/searchTerminalCheckoutsRequest';
import {
  SearchTerminalCheckoutsResponse,
  searchTerminalCheckoutsResponseSchema,
} from '../models/searchTerminalCheckoutsResponse';
import {
  SearchTerminalRefundsRequest,
  searchTerminalRefundsRequestSchema,
} from '../models/searchTerminalRefundsRequest';
import {
  SearchTerminalRefundsResponse,
  searchTerminalRefundsResponseSchema,
} from '../models/searchTerminalRefundsResponse';
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
   * Cancels a Terminal checkout request if the status of the request permits it.
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

  /**
   * Creates a request to refund an Interac payment completed on a Square Terminal.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createTerminalRefund(
    body: CreateTerminalRefundRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateTerminalRefundResponse>> {
    const req = this.createRequest('POST', '/v2/terminals/refunds');
    const mapped = req.prepareArgs({
      body: [body, createTerminalRefundRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(createTerminalRefundResponseSchema, requestOptions);
  }

  /**
   * Retrieves a filtered list of Terminal Interac refund requests created by the seller making the
   * request.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchTerminalRefunds(
    body: SearchTerminalRefundsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchTerminalRefundsResponse>> {
    const req = this.createRequest('POST', '/v2/terminals/refunds/search');
    const mapped = req.prepareArgs({
      body: [body, searchTerminalRefundsRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(searchTerminalRefundsResponseSchema, requestOptions);
  }

  /**
   * Retrieves an Interac terminal refund object by ID.
   *
   * @param terminalRefundId   Unique ID for the desired `TerminalRefund`
   * @return Response from the API call
   */
  async getTerminalRefund(
    terminalRefundId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTerminalRefundResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      terminalRefundId: [terminalRefundId, string()],
    });
    req.appendTemplatePath`/v2/terminals/refunds/${mapped.terminalRefundId}`;
    return req.callAsJson(getTerminalRefundResponseSchema, requestOptions);
  }

  /**
   * Cancels an Interac terminal refund request by refund request ID if the status of the request permits
   * it.
   *
   * @param terminalRefundId   Unique ID for the desired `TerminalRefund`
   * @return Response from the API call
   */
  async cancelTerminalRefund(
    terminalRefundId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelTerminalRefundResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      terminalRefundId: [terminalRefundId, string()],
    });
    req.appendTemplatePath`/v2/terminals/refunds/${mapped.terminalRefundId}/cancel`;
    return req.callAsJson(cancelTerminalRefundResponseSchema, requestOptions);
  }
}
