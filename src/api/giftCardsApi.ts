import { ApiResponse, RequestOptions } from '../core';
import {
  CreateGiftCardRequest,
  createGiftCardRequestSchema,
} from '../models/createGiftCardRequest';
import {
  CreateGiftCardResponse,
  createGiftCardResponseSchema,
} from '../models/createGiftCardResponse';
import {
  LinkCustomerToGiftCardRequest,
  linkCustomerToGiftCardRequestSchema,
} from '../models/linkCustomerToGiftCardRequest';
import {
  LinkCustomerToGiftCardResponse,
  linkCustomerToGiftCardResponseSchema,
} from '../models/linkCustomerToGiftCardResponse';
import {
  ListGiftCardsResponse,
  listGiftCardsResponseSchema,
} from '../models/listGiftCardsResponse';
import {
  RetrieveGiftCardFromGANRequest,
  retrieveGiftCardFromGANRequestSchema,
} from '../models/retrieveGiftCardFromGANRequest';
import {
  RetrieveGiftCardFromGANResponse,
  retrieveGiftCardFromGANResponseSchema,
} from '../models/retrieveGiftCardFromGANResponse';
import {
  RetrieveGiftCardFromNonceRequest,
  retrieveGiftCardFromNonceRequestSchema,
} from '../models/retrieveGiftCardFromNonceRequest';
import {
  RetrieveGiftCardFromNonceResponse,
  retrieveGiftCardFromNonceResponseSchema,
} from '../models/retrieveGiftCardFromNonceResponse';
import {
  RetrieveGiftCardResponse,
  retrieveGiftCardResponseSchema,
} from '../models/retrieveGiftCardResponse';
import {
  UnlinkCustomerFromGiftCardRequest,
  unlinkCustomerFromGiftCardRequestSchema,
} from '../models/unlinkCustomerFromGiftCardRequest';
import {
  UnlinkCustomerFromGiftCardResponse,
  unlinkCustomerFromGiftCardResponseSchema,
} from '../models/unlinkCustomerFromGiftCardResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class GiftCardsApi extends BaseApi {
  /**
   * Lists all gift cards. You can specify optional filters to retrieve
   * a subset of the gift cards. Results are sorted by `created_at` in ascending order.
   *
   * @param type        If a [type](entity:GiftCardType) is provided, the endpoint returns gift cards of the
   *                              specified type. Otherwise, the endpoint returns gift cards of all types.
   * @param state       If a [state](entity:GiftCardStatus) is provided, the endpoint returns the gift cards
   *                              in the specified state. Otherwise, the endpoint returns the gift cards of all states.
   * @param limit       If a limit is provided, the endpoint returns only the specified number of results
   *                              per page. The maximum value is 200. The default value is 30. For more information,
   *                              see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
   *                              cursor to retrieve the next set of results for the original query. If a cursor is not
   *                              provided, the endpoint returns the first page of the results.  For more information,
   *                              see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   * @param customerId  If a customer ID is provided, the endpoint returns only the gift cards linked to the
   *                              specified customer.
   * @return Response from the API call
   */
  async listGiftCards(
    type?: string,
    state?: string,
    limit?: number,
    cursor?: string,
    customerId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListGiftCardsResponse>> {
    const req = this.createRequest('GET', '/v2/gift-cards');
    const mapped = req.prepareArgs({
      type: [type, optional(string())],
      state: [state, optional(string())],
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
      customerId: [customerId, optional(string())],
    });
    req.query('type', mapped.type);
    req.query('state', mapped.state);
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.query('customer_id', mapped.customerId);
    req.authenticate([{ global: true }]);
    return req.callAsJson(listGiftCardsResponseSchema, requestOptions);
  }

  /**
   * Creates a digital gift card or registers a physical (plastic) gift card. The resulting gift card
   * has a `PENDING` state. To activate a gift card so that it can be redeemed for purchases, call
   * [CreateGiftCardActivity]($e/GiftCardActivities/CreateGiftCardActivity) and create an `ACTIVATE`
   * activity with the initial balance. Alternatively, you can use
   * [RefundPayment]($e/Refunds/RefundPayment)
   * to refund a payment to the new gift card.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createGiftCard(
    body: CreateGiftCardRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateGiftCardResponse>> {
    const req = this.createRequest('POST', '/v2/gift-cards');
    const mapped = req.prepareArgs({
      body: [body, createGiftCardRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createGiftCardResponseSchema, requestOptions);
  }

  /**
   * Retrieves a gift card using the gift card account number (GAN).
   *
   * @param body         An object containing the fields to POST for the
   *                                                              request.  See the corresponding object definition for
   *                                                              field details.
   * @return Response from the API call
   */
  async retrieveGiftCardFromGAN(
    body: RetrieveGiftCardFromGANRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveGiftCardFromGANResponse>> {
    const req = this.createRequest('POST', '/v2/gift-cards/from-gan');
    const mapped = req.prepareArgs({
      body: [body, retrieveGiftCardFromGANRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      retrieveGiftCardFromGANResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a gift card using a secure payment token that represents the gift card.
   *
   * @param body         An object containing the fields to POST for the
   *                                                                request.  See the corresponding object definition
   *                                                                for field details.
   * @return Response from the API call
   */
  async retrieveGiftCardFromNonce(
    body: RetrieveGiftCardFromNonceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveGiftCardFromNonceResponse>> {
    const req = this.createRequest('POST', '/v2/gift-cards/from-nonce');
    const mapped = req.prepareArgs({
      body: [body, retrieveGiftCardFromNonceRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      retrieveGiftCardFromNonceResponseSchema,
      requestOptions
    );
  }

  /**
   * Links a customer to a gift card, which is also referred to as adding a card on file.
   *
   * @param giftCardId   The ID of the gift card to be linked.
   * @param body         An object containing the fields to POST for the
   *                                                             request.  See the corresponding object definition for
   *                                                             field details.
   * @return Response from the API call
   */
  async linkCustomerToGiftCard(
    giftCardId: string,
    body: LinkCustomerToGiftCardRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LinkCustomerToGiftCardResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      giftCardId: [giftCardId, string()],
      body: [body, linkCustomerToGiftCardRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/gift-cards/${mapped.giftCardId}/link-customer`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(linkCustomerToGiftCardResponseSchema, requestOptions);
  }

  /**
   * Unlinks a customer from a gift card, which is also referred to as removing a card on file.
   *
   * @param giftCardId   The ID of the gift card to be unlinked.
   * @param body         An object containing the fields to POST for the
   *                                                                 request.  See the corresponding object definition
   *                                                                 for field details.
   * @return Response from the API call
   */
  async unlinkCustomerFromGiftCard(
    giftCardId: string,
    body: UnlinkCustomerFromGiftCardRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UnlinkCustomerFromGiftCardResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      giftCardId: [giftCardId, string()],
      body: [body, unlinkCustomerFromGiftCardRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/gift-cards/${mapped.giftCardId}/unlink-customer`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      unlinkCustomerFromGiftCardResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a gift card using the gift card ID.
   *
   * @param id The ID of the gift card to retrieve.
   * @return Response from the API call
   */
  async retrieveGiftCard(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveGiftCardResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v2/gift-cards/${mapped.id}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(retrieveGiftCardResponseSchema, requestOptions);
  }
}
