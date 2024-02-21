import { ApiResponse, RequestOptions } from '../core';
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
  CloneOrderRequest,
  cloneOrderRequestSchema,
} from '../models/cloneOrderRequest';
import {
  CloneOrderResponse,
  cloneOrderResponseSchema,
} from '../models/cloneOrderResponse';
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
   * Creates a new [order]($m/Order) that can include information about products for
   * purchase and settings to apply to the purchase.
   *
   * To pay for a created order, see
   * [Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
   *
   * You can modify open orders using the [UpdateOrder]($e/Orders/UpdateOrder) endpoint.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createOrder(
    body: CreateOrderRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateOrderResponse>> {
    const req = this.createRequest('POST', '/v2/orders');
    const mapped = req.prepareArgs({ body: [body, createOrderRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createOrderResponseSchema, requestOptions);
  }

  /**
   * Retrieves a set of [orders]($m/Order) by their IDs.
   *
   * If a given order ID does not exist, the ID is ignored instead of generating an error.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(batchRetrieveOrdersResponseSchema, requestOptions);
  }

  /**
   * Enables applications to preview order pricing without creating an order.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(calculateOrderResponseSchema, requestOptions);
  }

  /**
   * Creates a new order, in the `DRAFT` state, by duplicating an existing order. The newly created order
   * has
   * only the core fields (such as line items, taxes, and discounts) copied from the original order.
   *
   * @param body         An object containing the fields to POST for the request.  See the
   *                                                 corresponding object definition for field details.
   * @return Response from the API call
   */
  async cloneOrder(
    body: CloneOrderRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CloneOrderResponse>> {
    const req = this.createRequest('POST', '/v2/orders/clone');
    const mapped = req.prepareArgs({ body: [body, cloneOrderRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(cloneOrderResponseSchema, requestOptions);
  }

  /**
   * Search all orders for one or more locations. Orders include all sales,
   * returns, and exchanges regardless of how or when they entered the Square
   * ecosystem (such as Point of Sale, Invoices, and Connect APIs).
   *
   * `SearchOrders` requests need to specify which locations to search and define a
   * [SearchOrdersQuery]($m/SearchOrdersQuery) object that controls
   * how to sort or filter the results. Your `SearchOrdersQuery` can:
   *
   * Set filter criteria.
   * Set the sort order.
   * Determine whether to return results as complete `Order` objects or as
   * [OrderEntry]($m/OrderEntry) objects.
   *
   * Note that details for orders processed with Square Point of Sale while in
   * offline mode might not be transmitted to Square for up to 72 hours. Offline
   * orders have a `created_at` value that reflects the time the order was created,
   * not the time it was subsequently transmitted to Square.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchOrders(
    body: SearchOrdersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchOrdersResponse>> {
    const req = this.createRequest('POST', '/v2/orders/search');
    const mapped = req.prepareArgs({ body: [body, searchOrdersRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(searchOrdersResponseSchema, requestOptions);
  }

  /**
   * Retrieves an [Order]($m/Order) by ID.
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
    req.authenticate([{ global: true }]);
    return req.callAsJson(retrieveOrderResponseSchema, requestOptions);
  }

  /**
   * Updates an open [order]($m/Order) by adding, replacing, or deleting
   * fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.
   *
   * An `UpdateOrder` request requires the following:
   *
   * - The `order_id` in the endpoint path, identifying the order to update.
   * - The latest `version` of the order to update.
   * - The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders/update-
   * orders#sparse-order-objects)
   * containing only the fields to update and the version to which the update is
   * being applied.
   * - If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-
   * orders/update-orders#identifying-fields-to-delete)
   * identifying the fields to clear.
   *
   * To pay for an order, see
   * [Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
   *
   * @param orderId      The ID of the order to update.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/orders/${mapped.orderId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(updateOrderResponseSchema, requestOptions);
  }

  /**
   * Pay for an [order]($m/Order) using one or more approved [payments]($m/Payment)
   * or settle an order with a total of `0`.
   *
   * The total of the `payment_ids` listed in the request must be equal to the order
   * total. Orders with a total amount of `0` can be marked as paid by specifying an empty
   * array of `payment_ids` in the request.
   *
   * To be used with `PayOrder`, a payment must:
   *
   * - Reference the order by specifying the `order_id` when [creating the
   * payment]($e/Payments/CreatePayment).
   * Any approved payments that reference the same `order_id` not specified in the
   * `payment_ids` is canceled.
   * - Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-
   * payments/card-payments/delayed-capture).
   * Using a delayed capture payment with `PayOrder` completes the approved payment.
   *
   * @param orderId      The ID of the order being paid.
   * @param body         An object containing the fields to POST for the request.  See the
   *                                               corresponding object definition for field details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/orders/${mapped.orderId}/pay`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(payOrderResponseSchema, requestOptions);
  }
}
