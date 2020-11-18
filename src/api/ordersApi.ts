import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  BatchRetrieveOrdersRequest,
  batchRetrieveOrdersRequestSchema,
} from '../models/batchRetrieveOrdersRequest';
import {
  BatchRetrieveOrdersResponse,
  batchRetrieveOrdersResponseSchema,
} from '../models/batchRetrieveOrdersResponse';
import {
  CalculateOrderRequest,
  calculateOrderRequestSchema,
} from '../models/calculateOrderRequest';
import {
  CalculateOrderResponse,
  calculateOrderResponseSchema,
} from '../models/calculateOrderResponse';
import {
  CreateOrderRequest,
  createOrderRequestSchema,
} from '../models/createOrderRequest';
import {
  CreateOrderResponse,
  createOrderResponseSchema,
} from '../models/createOrderResponse';
import {
  PayOrderRequest,
  payOrderRequestSchema,
} from '../models/payOrderRequest';
import {
  PayOrderResponse,
  payOrderResponseSchema,
} from '../models/payOrderResponse';
import {
  RetrieveOrderResponse,
  retrieveOrderResponseSchema,
} from '../models/retrieveOrderResponse';
import {
  SearchOrdersRequest,
  searchOrdersRequestSchema,
} from '../models/searchOrdersRequest';
import {
  SearchOrdersResponse,
  searchOrdersResponseSchema,
} from '../models/searchOrdersResponse';
import {
  UpdateOrderRequest,
  updateOrderRequestSchema,
} from '../models/updateOrderRequest';
import {
  UpdateOrderResponse,
  updateOrderResponseSchema,
} from '../models/updateOrderResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class OrdersApi extends BaseApi {
  /**
   * Creates a new [Order](#type-order) which can include information on products for
   * purchase and settings to apply to the purchase.
   *
   * To pay for a created order, please refer to the [Pay for Orders](https://developer.squareup.
   * com/docs/orders-api/pay-for-orders)
   * guide.
   *
   * You can modify open orders using the [UpdateOrder](#endpoint-orders-updateorder) endpoint.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                          corresponding object definition for field details.
   * @return Response from the API call
   */
  async createOrder(
    body: CreateOrderRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateOrderResponse>> {
    const req = this.createRequest('POST', '/v2/orders');
    const mapped = req.prepareArgs({ body: [body, createOrderRequestSchema] });
    req.json(mapped.body);
    return req.callAsJson(createOrderResponseSchema, requestOptions);
  }

  /**
   * Retrieves a set of [Order](#type-order)s by their IDs.
   *
   * If a given Order ID does not exist, the ID is ignored instead of generating an error.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  async batchRetrieveOrders(
    body: BatchRetrieveOrdersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchRetrieveOrdersResponse>> {
    const req = this.createRequest('POST', '/v2/orders/batch-retrieve');
    const mapped = req.prepareArgs({
      body: [body, batchRetrieveOrdersRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(batchRetrieveOrdersResponseSchema, requestOptions);
  }

  /**
   * Calculates an [Order](#type-order).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   */
  async calculateOrder(
    body: CalculateOrderRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CalculateOrderResponse>> {
    const req = this.createRequest('POST', '/v2/orders/calculate');
    const mapped = req.prepareArgs({
      body: [body, calculateOrderRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(calculateOrderResponseSchema, requestOptions);
  }

  /**
   * Search all orders for one or more locations. Orders include all sales,
   * returns, and exchanges regardless of how or when they entered the Square
   * Ecosystem (e.g. Point of Sale, Invoices, Connect APIs, etc).
   *
   * SearchOrders requests need to specify which locations to search and define a
   * [`SearchOrdersQuery`](#type-searchordersquery) object which controls
   * how to sort or filter the results. Your SearchOrdersQuery can:
   *
   * Set filter criteria.
   * Set sort order.
   * Determine whether to return results as complete Order objects, or as
   * [OrderEntry](#type-orderentry) objects.
   *
   * Note that details for orders processed with Square Point of Sale while in
   * offline mode may not be transmitted to Square for up to 72 hours. Offline
   * orders have a `created_at` value that reflects the time the order was created,
   * not the time it was subsequently transmitted to Square.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                           corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchOrders(
    body: SearchOrdersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchOrdersResponse>> {
    const req = this.createRequest('POST', '/v2/orders/search');
    const mapped = req.prepareArgs({ body: [body, searchOrdersRequestSchema] });
    req.json(mapped.body);
    return req.callAsJson(searchOrdersResponseSchema, requestOptions);
  }

  /**
   * Retrieves an [Order](#type-order) by ID.
   *
   * @param orderId  The ID of the order to retrieve.
   * @return Response from the API call
   */
  async retrieveOrder(
    orderId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveOrderResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ orderId: [orderId, string()] });
    req.appendTemplatePath`/v2/orders/${mapped.orderId}`;
    return req.callAsJson(retrieveOrderResponseSchema, requestOptions);
  }

  /**
   * Updates an open [Order](#type-order) by adding, replacing, or deleting
   * fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.
   *
   * An UpdateOrder request requires the following:
   *
   * - The `order_id` in the endpoint path, identifying the order to update.
   * - The latest `version` of the order to update.
   * - The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-
   * objects)
   * containing only the fields to update and the version the update is
   * being applied to.
   * - If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-
   * orders#on-dot-notation)
   * identifying fields to clear.
   *
   * To pay for an order, please refer to the [Pay for Orders](https://developer.squareup.com/docs/orders-
   * api/pay-for-orders) guide.
   *
   * @param orderId  The ID of the order to update.
   * @param body     An object containing the fields to POST for the request.  See the
   *                                              corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateOrder(
    orderId: string,
    body: UpdateOrderRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateOrderResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      body: [body, updateOrderRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v2/orders/${mapped.orderId}`;
    return req.callAsJson(updateOrderResponseSchema, requestOptions);
  }

  /**
   * Pay for an [order](#type-order) using one or more approved [payments](#type-payment),
   * or settle an order with a total of `0`.
   *
   * The total of the `payment_ids` listed in the request must be equal to the order
   * total. Orders with a total amount of `0` can be marked as paid by specifying an empty
   * array of `payment_ids` in the request.
   *
   * To be used with PayOrder, a payment must:
   *
   * - Reference the order by specifying the `order_id` when [creating the payment](#endpoint-payments-
   * createpayment).
   * Any approved payments that reference the same `order_id` not specified in the
   * `payment_ids` will be canceled.
   * - Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-
   * payments#delayed-capture).
   * Using a delayed capture payment with PayOrder will complete the approved payment.
   *
   * @param orderId  The ID of the order being paid.
   * @param body     An object containing the fields to POST for the request.  See the
   *                                           corresponding object definition for field details.
   * @return Response from the API call
   */
  async payOrder(
    orderId: string,
    body: PayOrderRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PayOrderResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      body: [body, payOrderRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v2/orders/${mapped.orderId}/pay`;
    return req.callAsJson(payOrderResponseSchema, requestOptions);
  }
}
