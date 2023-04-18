import { ApiResponse, RequestOptions } from '../core';
import {
  CreateGiftCardActivityRequest,
  createGiftCardActivityRequestSchema,
} from '../models/createGiftCardActivityRequest';
import {
  CreateGiftCardActivityResponse,
  createGiftCardActivityResponseSchema,
} from '../models/createGiftCardActivityResponse';
import {
  ListGiftCardActivitiesResponse,
  listGiftCardActivitiesResponseSchema,
} from '../models/listGiftCardActivitiesResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class GiftCardActivitiesApi extends BaseApi {
  /**
   * Lists gift card activities. By default, you get gift card activities for all
   * gift cards in the seller's account. You can optionally specify query parameters to
   * filter the list. For example, you can get a list of gift card activities for a gift card,
   * for all gift cards in a specific region, or for activities within a time window.
   *
   * @param giftCardId   If a gift card ID is provided, the endpoint returns activities related  to the
   *                               specified gift card. Otherwise, the endpoint returns all gift card activities for
   *                               the seller.
   * @param type         If a [type](entity:GiftCardActivityType) is provided, the endpoint returns gift
   *                               card activities of the specified type.  Otherwise, the endpoint returns all types of
   *                               gift card activities.
   * @param locationId   If a location ID is provided, the endpoint returns gift card activities for the
   *                               specified location.  Otherwise, the endpoint returns gift card activities for all
   *                               locations.
   * @param beginTime    The timestamp for the beginning of the reporting period, in RFC 3339 format. This
   *                               start time is inclusive. The default value is the current time minus one year.
   * @param endTime      The timestamp for the end of the reporting period, in RFC 3339 format. This end
   *                               time is inclusive. The default value is the current time.
   * @param limit        If a limit is provided, the endpoint returns the specified number  of results (or
   *                               fewer) per page. The maximum value is 100. The default value is 50. For more
   *                               information, see [Pagination](https://developer.squareup.com/docs/working-with-
   *                               apis/pagination).
   * @param cursor       A pagination cursor returned by a previous call to this endpoint. Provide this
   *                               cursor to retrieve the next set of results for the original query. If a cursor is
   *                               not provided, the endpoint returns the first page of the results. For more
   *                               information, see [Pagination](https://developer.squareup.com/docs/working-with-
   *                               apis/pagination).
   * @param sortOrder    The order in which the endpoint returns the activities, based on `created_at`. -
   *                               `ASC` - Oldest to newest. - `DESC` - Newest to oldest (default).
   * @return Response from the API call
   */
  async listGiftCardActivities(
    giftCardId?: string,
    type?: string,
    locationId?: string,
    beginTime?: string,
    endTime?: string,
    limit?: number,
    cursor?: string,
    sortOrder?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListGiftCardActivitiesResponse>> {
    const req = this.createRequest('GET', '/v2/gift-cards/activities');
    const mapped = req.prepareArgs({
      giftCardId: [giftCardId, optional(string())],
      type: [type, optional(string())],
      locationId: [locationId, optional(string())],
      beginTime: [beginTime, optional(string())],
      endTime: [endTime, optional(string())],
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
      sortOrder: [sortOrder, optional(string())],
    });
    req.query('gift_card_id', mapped.giftCardId);
    req.query('type', mapped.type);
    req.query('location_id', mapped.locationId);
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.query('sort_order', mapped.sortOrder);
    return req.callAsJson(listGiftCardActivitiesResponseSchema, requestOptions);
  }

  /**
   * Creates a gift card activity to manage the balance or state of a [gift card]($m/GiftCard).
   * For example, you create an `ACTIVATE` activity to activate a gift card with an initial balance
   * before the gift card can be used.
   *
   * @param body         An object containing the fields to POST for the
   *                                                             request.  See the corresponding object definition for
   *                                                             field details.
   * @return Response from the API call
   */
  async createGiftCardActivity(
    body: CreateGiftCardActivityRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateGiftCardActivityResponse>> {
    const req = this.createRequest('POST', '/v2/gift-cards/activities');
    const mapped = req.prepareArgs({
      body: [body, createGiftCardActivityRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createGiftCardActivityResponseSchema, requestOptions);
  }
}
