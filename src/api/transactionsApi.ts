import { ApiResponse, RequestOptions } from '../core';
import {
  CaptureTransactionResponse,
  captureTransactionResponseSchema,
} from '../models/captureTransactionResponse';
import {
  ListTransactionsResponse,
  listTransactionsResponseSchema,
} from '../models/listTransactionsResponse';
import {
  RetrieveTransactionResponse,
  retrieveTransactionResponseSchema,
} from '../models/retrieveTransactionResponse';
import {
  VoidTransactionResponse,
  voidTransactionResponseSchema,
} from '../models/voidTransactionResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class TransactionsApi extends BaseApi {
  /**
   * Lists transactions for a particular location.
   *
   * Transactions include payment information from sales and exchanges and refund
   * information from returns and exchanges.
   *
   * Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50
   *
   * @param locationId  The ID of the location to list transactions for.
   * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for
   *                              details on date inclusivity/exclusivity.  Default value: The current time minus one
   *                              year.
   * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for
   *                              details on date inclusivity/exclusivity.  Default value: The current time.
   * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
   *                              `DESC` for newest first).  Default value: `DESC`
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                              retrieve the next set of results for your original query.  See [Paginating
   *                              results](https://developer.squareup.com/docs/working-with-apis/pagination) for more
   *                              information.
   * @return Response from the API call
   * @deprecated
   */
  async listTransactions(
    locationId: string,
    beginTime?: string,
    endTime?: string,
    sortOrder?: string,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListTransactionsResponse>> {
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
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/transactions`;
    req.deprecated('TransactionsApi.listTransactions');
    return req.callAsJson(listTransactionsResponseSchema, requestOptions);
  }

  /**
   * Retrieves details for a single transaction.
   *
   * @param locationId     The ID of the transaction's associated location.
   * @param transactionId  The ID of the transaction to retrieve.
   * @return Response from the API call
   * @deprecated
   */
  async retrieveTransaction(
    locationId: string,
    transactionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveTransactionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      transactionId: [transactionId, string()],
    });
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/transactions/${mapped.transactionId}`;
    req.deprecated('TransactionsApi.retrieveTransaction');
    return req.callAsJson(retrieveTransactionResponseSchema, requestOptions);
  }

  /**
   * Captures a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
   * endpoint with a `delay_capture` value of `true`.
   *
   *
   * See [Delayed capture transactions](https://developer.squareup.
   * com/docs/payments/transactions/overview#delayed-capture)
   * for more information.
   *
   * @param locationId
   * @param transactionId
   * @return Response from the API call
   * @deprecated
   */
  async captureTransaction(
    locationId: string,
    transactionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CaptureTransactionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      transactionId: [transactionId, string()],
    });
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/transactions/${mapped.transactionId}/capture`;
    req.deprecated('TransactionsApi.captureTransaction');
    return req.callAsJson(captureTransactionResponseSchema, requestOptions);
  }

  /**
   * Cancels a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
   * endpoint with a `delay_capture` value of `true`.
   *
   *
   * See [Delayed capture transactions](https://developer.squareup.
   * com/docs/payments/transactions/overview#delayed-capture)
   * for more information.
   *
   * @param locationId
   * @param transactionId
   * @return Response from the API call
   * @deprecated
   */
  async voidTransaction(
    locationId: string,
    transactionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<VoidTransactionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      transactionId: [transactionId, string()],
    });
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/transactions/${mapped.transactionId}/void`;
    req.deprecated('TransactionsApi.voidTransaction');
    return req.callAsJson(voidTransactionResponseSchema, requestOptions);
  }
}
