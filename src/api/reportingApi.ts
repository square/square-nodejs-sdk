import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  ListAdditionalRecipientReceivableRefundsResponse,
  listAdditionalRecipientReceivableRefundsResponseSchema,
} from '../models/listAdditionalRecipientReceivableRefundsResponse';
import {
  ListAdditionalRecipientReceivablesResponse,
  listAdditionalRecipientReceivablesResponseSchema,
} from '../models/listAdditionalRecipientReceivablesResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class ReportingApi extends BaseApi {
  /**
   * Returns a list of refunded transactions (across all possible originating locations) relating to
   * monies
   * credited to the provided location ID by another Square account using the `additional_recipients`
   * field in a transaction.
   *
   * Max results per [page](#paginatingresults): 50
   *
   * @param locationId  The ID of the location to list AdditionalRecipientReceivableRefunds for.
   * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
   *                              current time minus one year.
   * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
   *                              current time.
   * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
   *                              `DESC` for newest first).  Default value: `DESC`
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                              retrieve the next set of results for your original query.  See [Paginating
   *                              results](#paginatingresults) for more information.
   * @return Response from the API call
   * @deprecated
   */
  async listAdditionalRecipientReceivableRefunds(
    locationId: string,
    beginTime?: string,
    endTime?: string,
    sortOrder?: string,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListAdditionalRecipientReceivableRefundsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      beginTime: [beginTime, optional(string())],
      endTime: [endTime, optional(string())],
      sortOrder: [sortOrder, optional(string())],
      cursor: [cursor, optional(string())],
    });
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.query('sort_order', mapped.sortOrder);
    req.query('cursor', mapped.cursor);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/additional-recipient-receivable-refunds`;
    req.deprecated('ReportingApi.listAdditionalRecipientReceivableRefunds');
    return req.callAsJson(
      listAdditionalRecipientReceivableRefundsResponseSchema,
      requestOptions
    );
  }

  /**
   * Returns a list of receivables (across all possible sending locations) representing monies credited
   * to the provided location ID by another Square account using the `additional_recipients` field in a
   * transaction.
   *
   * Max results per [page](#paginatingresults): 50
   *
   * @param locationId  The ID of the location to list AdditionalRecipientReceivables for.
   * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
   *                              current time minus one year.
   * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
   *                              current time.
   * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
   *                              `DESC` for newest first).  Default value: `DESC`
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                              retrieve the next set of results for your original query.  See [Paginating
   *                              results](#paginatingresults) for more information.
   * @return Response from the API call
   * @deprecated
   */
  async listAdditionalRecipientReceivables(
    locationId: string,
    beginTime?: string,
    endTime?: string,
    sortOrder?: string,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListAdditionalRecipientReceivablesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      beginTime: [beginTime, optional(string())],
      endTime: [endTime, optional(string())],
      sortOrder: [sortOrder, optional(string())],
      cursor: [cursor, optional(string())],
    });
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.query('sort_order', mapped.sortOrder);
    req.query('cursor', mapped.cursor);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/additional-recipient-receivables`;
    req.deprecated('ReportingApi.listAdditionalRecipientReceivables');
    return req.callAsJson(
      listAdditionalRecipientReceivablesResponseSchema,
      requestOptions
    );
  }
}
