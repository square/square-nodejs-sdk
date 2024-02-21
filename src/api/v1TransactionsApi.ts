import { ApiResponse, RequestOptions } from '../core';
import { V1Order, v1OrderSchema } from '../models/v1Order';
import {
  V1UpdateOrderRequest,
  v1UpdateOrderRequestSchema,
} from '../models/v1UpdateOrderRequest';
import { array, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class V1TransactionsApi extends BaseApi {
  /**
   * Provides summary information for a merchant's online store orders.
   *
   * @param locationId  The ID of the location to list online store orders for.
   * @param order       The order in which payments are listed in the response.
   * @param limit       The maximum number of payments to return in a single response. This value cannot
   *                              exceed 200.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   * @deprecated
   */
  async v1ListOrders(
    locationId: string,
    order?: string,
    limit?: number,
    batchToken?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Order[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      order: [order, optional(string())],
      limit: [limit, optional(number())],
      batchToken: [batchToken, optional(string())],
    });
    req.query('order', mapped.order);
    req.query('limit', mapped.limit);
    req.query('batch_token', mapped.batchToken);
    req.appendTemplatePath`/v1/${mapped.locationId}/orders`;
    req.deprecated('V1TransactionsApi.v1ListOrders');
    req.authenticate([{ global: true }]);
    return req.callAsJson(array(v1OrderSchema), requestOptions);
  }

  /**
   * Provides comprehensive information for a single online store order, including the order's history.
   *
   * @param locationId  The ID of the order's associated location.
   * @param orderId     The order's Square-issued ID. You obtain this value from Order objects returned by
   *                              the List Orders endpoint
   * @return Response from the API call
   * @deprecated
   */
  async v1RetrieveOrder(
    locationId: string,
    orderId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Order>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      orderId: [orderId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/orders/${mapped.orderId}`;
    req.deprecated('V1TransactionsApi.v1RetrieveOrder');
    req.authenticate([{ global: true }]);
    return req.callAsJson(v1OrderSchema, requestOptions);
  }

  /**
   * Updates the details of an online store order. Every update you perform on an order corresponds to
   * one of three actions:
   *
   * @param locationId   The ID of the order's associated location.
   * @param orderId      The order's Square-issued ID. You obtain this value from Order
   *                                                    objects returned by the List Orders endpoint
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async v1UpdateOrder(
    locationId: string,
    orderId: string,
    body: V1UpdateOrderRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Order>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      orderId: [orderId, string()],
      body: [body, v1UpdateOrderRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/orders/${mapped.orderId}`;
    req.deprecated('V1TransactionsApi.v1UpdateOrder');
    req.authenticate([{ global: true }]);
    return req.callAsJson(v1OrderSchema, requestOptions);
  }
}
