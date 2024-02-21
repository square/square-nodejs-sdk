import { ApiResponse, RequestOptions } from '../core';
import {
  GetPayoutResponse,
  getPayoutResponseSchema,
} from '../models/getPayoutResponse';
import {
  ListPayoutEntriesResponse,
  listPayoutEntriesResponseSchema,
} from '../models/listPayoutEntriesResponse';
import {
  ListPayoutsResponse,
  listPayoutsResponseSchema,
} from '../models/listPayoutsResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class PayoutsApi extends BaseApi {
  /**
   * Retrieves a list of all payouts for the default location.
   * You can filter payouts by location ID, status, time range, and order them in ascending or descending
   * order.
   * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
   *
   * @param locationId  The ID of the location for which to list the payouts. By default, payouts are
   *                              returned for the default (main) location associated with the seller.
   * @param status      If provided, only payouts with the given status are returned.
   * @param beginTime   The timestamp for the beginning of the payout creation time, in RFC 3339 format.
   *                              Inclusive. Default: The current time minus one year.
   * @param endTime     The timestamp for the end of the payout creation time, in RFC 3339 format. Default:
   *                              The current time.
   * @param sortOrder   The order in which payouts are listed.
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
   *                              cursor to retrieve the next set of results for the original query. For more
   *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
   *                              api-patterns/pagination). If request parameters change between requests, subsequent
   *                              results may contain duplicates or missing records.
   * @param limit       The maximum number of results to be returned in a single page. It is possible to
   *                              receive fewer results than the specified limit on a given page. The default value of
   *                              100 is also the maximum allowed value. If the provided value is greater than 100, it
   *                              is ignored and the default value is used instead. Default: `100`
   * @return Response from the API call
   */
  async listPayouts(
    locationId?: string,
    status?: string,
    beginTime?: string,
    endTime?: string,
    sortOrder?: string,
    cursor?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListPayoutsResponse>> {
    const req = this.createRequest('GET', '/v2/payouts');
    const mapped = req.prepareArgs({
      locationId: [locationId, optional(string())],
      status: [status, optional(string())],
      beginTime: [beginTime, optional(string())],
      endTime: [endTime, optional(string())],
      sortOrder: [sortOrder, optional(string())],
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('location_id', mapped.locationId);
    req.query('status', mapped.status);
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.query('sort_order', mapped.sortOrder);
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.authenticate([{ global: true }]);
    return req.callAsJson(listPayoutsResponseSchema, requestOptions);
  }

  /**
   * Retrieves details of a specific payout identified by a payout ID.
   * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
   *
   * @param payoutId  The ID of the payout to retrieve the information for.
   * @return Response from the API call
   */
  async getPayout(
    payoutId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPayoutResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ payoutId: [payoutId, string()] });
    req.appendTemplatePath`/v2/payouts/${mapped.payoutId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(getPayoutResponseSchema, requestOptions);
  }

  /**
   * Retrieves a list of all payout entries for a specific payout.
   * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
   *
   * @param payoutId   The ID of the payout to retrieve the information for.
   * @param sortOrder  The order in which payout entries are listed.
   * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this cursor
   *                             to retrieve the next set of results for the original query. For more information, see
   *                             [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
   *                             patterns/pagination). If request parameters change between requests, subsequent
   *                             results may contain duplicates or missing records.
   * @param limit      The maximum number of results to be returned in a single page. It is possible to
   *                             receive fewer results than the specified limit on a given page. The default value of
   *                             100 is also the maximum allowed value. If the provided value is greater than 100, it
   *                             is ignored and the default value is used instead. Default: `100`
   * @return Response from the API call
   */
  async listPayoutEntries(
    payoutId: string,
    sortOrder?: string,
    cursor?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListPayoutEntriesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      payoutId: [payoutId, string()],
      sortOrder: [sortOrder, optional(string())],
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('sort_order', mapped.sortOrder);
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.appendTemplatePath`/v2/payouts/${mapped.payoutId}/payout-entries`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(listPayoutEntriesResponseSchema, requestOptions);
  }
}
