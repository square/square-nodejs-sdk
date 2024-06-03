import { ApiResponse, RequestOptions } from '../core';
import {
  DisableEventsResponse,
  disableEventsResponseSchema,
} from '../models/disableEventsResponse';
import {
  EnableEventsResponse,
  enableEventsResponseSchema,
} from '../models/enableEventsResponse';
import {
  ListEventTypesResponse,
  listEventTypesResponseSchema,
} from '../models/listEventTypesResponse';
import {
  SearchEventsRequest,
  searchEventsRequestSchema,
} from '../models/searchEventsRequest';
import {
  SearchEventsResponse,
  searchEventsResponseSchema,
} from '../models/searchEventsResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class EventsApi extends BaseApi {
  /**
   * Search for Square API events that occur within a 28-day timeframe.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchEvents(
    body: SearchEventsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchEventsResponse>> {
    const req = this.createRequest('POST', '/v2/events');
    const mapped = req.prepareArgs({ body: [body, searchEventsRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(searchEventsResponseSchema, requestOptions);
  }

  /**
   * Disables events to prevent them from being searchable.
   * All events are disabled by default. You must enable events to make them searchable.
   * Disabling events for a specific time period prevents them from being searchable, even if you re-
   * enable them later.
   *
   * @return Response from the API call
   */
  async disableEvents(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DisableEventsResponse>> {
    const req = this.createRequest('PUT', '/v2/events/disable');
    req.authenticate([{ global: true }]);
    return req.callAsJson(disableEventsResponseSchema, requestOptions);
  }

  /**
   * Enables events to make them searchable. Only events that occur while in the enabled state are
   * searchable.
   *
   * @return Response from the API call
   */
  async enableEvents(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EnableEventsResponse>> {
    const req = this.createRequest('PUT', '/v2/events/enable');
    req.authenticate([{ global: true }]);
    return req.callAsJson(enableEventsResponseSchema, requestOptions);
  }

  /**
   * Lists all event types that you can subscribe to as webhooks or query using the Events API.
   *
   * @param apiVersion  The API version for which to list event types. Setting this field overrides the
   *                              default version used by the application.
   * @return Response from the API call
   */
  async listEventTypes(
    apiVersion?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListEventTypesResponse>> {
    const req = this.createRequest('GET', '/v2/events/types');
    const mapped = req.prepareArgs({
      apiVersion: [apiVersion, optional(string())],
    });
    req.query('api_version', mapped.apiVersion);
    req.authenticate([{ global: true }]);
    return req.callAsJson(listEventTypesResponseSchema, requestOptions);
  }
}
