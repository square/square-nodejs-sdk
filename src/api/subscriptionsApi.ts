import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  CancelSubscriptionResponse,
  cancelSubscriptionResponseSchema,
} from '../models/cancelSubscriptionResponse';
import {
  CreateSubscriptionRequest,
  createSubscriptionRequestSchema,
} from '../models/createSubscriptionRequest';
import {
  CreateSubscriptionResponse,
  createSubscriptionResponseSchema,
} from '../models/createSubscriptionResponse';
import {
  ListSubscriptionEventsResponse,
  listSubscriptionEventsResponseSchema,
} from '../models/listSubscriptionEventsResponse';
import {
  RetrieveSubscriptionResponse,
  retrieveSubscriptionResponseSchema,
} from '../models/retrieveSubscriptionResponse';
import {
  SearchSubscriptionsRequest,
  searchSubscriptionsRequestSchema,
} from '../models/searchSubscriptionsRequest';
import {
  SearchSubscriptionsResponse,
  searchSubscriptionsResponseSchema,
} from '../models/searchSubscriptionsResponse';
import {
  UpdateSubscriptionRequest,
  updateSubscriptionRequestSchema,
} from '../models/updateSubscriptionRequest';
import {
  UpdateSubscriptionResponse,
  updateSubscriptionResponseSchema,
} from '../models/updateSubscriptionResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class SubscriptionsApi extends BaseApi {
  /**
   * Creates a subscription for a customer to a subscription plan.
   *
   * If you provide a card on file in the request, Square charges the card for
   * the subscription. Otherwise, Square bills an invoice to the customer's email
   * address. The subscription starts immediately, unless the request includes
   * the optional `start_date`. Each individual subscription is associated with a particular location.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                                 corresponding object definition for field details.
   * @return Response from the API call
   */
  async createSubscription(
    body: CreateSubscriptionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateSubscriptionResponse>> {
    const req = this.createRequest('POST', '/v2/subscriptions');
    const mapped = req.prepareArgs({
      body: [body, createSubscriptionRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(createSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Searches for subscriptions.
   * Results are ordered chronologically by subscription creation date. If
   * the request specifies more than one location ID,
   * the endpoint orders the result
   * by location ID, and then by creation date within each location. If no locations are given
   * in the query, all locations are searched.
   *
   * You can also optionally specify `customer_ids` to search by customer.
   * If left unset, all customers
   * associated with the specified locations are returned.
   * If the request specifies customer IDs, the endpoint orders results
   * first by location, within location by customer ID, and within
   * customer by subscription creation date.
   *
   * For more information, see
   * [Retrieve subscriptions](https://developer.squareup.com/docs/subscriptions-api/overview#retrieve-
   * subscriptions).
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchSubscriptions(
    body: SearchSubscriptionsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchSubscriptionsResponse>> {
    const req = this.createRequest('POST', '/v2/subscriptions/search');
    const mapped = req.prepareArgs({
      body: [body, searchSubscriptionsRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(searchSubscriptionsResponseSchema, requestOptions);
  }

  /**
   * Retrieves a subscription.
   *
   * @param subscriptionId  The ID of the subscription to retrieve.
   * @return Response from the API call
   */
  async retrieveSubscription(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveSubscriptionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/v2/subscriptions/${mapped.subscriptionId}`;
    return req.callAsJson(retrieveSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Updates a subscription. You can set, modify, and clear the
   * `subscription` field values.
   *
   * @param subscriptionId  The ID for the subscription to update.
   * @param body            An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  async updateSubscription(
    subscriptionId: string,
    body: UpdateSubscriptionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateSubscriptionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, updateSubscriptionRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v2/subscriptions/${mapped.subscriptionId}`;
    return req.callAsJson(updateSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Sets the `canceled_date` field to the end of the active billing period.
   * After this date, the status changes from ACTIVE to CANCELED.
   *
   * @param subscriptionId  The ID of the subscription to cancel.
   * @return Response from the API call
   */
  async cancelSubscription(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelSubscriptionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/v2/subscriptions/${mapped.subscriptionId}/cancel`;
    return req.callAsJson(cancelSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Lists all events for a specific subscription.
   * In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the
   * subscription was canceled) events are returned.
   *
   * @param subscriptionId  The ID of the subscription to retrieve the events for.
   * @param cursor          A pagination cursor returned by a previous call to this endpoint. Provide this
   *                                  to retrieve the next set of results for the original query.  For more information,
   *                                  see [Pagination](https://developer.squareup.com/docs/working-with-
   *                                  apis/pagination).
   * @param limit           The upper limit on the number of subscription events to return  in the response.
   *                                  Default: `200`
   * @return Response from the API call
   */
  async listSubscriptionEvents(
    subscriptionId: string,
    cursor?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSubscriptionEventsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.appendTemplatePath`/v2/subscriptions/${mapped.subscriptionId}/events`;
    return req.callAsJson(listSubscriptionEventsResponseSchema, requestOptions);
  }
}
