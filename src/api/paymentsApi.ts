import { ApiResponse, RequestOptions } from '../core';
import {
  CancelPaymentByIdempotencyKeyRequest,
  cancelPaymentByIdempotencyKeyRequestSchema,
} from '../models/cancelPaymentByIdempotencyKeyRequest';
import {
  CancelPaymentByIdempotencyKeyResponse,
  cancelPaymentByIdempotencyKeyResponseSchema,
} from '../models/cancelPaymentByIdempotencyKeyResponse';
import {
  CancelPaymentResponse,
  cancelPaymentResponseSchema,
} from '../models/cancelPaymentResponse';
import {
  CompletePaymentRequest,
  completePaymentRequestSchema,
} from '../models/completePaymentRequest';
import {
  CompletePaymentResponse,
  completePaymentResponseSchema,
} from '../models/completePaymentResponse';
import {
  CreatePaymentRequest,
  createPaymentRequestSchema,
} from '../models/createPaymentRequest';
import {
  CreatePaymentResponse,
  createPaymentResponseSchema,
} from '../models/createPaymentResponse';
import {
  GetPaymentResponse,
  getPaymentResponseSchema,
} from '../models/getPaymentResponse';
import {
  ListPaymentsResponse,
  listPaymentsResponseSchema,
} from '../models/listPaymentsResponse';
import {
  UpdatePaymentRequest,
  updatePaymentRequestSchema,
} from '../models/updatePaymentRequest';
import {
  UpdatePaymentResponse,
  updatePaymentResponseSchema,
} from '../models/updatePaymentResponse';
import { bigint, boolean, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class PaymentsApi extends BaseApi {
  /**
   * Retrieves a list of payments taken by the account making the request.
   *
   * Results are eventually consistent, and new payments or changes to payments might take several
   * seconds to appear.
   *
   * The maximum results per page is 100.
   *
   * @param beginTime             Indicates the start of the time range to retrieve payments for, in RFC
   *                                         3339 format.   The range is determined using the `created_at` field for
   *                                         each Payment. Inclusive. Default: The current time minus one year.
   * @param endTime               Indicates the end of the time range to retrieve payments for, in RFC 3339
   *                                         format.  The  range is determined using the `created_at` field for each
   *                                         Payment.  Default: The current time.
   * @param sortOrder             The order in which results are listed by `ListPaymentsRequest.sort_field`:
   *                                         - `ASC` - Oldest to newest. - `DESC` - Newest to oldest (default).
   * @param cursor                A pagination cursor returned by a previous call to this endpoint. Provide
   *                                         this cursor to retrieve the next set of results for the original query.
   *                                         For more information, see [Pagination](https://developer.squareup.
   *                                         com/docs/build-basics/common-api-patterns/pagination).
   * @param locationId            Limit results to the location supplied. By default, results are returned
   *                                         for the default (main) location associated with the seller.
   * @param total                 The exact amount in the `total_money` for a payment.
   * @param last4                 The last four digits of a payment card.
   * @param cardBrand             The brand of the payment card (for example, VISA).
   * @param limit                 The maximum number of results to be returned in a single page. It is
   *                                         possible to receive fewer results than the specified limit on a given page.
   *                                         The default value of 100 is also the maximum allowed value. If the
   *                                         provided value is  greater than 100, it is ignored and the default value
   *                                         is used instead.  Default: `100`
   * @param isOfflinePayment      Whether the payment was taken offline or not.
   * @param offlineBeginTime      Indicates the start of the time range for which to retrieve offline
   *                                         payments, in RFC 3339 format for timestamps. The range is determined using
   *                                         the `offline_payment_details.client_created_at` field for each Payment. If
   *                                         set, payments without a value set in `offline_payment_details.
   *                                         client_created_at` will not be returned.  Default: The current time.
   * @param offlineEndTime        Indicates the end of the time range for which to retrieve offline
   *                                         payments, in RFC 3339 format for timestamps. The range is determined using
   *                                         the `offline_payment_details.client_created_at` field for each Payment. If
   *                                         set, payments without a value set in `offline_payment_details.
   *                                         client_created_at` will not be returned.  Default: The current time.
   * @param updatedAtBeginTime    Indicates the start of the time range to retrieve payments for, in RFC
   *                                         3339 format.  The range is determined using the `updated_at` field for
   *                                         each Payment.
   * @param updatedAtEndTime      Indicates the end of the time range to retrieve payments for, in RFC 3339
   *                                         format.  The range is determined using the `updated_at` field for each
   *                                         Payment.
   * @param sortField             The field used to sort results by. The default is `CREATED_AT`.
   * @return Response from the API call
   */
  async listPayments(
    beginTime?: string,
    endTime?: string,
    sortOrder?: string,
    cursor?: string,
    locationId?: string,
    total?: bigint,
    last4?: string,
    cardBrand?: string,
    limit?: number,
    isOfflinePayment?: boolean,
    offlineBeginTime?: string,
    offlineEndTime?: string,
    updatedAtBeginTime?: string,
    updatedAtEndTime?: string,
    sortField?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListPaymentsResponse>> {
    const req = this.createRequest('GET', '/v2/payments');
    const mapped = req.prepareArgs({
      beginTime: [beginTime, optional(string())],
      endTime: [endTime, optional(string())],
      sortOrder: [sortOrder, optional(string())],
      cursor: [cursor, optional(string())],
      locationId: [locationId, optional(string())],
      total: [total, optional(bigint())],
      last4: [last4, optional(string())],
      cardBrand: [cardBrand, optional(string())],
      limit: [limit, optional(number())],
      isOfflinePayment: [isOfflinePayment, optional(boolean())],
      offlineBeginTime: [offlineBeginTime, optional(string())],
      offlineEndTime: [offlineEndTime, optional(string())],
      updatedAtBeginTime: [updatedAtBeginTime, optional(string())],
      updatedAtEndTime: [updatedAtEndTime, optional(string())],
      sortField: [sortField, optional(string())],
    });
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.query('sort_order', mapped.sortOrder);
    req.query('cursor', mapped.cursor);
    req.query('location_id', mapped.locationId);
    req.query('total', mapped.total);
    req.query('last_4', mapped.last4);
    req.query('card_brand', mapped.cardBrand);
    req.query('limit', mapped.limit);
    req.query('is_offline_payment', mapped.isOfflinePayment);
    req.query('offline_begin_time', mapped.offlineBeginTime);
    req.query('offline_end_time', mapped.offlineEndTime);
    req.query('updated_at_begin_time', mapped.updatedAtBeginTime);
    req.query('updated_at_end_time', mapped.updatedAtEndTime);
    req.query('sort_field', mapped.sortField);
    req.authenticate([{ global: true }]);
    return req.callAsJson(listPaymentsResponseSchema, requestOptions);
  }

  /**
   * Creates a payment using the provided source. You can use this endpoint
   * to charge a card (credit/debit card or
   * Square gift card) or record a payment that the seller received outside of Square
   * (cash payment from a buyer or a payment that an external entity
   * processed on behalf of the seller).
   *
   * The endpoint creates a
   * `Payment` object and returns it in the response.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createPayment(
    body: CreatePaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreatePaymentResponse>> {
    const req = this.createRequest('POST', '/v2/payments');
    const mapped = req.prepareArgs({
      body: [body, createPaymentRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createPaymentResponseSchema, requestOptions);
  }

  /**
   * Cancels (voids) a payment identified by the idempotency key that is specified in the
   * request.
   *
   * Use this method when the status of a `CreatePayment` request is unknown (for example, after you send
   * a
   * `CreatePayment` request, a network error occurs and you do not get a response). In this case, you
   * can
   * direct Square to cancel the payment using this endpoint. In the request, you provide the same
   * idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
   * canceling the payment, you can submit your `CreatePayment` request again.
   *
   * Note that if no payment with the specified idempotency key is found, no action is taken and the
   * endpoint
   * returns successfully.
   *
   * @param body         An object containing the fields to POST for
   *                                                                    the request.  See the corresponding object
   *                                                                    definition for field details.
   * @return Response from the API call
   */
  async cancelPaymentByIdempotencyKey(
    body: CancelPaymentByIdempotencyKeyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelPaymentByIdempotencyKeyResponse>> {
    const req = this.createRequest('POST', '/v2/payments/cancel');
    const mapped = req.prepareArgs({
      body: [body, cancelPaymentByIdempotencyKeyRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      cancelPaymentByIdempotencyKeyResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves details for a specific payment.
   *
   * @param paymentId  A unique ID for the desired payment.
   * @return Response from the API call
   */
  async getPayment(
    paymentId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPaymentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ paymentId: [paymentId, string()] });
    req.appendTemplatePath`/v2/payments/${mapped.paymentId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(getPaymentResponseSchema, requestOptions);
  }

  /**
   * Updates a payment with the APPROVED status.
   * You can update the `amount_money` and `tip_money` using this endpoint.
   *
   * @param paymentId    The ID of the payment to update.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async updatePayment(
    paymentId: string,
    body: UpdatePaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdatePaymentResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      paymentId: [paymentId, string()],
      body: [body, updatePaymentRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/payments/${mapped.paymentId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(updatePaymentResponseSchema, requestOptions);
  }

  /**
   * Cancels (voids) a payment. You can use this endpoint to cancel a payment with
   * the APPROVED `status`.
   *
   * @param paymentId  The ID of the payment to cancel.
   * @return Response from the API call
   */
  async cancelPayment(
    paymentId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelPaymentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ paymentId: [paymentId, string()] });
    req.appendTemplatePath`/v2/payments/${mapped.paymentId}/cancel`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(cancelPaymentResponseSchema, requestOptions);
  }

  /**
   * Completes (captures) a payment.
   * By default, payments are set to complete immediately after they are created.
   *
   * You can use this endpoint to complete a payment with the APPROVED `status`.
   *
   * @param paymentId    The unique ID identifying the payment to be completed.
   * @param body         An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async completePayment(
    paymentId: string,
    body: CompletePaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CompletePaymentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      paymentId: [paymentId, string()],
      body: [body, completePaymentRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/payments/${mapped.paymentId}/complete`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(completePaymentResponseSchema, requestOptions);
  }
}
