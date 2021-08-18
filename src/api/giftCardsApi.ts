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
   * a subset of the gift cards.
   *
   * @param type        If a type is provided, gift cards of this type are returned  (see
   *                              [GiftCardType]($m/GiftCardType)). If no type is provided, it returns gift cards of
   *                              all types.
   * @param state       If the state is provided, it returns the gift cards in the specified state  (see
   *                              [GiftCardStatus]($m/GiftCardStatus)). Otherwise, it returns the gift cards of all
   *                              states.
   * @param limit       If a value is provided, it returns only that number of results per page. The maximum
   *                              number of results allowed per page is 50. The default value is 30.
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
   *                              cursor to retrieve the next set of results for the original query. If a cursor is not
   *                              provided, it returns the first page of the results.  For more information, see
   *                              [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   * @param customerId  If a value is provided, returns only the gift cards linked to the specified
   *                              customer
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
    return req.callAsJson(listGiftCardsResponseSchema, requestOptions);
  }

  /**
   * Creates a digital gift card or registers a physical (plastic) gift card. You must activate the gift
   * card before
   * it can be used for payment. For more information, see
   * [Selling gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#selling-
   * square-gift-cards).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
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
    req.json(mapped.body);
    return req.callAsJson(createGiftCardResponseSchema, requestOptions);
  }

  /**
   * Retrieves a gift card using the gift card account number (GAN).
   *
   * @param body An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
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
    req.json(mapped.body);
    return req.callAsJson(
      retrieveGiftCardFromGANResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a gift card using a nonce (a secure token) that represents the gift card.
   *
   * @param body An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
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
    req.json(mapped.body);
    return req.callAsJson(
      retrieveGiftCardFromNonceResponseSchema,
      requestOptions
    );
  }

  /**
   * Links a customer to a gift card
   *
   * @param giftCardId   The ID of the gift card to link.
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
    req.json(mapped.body);
    req.appendTemplatePath`/v2/gift-cards/${mapped.giftCardId}/link-customer`;
    return req.callAsJson(linkCustomerToGiftCardResponseSchema, requestOptions);
  }

  /**
   * Unlinks a customer from a gift card
   *
   * @param giftCardId
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
    req.json(mapped.body);
    req.appendTemplatePath`/v2/gift-cards/${mapped.giftCardId}/unlink-customer`;
    return req.callAsJson(
      unlinkCustomerFromGiftCardResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a gift card using its ID.
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
    return req.callAsJson(retrieveGiftCardResponseSchema, requestOptions);
  }
}
