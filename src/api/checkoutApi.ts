import { ApiResponse, RequestOptions } from '../core';
import {
  CreateCheckoutRequest,
  createCheckoutRequestSchema,
} from '../models/createCheckoutRequest';
import {
  CreateCheckoutResponse,
  createCheckoutResponseSchema,
} from '../models/createCheckoutResponse';
import {
  CreatePaymentLinkRequest,
  createPaymentLinkRequestSchema,
} from '../models/createPaymentLinkRequest';
import {
  CreatePaymentLinkResponse,
  createPaymentLinkResponseSchema,
} from '../models/createPaymentLinkResponse';
import {
  DeletePaymentLinkResponse,
  deletePaymentLinkResponseSchema,
} from '../models/deletePaymentLinkResponse';
import {
  ListPaymentLinksResponse,
  listPaymentLinksResponseSchema,
} from '../models/listPaymentLinksResponse';
import {
  RetrievePaymentLinkResponse,
  retrievePaymentLinkResponseSchema,
} from '../models/retrievePaymentLinkResponse';
import {
  UpdatePaymentLinkRequest,
  updatePaymentLinkRequestSchema,
} from '../models/updatePaymentLinkRequest';
import {
  UpdatePaymentLinkResponse,
  updatePaymentLinkResponseSchema,
} from '../models/updatePaymentLinkResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class CheckoutApi extends BaseApi {
  /**
   * Links a `checkoutId` to a `checkout_page_url` that customers are
   * directed to in order to provide their payment information using a
   * payment processing workflow hosted on connect.squareup.com.
   *
   *
   * NOTE: The Checkout API has been updated with new features.
   * For more information, see [Checkout API highlights](https://developer.squareup.com/docs/checkout-
   * api#checkout-api-highlights).
   * We recommend that you use the new [CreatePaymentLink]($e/Checkout/CreatePaymentLink)
   * endpoint in place of this previously released endpoint.
   *
   * @param locationId   The ID of the business location to associate the checkout
   *                                                     with.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createCheckout(
    locationId: string,
    body: CreateCheckoutRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCheckoutResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, createCheckoutRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/checkouts`;
    req.deprecated('CheckoutApi.createCheckout');
    return req.callAsJson(createCheckoutResponseSchema, requestOptions);
  }

  /**
   * Lists all payment links.
   *
   * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
   *                         retrieve the next set of results for the original query. If a cursor is not provided, the
   *                         endpoint returns the first page of the results. For more  information, see
   *                         [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
   * @param limit  A limit on the number of results to return per page. The limit is advisory and the
   *                         implementation might return more or less results. If the supplied limit is negative, zero,
   *                         or greater than the maximum limit of 1000, it is ignored.  Default value: `100`
   * @return Response from the API call
   */
  async listPaymentLinks(
    cursor?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListPaymentLinksResponse>> {
    const req = this.createRequest('GET', '/v2/online-checkout/payment-links');
    const mapped = req.prepareArgs({
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    return req.callAsJson(listPaymentLinksResponseSchema, requestOptions);
  }

  /**
   * Creates a Square-hosted checkout page. Applications can share the resulting payment link with their
   * buyer to pay for goods and services.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createPaymentLink(
    body: CreatePaymentLinkRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreatePaymentLinkResponse>> {
    const req = this.createRequest('POST', '/v2/online-checkout/payment-links');
    const mapped = req.prepareArgs({
      body: [body, createPaymentLinkRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createPaymentLinkResponseSchema, requestOptions);
  }

  /**
   * Deletes a payment link.
   *
   * @param id The ID of the payment link to delete.
   * @return Response from the API call
   */
  async deletePaymentLink(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeletePaymentLinkResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v2/online-checkout/payment-links/${mapped.id}`;
    return req.callAsJson(deletePaymentLinkResponseSchema, requestOptions);
  }

  /**
   * Retrieves a payment link.
   *
   * @param id The ID of link to retrieve.
   * @return Response from the API call
   */
  async retrievePaymentLink(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrievePaymentLinkResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v2/online-checkout/payment-links/${mapped.id}`;
    return req.callAsJson(retrievePaymentLinkResponseSchema, requestOptions);
  }

  /**
   * Updates a payment link. You can update the `payment_link` fields such as
   * `description`, `checkout_options`, and  `pre_populated_data`.
   * You cannot update other fields such as the `order_id`, `version`, `URL`, or `timestamp` field.
   *
   * @param id           The ID of the payment link to update.
   * @param body         An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async updatePaymentLink(
    id: string,
    body: UpdatePaymentLinkRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdatePaymentLinkResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      id: [id, string()],
      body: [body, updatePaymentLinkRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/online-checkout/payment-links/${mapped.id}`;
    return req.callAsJson(updatePaymentLinkResponseSchema, requestOptions);
  }
}
