import { ApiResponse, RequestOptions } from '../core';
import {
  CancelTerminalActionResponse,
  cancelTerminalActionResponseSchema,
} from '../models/cancelTerminalActionResponse';
import {
  CancelTerminalCheckoutResponse,
  cancelTerminalCheckoutResponseSchema,
} from '../models/cancelTerminalCheckoutResponse';
import {
  CancelTerminalRefundResponse,
  cancelTerminalRefundResponseSchema,
} from '../models/cancelTerminalRefundResponse';
import {
  CreateTerminalActionRequest,
  createTerminalActionRequestSchema,
} from '../models/createTerminalActionRequest';
import {
  CreateTerminalActionResponse,
  createTerminalActionResponseSchema,
} from '../models/createTerminalActionResponse';
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
  DismissTerminalActionResponse,
  dismissTerminalActionResponseSchema,
} from '../models/dismissTerminalActionResponse';
import {
  DismissTerminalCheckoutResponse,
  dismissTerminalCheckoutResponseSchema,
} from '../models/dismissTerminalCheckoutResponse';
import {
  DismissTerminalRefundResponse,
  dismissTerminalRefundResponseSchema,
} from '../models/dismissTerminalRefundResponse';
import {
  GetTerminalActionResponse,
  getTerminalActionResponseSchema,
} from '../models/getTerminalActionResponse';
import {
  GetTerminalCheckoutResponse,
  getTerminalCheckoutResponseSchema,
} from '../models/getTerminalCheckoutResponse';
import {
  GetTerminalRefundResponse,
  getTerminalRefundResponseSchema,
} from '../models/getTerminalRefundResponse';
import {
  SearchTerminalActionsRequest,
  searchTerminalActionsRequestSchema,
} from '../models/searchTerminalActionsRequest';
import {
  SearchTerminalActionsResponse,
  searchTerminalActionsResponseSchema,
} from '../models/searchTerminalActionsResponse';
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
   * Creates a Terminal action request and sends it to the specified device.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                           See the corresponding object definition for field
   *                                                           details.
   * @return Response from the API call
   */
  async createTerminalAction(
    body: CreateTerminalActionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateTerminalActionResponse>> {
    const req = this.createRequest('POST', '/v2/terminals/actions');
    const mapped = req.prepareArgs({
      body: [body, createTerminalActionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createTerminalActionResponseSchema, requestOptions);
  }

  /**
   * Retrieves a filtered list of Terminal action requests created by the account making the request.
   * Terminal action requests are available for 30 days.
   *
   * @param body         An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  async searchTerminalActions(
    body: SearchTerminalActionsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchTerminalActionsResponse>> {
    const req = this.createRequest('POST', '/v2/terminals/actions/search');
    const mapped = req.prepareArgs({
      body: [body, searchTerminalActionsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(searchTerminalActionsResponseSchema, requestOptions);
  }

  /**
   * Retrieves a Terminal action request by `action_id`. Terminal action requests are available for 30
   * days.
   *
   * @param actionId  Unique ID for the desired `TerminalAction`.
   * @return Response from the API call
   */
  async getTerminalAction(
    actionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTerminalActionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ actionId: [actionId, string()] });
    req.appendTemplatePath`/v2/terminals/actions/${mapped.actionId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(getTerminalActionResponseSchema, requestOptions);
  }

  /**
   * Cancels a Terminal action request if the status of the request permits it.
   *
   * @param actionId  Unique ID for the desired `TerminalAction`.
   * @return Response from the API call
   */
  async cancelTerminalAction(
    actionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelTerminalActionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ actionId: [actionId, string()] });
    req.appendTemplatePath`/v2/terminals/actions/${mapped.actionId}/cancel`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(cancelTerminalActionResponseSchema, requestOptions);
  }

  /**
   * Dismisses a Terminal action request if the status and type of the request permits it.
   *
   * See [Link and Dismiss Actions](https://developer.squareup.com/docs/terminal-api/advanced-
   * features/custom-workflows/link-and-dismiss-actions) for more details.
   *
   * @param actionId  Unique ID for the `TerminalAction` associated with the action to be dismissed.
   * @return Response from the API call
   */
  async dismissTerminalAction(
    actionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DismissTerminalActionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ actionId: [actionId, string()] });
    req.appendTemplatePath`/v2/terminals/actions/${mapped.actionId}/dismiss`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(dismissTerminalActionResponseSchema, requestOptions);
  }

  /**
   * Creates a Terminal checkout request and sends it to the specified device to take a payment
   * for the requested amount.
   *
   * @param body         An object containing the fields to POST for the
   *                                                             request.  See the corresponding object definition for
   *                                                             field details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createTerminalCheckoutResponseSchema, requestOptions);
  }

  /**
   * Returns a filtered list of Terminal checkout requests created by the application making the request.
   * Only Terminal checkout requests created for the merchant scoped to the OAuth token are returned.
   * Terminal checkout requests are available for 30 days.
   *
   * @param body         An object containing the fields to POST for the
   *                                                              request.  See the corresponding object definition for
   *                                                              field details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      searchTerminalCheckoutsResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a Terminal checkout request by `checkout_id`. Terminal checkout requests are available for
   * 30 days.
   *
   * @param checkoutId  The unique ID for the desired `TerminalCheckout`.
   * @return Response from the API call
   */
  async getTerminalCheckout(
    checkoutId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTerminalCheckoutResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ checkoutId: [checkoutId, string()] });
    req.appendTemplatePath`/v2/terminals/checkouts/${mapped.checkoutId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(getTerminalCheckoutResponseSchema, requestOptions);
  }

  /**
   * Cancels a Terminal checkout request if the status of the request permits it.
   *
   * @param checkoutId  The unique ID for the desired `TerminalCheckout`.
   * @return Response from the API call
   */
  async cancelTerminalCheckout(
    checkoutId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelTerminalCheckoutResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ checkoutId: [checkoutId, string()] });
    req.appendTemplatePath`/v2/terminals/checkouts/${mapped.checkoutId}/cancel`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(cancelTerminalCheckoutResponseSchema, requestOptions);
  }

  /**
   * Dismisses a Terminal checkout request if the status and type of the request permits it.
   *
   * @param checkoutId  Unique ID for the `TerminalCheckout` associated with the checkout to be dismissed.
   * @return Response from the API call
   */
  async dismissTerminalCheckout(
    checkoutId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DismissTerminalCheckoutResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ checkoutId: [checkoutId, string()] });
    req.appendTemplatePath`/v2/terminals/checkouts/${mapped.checkoutId}/dismiss`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      dismissTerminalCheckoutResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates a request to refund an Interac payment completed on a Square Terminal. Refunds for Interac
   * payments on a Square Terminal are supported only for Interac debit cards in Canada. Other refunds
   * for Terminal payments should use the Refunds API. For more information, see [Refunds
   * API]($e/Refunds).
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                           See the corresponding object definition for field
   *                                                           details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createTerminalRefundResponseSchema, requestOptions);
  }

  /**
   * Retrieves a filtered list of Interac Terminal refund requests created by the seller making the
   * request. Terminal refund requests are available for 30 days.
   *
   * @param body         An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(searchTerminalRefundsResponseSchema, requestOptions);
  }

  /**
   * Retrieves an Interac Terminal refund object by ID. Terminal refund objects are available for 30 days.
   *
   * @param terminalRefundId   The unique ID for the desired `TerminalRefund`.
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
    req.authenticate([{ global: true }]);
    return req.callAsJson(getTerminalRefundResponseSchema, requestOptions);
  }

  /**
   * Cancels an Interac Terminal refund request by refund request ID if the status of the request permits
   * it.
   *
   * @param terminalRefundId   The unique ID for the desired `TerminalRefund`.
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
    req.authenticate([{ global: true }]);
    return req.callAsJson(cancelTerminalRefundResponseSchema, requestOptions);
  }

  /**
   * Dismisses a Terminal refund request if the status and type of the request permits it.
   *
   * @param terminalRefundId   Unique ID for the `TerminalRefund` associated with the refund to be dismissed.
   * @return Response from the API call
   */
  async dismissTerminalRefund(
    terminalRefundId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DismissTerminalRefundResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      terminalRefundId: [terminalRefundId, string()],
    });
    req.appendTemplatePath`/v2/terminals/refunds/${mapped.terminalRefundId}/dismiss`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(dismissTerminalRefundResponseSchema, requestOptions);
  }
}
