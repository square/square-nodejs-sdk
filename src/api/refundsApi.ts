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
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class RefundsApi extends BaseApi {
  /**
   * Retrieves a list of refunds for the account making the request.
   *
   * The maximum results per page is 100.
   *
   * @param beginTime   The timestamp for the beginning of the requested reporting period, in RFC 3339
   *                              format.  Default: The current time minus one year.
   * @param endTime     The timestamp for the end of the requested reporting period, in RFC 3339 format.
   *                              Default: The current time.
   * @param sortOrder   The order in which results are listed: - `ASC` - Oldest to newest. - `DESC` - Newest
   *                              to oldest (default).
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
   *                              cursor to retrieve the next set of results for the original query.  For more
   *                              information, see [Pagination](https://developer.squareup.
   *                              com/docs/basics/api101/pagination).
   * @param locationId  Limit results to the location supplied. By default, results are returned for all
   *                              locations associated with the seller.
   * @param status      If provided, only refunds with the given status are returned. For a list of refund
   *                              status values, see [PaymentRefund](#type-paymentrefund).  Default: If omitted,
   *                              refunds are returned regardless of their status.
   * @param sourceType  If provided, only refunds with the given source type are returned. - `CARD` - List
   *                              refunds only for payments where `CARD` was specified as the payment source.  Default:
   *                              If omitted, refunds are returned regardless of the source type.
   * @param limit       The maximum number of results to be returned in a single page.  It is possible to
   *                              receive fewer results than the specified limit on a given page.  If the supplied
   *                              value is greater than 100, no more than 100 results are returned.  Default: 100
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
    limit?: number,
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
      limit: [limit, optional(number())],
    });
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.query('sort_order', mapped.sortOrder);
    req.query('cursor', mapped.cursor);
    req.query('location_id', mapped.locationId);
    req.query('status', mapped.status);
    req.query('source_type', mapped.sourceType);
    req.query('limit', mapped.limit);
    return req.callAsJson(listPaymentRefundsResponseSchema, requestOptions);
  }

  /**
   * Refunds a payment. You can refund the entire payment amount or a
   * portion of it.
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
   * Retrieves a specific refund using the `refund_id`.
   *
   * @param refundId  The unique ID for the desired `PaymentRefund`.
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
