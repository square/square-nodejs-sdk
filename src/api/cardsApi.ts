import { ApiResponse, RequestOptions } from '../core';
import {
  CreateCardRequest,
  createCardRequestSchema,
} from '../models/createCardRequest';
import {
  CreateCardResponse,
  createCardResponseSchema,
} from '../models/createCardResponse';
import {
  DisableCardResponse,
  disableCardResponseSchema,
} from '../models/disableCardResponse';
import {
  ListCardsResponse,
  listCardsResponseSchema,
} from '../models/listCardsResponse';
import {
  RetrieveCardResponse,
  retrieveCardResponseSchema,
} from '../models/retrieveCardResponse';
import { boolean, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class CardsApi extends BaseApi {
  /**
   * Retrieves a list of cards owned by the account making the request.
   * A max of 25 cards will be returned.
   *
   * @param cursor           A pagination cursor returned by a previous call to this endpoint. Provide this
   *                                    to retrieve the next set of results for your original query.  See
   *                                    [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
   *                                    patterns/pagination) for more information.
   * @param customerId       Limit results to cards associated with the customer supplied. By default, all
   *                                    cards owned by the merchant are returned.
   * @param includeDisabled  Includes disabled cards. By default, all enabled cards owned by the merchant
   *                                    are returned.
   * @param referenceId      Limit results to cards associated with the reference_id supplied.
   * @param sortOrder        Sorts the returned list by when the card was created with the specified order.
   *                                    This field defaults to ASC.
   * @return Response from the API call
   */
  async listCards(
    cursor?: string,
    customerId?: string,
    includeDisabled?: boolean,
    referenceId?: string,
    sortOrder?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCardsResponse>> {
    const req = this.createRequest('GET', '/v2/cards');
    const mapped = req.prepareArgs({
      cursor: [cursor, optional(string())],
      customerId: [customerId, optional(string())],
      includeDisabled: [includeDisabled, optional(boolean())],
      referenceId: [referenceId, optional(string())],
      sortOrder: [sortOrder, optional(string())],
    });
    req.query('cursor', mapped.cursor);
    req.query('customer_id', mapped.customerId);
    req.query('include_disabled', mapped.includeDisabled);
    req.query('reference_id', mapped.referenceId);
    req.query('sort_order', mapped.sortOrder);
    req.authenticate([{ global: true }]);
    return req.callAsJson(listCardsResponseSchema, requestOptions);
  }

  /**
   * Adds a card on file to an existing merchant.
   *
   * @param body         An object containing the fields to POST for the request.  See the
   *                                                 corresponding object definition for field details.
   * @return Response from the API call
   */
  async createCard(
    body: CreateCardRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCardResponse>> {
    const req = this.createRequest('POST', '/v2/cards');
    const mapped = req.prepareArgs({ body: [body, createCardRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createCardResponseSchema, requestOptions);
  }

  /**
   * Retrieves details for a specific Card.
   *
   * @param cardId  Unique ID for the desired Card.
   * @return Response from the API call
   */
  async retrieveCard(
    cardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveCardResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ cardId: [cardId, string()] });
    req.appendTemplatePath`/v2/cards/${mapped.cardId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(retrieveCardResponseSchema, requestOptions);
  }

  /**
   * Disables the card, preventing any further updates or charges.
   * Disabling an already disabled card is allowed but has no effect.
   *
   * @param cardId  Unique ID for the desired Card.
   * @return Response from the API call
   */
  async disableCard(
    cardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DisableCardResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ cardId: [cardId, string()] });
    req.appendTemplatePath`/v2/cards/${mapped.cardId}/disable`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(disableCardResponseSchema, requestOptions);
  }
}
