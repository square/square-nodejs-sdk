import { ApiResponse, RequestOptions } from '../core';
import {
  CreateWebhookSubscriptionRequest,
  createWebhookSubscriptionRequestSchema,
} from '../models/createWebhookSubscriptionRequest';
import {
  CreateWebhookSubscriptionResponse,
  createWebhookSubscriptionResponseSchema,
} from '../models/createWebhookSubscriptionResponse';
import {
  DeleteWebhookSubscriptionResponse,
  deleteWebhookSubscriptionResponseSchema,
} from '../models/deleteWebhookSubscriptionResponse';
import {
  ListWebhookEventTypesResponse,
  listWebhookEventTypesResponseSchema,
} from '../models/listWebhookEventTypesResponse';
import {
  ListWebhookSubscriptionsResponse,
  listWebhookSubscriptionsResponseSchema,
} from '../models/listWebhookSubscriptionsResponse';
import {
  RetrieveWebhookSubscriptionResponse,
  retrieveWebhookSubscriptionResponseSchema,
} from '../models/retrieveWebhookSubscriptionResponse';
import {
  TestWebhookSubscriptionRequest,
  testWebhookSubscriptionRequestSchema,
} from '../models/testWebhookSubscriptionRequest';
import {
  TestWebhookSubscriptionResponse,
  testWebhookSubscriptionResponseSchema,
} from '../models/testWebhookSubscriptionResponse';
import {
  UpdateWebhookSubscriptionRequest,
  updateWebhookSubscriptionRequestSchema,
} from '../models/updateWebhookSubscriptionRequest';
import {
  UpdateWebhookSubscriptionResponse,
  updateWebhookSubscriptionResponseSchema,
} from '../models/updateWebhookSubscriptionResponse';
import {
  UpdateWebhookSubscriptionSignatureKeyRequest,
  updateWebhookSubscriptionSignatureKeyRequestSchema,
} from '../models/updateWebhookSubscriptionSignatureKeyRequest';
import {
  UpdateWebhookSubscriptionSignatureKeyResponse,
  updateWebhookSubscriptionSignatureKeyResponseSchema,
} from '../models/updateWebhookSubscriptionSignatureKeyResponse';
import { boolean, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class WebhookSubscriptionsApi extends BaseApi {
  /**
   * Lists all webhook event types that can be subscribed to.
   *
   * @param apiVersion  The API version for which to list event types. Setting this field overrides the
   *                              default version used by the application.
   * @return Response from the API call
   */
  async listWebhookEventTypes(
    apiVersion?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListWebhookEventTypesResponse>> {
    const req = this.createRequest('GET', '/v2/webhooks/event-types');
    const mapped = req.prepareArgs({
      apiVersion: [apiVersion, optional(string())],
    });
    req.query('api_version', mapped.apiVersion);
    return req.callAsJson(listWebhookEventTypesResponseSchema, requestOptions);
  }

  /**
   * Lists all webhook subscriptions owned by your application.
   *
   * @param cursor           A pagination cursor returned by a previous call to this endpoint. Provide this
   *                                    to retrieve the next set of results for your original query.  For more
   *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
   *                                    basics/common-api-patterns/pagination).
   * @param includeDisabled  Includes disabled [Subscription](entity:WebhookSubscription)s. By default, all
   *                                    enabled [Subscription](entity:WebhookSubscription)s are returned.
   * @param sortOrder        Sorts the returned list by when the [Subscription](entity:WebhookSubscription)
   *                                    was created with the specified order. This field defaults to ASC.
   * @param limit            The maximum number of results to be returned in a single page. It is possible
   *                                    to receive fewer results than the specified limit on a given page. The default
   *                                    value of 100 is also the maximum allowed value.  Default: 100
   * @return Response from the API call
   */
  async listWebhookSubscriptions(
    cursor?: string,
    includeDisabled?: boolean,
    sortOrder?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListWebhookSubscriptionsResponse>> {
    const req = this.createRequest('GET', '/v2/webhooks/subscriptions');
    const mapped = req.prepareArgs({
      cursor: [cursor, optional(string())],
      includeDisabled: [includeDisabled, optional(boolean())],
      sortOrder: [sortOrder, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('cursor', mapped.cursor);
    req.query('include_disabled', mapped.includeDisabled);
    req.query('sort_order', mapped.sortOrder);
    req.query('limit', mapped.limit);
    return req.callAsJson(
      listWebhookSubscriptionsResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates a webhook subscription.
   *
   * @param body         An object containing the fields to POST for the
   *                                                                request.  See the corresponding object definition
   *                                                                for field details.
   * @return Response from the API call
   */
  async createWebhookSubscription(
    body: CreateWebhookSubscriptionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateWebhookSubscriptionResponse>> {
    const req = this.createRequest('POST', '/v2/webhooks/subscriptions');
    const mapped = req.prepareArgs({
      body: [body, createWebhookSubscriptionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(
      createWebhookSubscriptionResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes a webhook subscription.
   *
   * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to delete.
   * @return Response from the API call
   */
  async deleteWebhookSubscription(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteWebhookSubscriptionResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/v2/webhooks/subscriptions/${mapped.subscriptionId}`;
    return req.callAsJson(
      deleteWebhookSubscriptionResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a webhook subscription identified by its ID.
   *
   * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to retrieve.
   * @return Response from the API call
   */
  async retrieveWebhookSubscription(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveWebhookSubscriptionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/v2/webhooks/subscriptions/${mapped.subscriptionId}`;
    return req.callAsJson(
      retrieveWebhookSubscriptionResponseSchema,
      requestOptions
    );
  }

  /**
   * Updates a webhook subscription.
   *
   * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:
   *                                                                   WebhookSubscription) to update.
   * @param body            An object containing the fields to POST for the
   *                                                                   request.  See the corresponding object
   *                                                                   definition for field details.
   * @return Response from the API call
   */
  async updateWebhookSubscription(
    subscriptionId: string,
    body: UpdateWebhookSubscriptionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateWebhookSubscriptionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, updateWebhookSubscriptionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/webhooks/subscriptions/${mapped.subscriptionId}`;
    return req.callAsJson(
      updateWebhookSubscriptionResponseSchema,
      requestOptions
    );
  }

  /**
   * Updates a webhook subscription by replacing the existing signature key with a new one.
   *
   * @param subscriptionId  [REQUIRED] The ID of the
   *                                                                               [Subscription](entity:
   *                                                                               WebhookSubscription) to update.
   * @param body            An object containing the fields to
   *                                                                               POST for the request.  See the
   *                                                                               corresponding object definition for
   *                                                                               field details.
   * @return Response from the API call
   */
  async updateWebhookSubscriptionSignatureKey(
    subscriptionId: string,
    body: UpdateWebhookSubscriptionSignatureKeyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateWebhookSubscriptionSignatureKeyResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, updateWebhookSubscriptionSignatureKeyRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/webhooks/subscriptions/${mapped.subscriptionId}/signature-key`;
    return req.callAsJson(
      updateWebhookSubscriptionSignatureKeyResponseSchema,
      requestOptions
    );
  }

  /**
   * Tests a webhook subscription by sending a test event to the notification URL.
   *
   * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:
   *                                                                 WebhookSubscription) to test.
   * @param body            An object containing the fields to POST for the
   *                                                                 request.  See the corresponding object definition
   *                                                                 for field details.
   * @return Response from the API call
   */
  async testWebhookSubscription(
    subscriptionId: string,
    body: TestWebhookSubscriptionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TestWebhookSubscriptionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, testWebhookSubscriptionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/webhooks/subscriptions/${mapped.subscriptionId}/test`;
    return req.callAsJson(
      testWebhookSubscriptionResponseSchema,
      requestOptions
    );
  }
}
