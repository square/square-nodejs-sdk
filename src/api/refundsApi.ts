import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  GetPaymentRefundResponse,
  getPaymentRefundResponseSchema,
} from '../models/getPaymentRefundResponse';
import {
  ListPaymentRefundsResponse,
  listPaymentRefundsResponseSchema,
} from '../models/listPaymentRefundsResponse';
import {
  RefundPaymentRequest,
  refundPaymentRequestSchema,
} from '../models/refundPaymentRequest';
import {
  RefundPaymentResponse,
  refundPaymentResponseSchema,
} from '../models/refundPaymentResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class RefundsApi extends BaseApi {
  /**
   * Retrieves a list of refunds for the account making the request.
   *
   * Max results per page: 100
   *
   * @param beginTime   Timestamp for the beginning of the requested reporting period, in RFC 3339 format.
   *                              Default: The current time minus one year.
   * @param endTime     Timestamp for the end of the requested reporting period, in RFC 3339 format.
   *                              Default: The current time.
   * @param sortOrder   The order in which results are listed. - `ASC` - oldest to newest - `DESC` - newest
   *                              to oldest (default).
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                              retrieve the next set of results for the original query.  See [Pagination](https:
   *                              //developer.squareup.com/docs/basics/api101/pagination) for more information.
   * @param locationId  Limit results to the location supplied. By default, results are returned for all
   *                              locations associated with the merchant.
   * @param status      If provided, only refunds with the given status are returned. For a list of refund
   *                              status values, see [PaymentRefund](#type-paymentrefund).  Default: If omitted refunds
   *                              are returned regardless of status.
   * @param sourceType  If provided, only refunds with the given source type are returned. - `CARD` - List
   *                              refunds only for payments where card was specified as payment source.  Default: If
   *                              omitted refunds are returned regardless of source type.
   * @return Response from the API call
   */
  async listPaymentRefunds(
    beginTime?: string,
    endTime?: string,
    sortOrder?: string,
    cursor?: string,
    locationId?: string,
    status?: string,
    sourceType?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListPaymentRefundsResponse>> {
    const req = this.createRequest('GET', '/v2/refunds');
    const mapped = req.prepareArgs({
      beginTime: [beginTime, optional(string())],
      endTime: [endTime, optional(string())],
      sortOrder: [sortOrder, optional(string())],
      cursor: [cursor, optional(string())],
      locationId: [locationId, optional(string())],
      status: [status, optional(string())],
      sourceType: [sourceType, optional(string())],
    });
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.query('sort_order', mapped.sortOrder);
    req.query('cursor', mapped.cursor);
    req.query('location_id', mapped.locationId);
    req.query('status', mapped.status);
    req.query('source_type', mapped.sourceType);
    return req.callAsJson(listPaymentRefundsResponseSchema, requestOptions);
  }

  /**
   * Refunds a payment. You can refund the entire payment amount or a
   * portion of it. For more information, see
   * [Payments and Refunds Overview](https://developer.squareup.com/docs/payments-api/overview).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                            corresponding object definition for field details.
   * @return Response from the API call
   */
  async refundPayment(
    body: RefundPaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RefundPaymentResponse>> {
    const req = this.createRequest('POST', '/v2/refunds');
    const mapped = req.prepareArgs({
      body: [body, refundPaymentRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(refundPaymentResponseSchema, requestOptions);
  }

  /**
   * Retrieves a specific `Refund` using the `refund_id`.
   *
   * @param refundId  Unique ID for the desired `PaymentRefund`.
   * @return Response from the API call
   */
  async getPaymentRefund(
    refundId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPaymentRefundResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ refundId: [refundId, string()] });
    req.appendTemplatePath`/v2/refunds/${mapped.refundId}`;
    return req.callAsJson(getPaymentRefundResponseSchema, requestOptions);
  }
}
