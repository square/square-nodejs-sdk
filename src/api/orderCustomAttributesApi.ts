import { ApiResponse, RequestOptions } from '../core';
import {
  BulkDeleteOrderCustomAttributesRequest,
  bulkDeleteOrderCustomAttributesRequestSchema,
} from '../models/bulkDeleteOrderCustomAttributesRequest';
import {
  BulkDeleteOrderCustomAttributesResponse,
  bulkDeleteOrderCustomAttributesResponseSchema,
} from '../models/bulkDeleteOrderCustomAttributesResponse';
import {
  BulkUpsertOrderCustomAttributesRequest,
  bulkUpsertOrderCustomAttributesRequestSchema,
} from '../models/bulkUpsertOrderCustomAttributesRequest';
import {
  BulkUpsertOrderCustomAttributesResponse,
  bulkUpsertOrderCustomAttributesResponseSchema,
} from '../models/bulkUpsertOrderCustomAttributesResponse';
import {
  CreateOrderCustomAttributeDefinitionRequest,
  createOrderCustomAttributeDefinitionRequestSchema,
} from '../models/createOrderCustomAttributeDefinitionRequest';
import {
  CreateOrderCustomAttributeDefinitionResponse,
  createOrderCustomAttributeDefinitionResponseSchema,
} from '../models/createOrderCustomAttributeDefinitionResponse';
import {
  DeleteOrderCustomAttributeDefinitionResponse,
  deleteOrderCustomAttributeDefinitionResponseSchema,
} from '../models/deleteOrderCustomAttributeDefinitionResponse';
import {
  DeleteOrderCustomAttributeResponse,
  deleteOrderCustomAttributeResponseSchema,
} from '../models/deleteOrderCustomAttributeResponse';
import {
  ListOrderCustomAttributeDefinitionsResponse,
  listOrderCustomAttributeDefinitionsResponseSchema,
} from '../models/listOrderCustomAttributeDefinitionsResponse';
import {
  ListOrderCustomAttributesResponse,
  listOrderCustomAttributesResponseSchema,
} from '../models/listOrderCustomAttributesResponse';
import {
  RetrieveOrderCustomAttributeDefinitionResponse,
  retrieveOrderCustomAttributeDefinitionResponseSchema,
} from '../models/retrieveOrderCustomAttributeDefinitionResponse';
import {
  RetrieveOrderCustomAttributeResponse,
  retrieveOrderCustomAttributeResponseSchema,
} from '../models/retrieveOrderCustomAttributeResponse';
import {
  UpdateOrderCustomAttributeDefinitionRequest,
  updateOrderCustomAttributeDefinitionRequestSchema,
} from '../models/updateOrderCustomAttributeDefinitionRequest';
import {
  UpdateOrderCustomAttributeDefinitionResponse,
  updateOrderCustomAttributeDefinitionResponseSchema,
} from '../models/updateOrderCustomAttributeDefinitionResponse';
import {
  UpsertOrderCustomAttributeRequest,
  upsertOrderCustomAttributeRequestSchema,
} from '../models/upsertOrderCustomAttributeRequest';
import {
  UpsertOrderCustomAttributeResponse,
  upsertOrderCustomAttributeResponseSchema,
} from '../models/upsertOrderCustomAttributeResponse';
import { boolean, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class OrderCustomAttributesApi extends BaseApi {
  /**
   * Lists the order-related [custom attribute definitions]($m/CustomAttributeDefinition) that belong to
   * a Square seller account.
   *
   * When all response pages are retrieved, the results include all custom attribute definitions
   * that are visible to the requesting application, including those that are created by other
   * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
   * seller-defined custom attributes (also known as custom fields) are always set to
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param visibilityFilter  Requests that all of the custom attributes be returned, or only those that are
   *                                    read-only or read-write.
   * @param cursor            The cursor returned in the paged response from the previous call to this
   *                                    endpoint.  Provide this cursor to retrieve the next page of results for your
   *                                    original request.  For more information, see [Pagination](https://developer.
   *                                    squareup.com/docs/working-with-apis/pagination).
   * @param limit             The maximum number of results to return in a single paged response. This limit
   *                                    is advisory.  The response might contain more or fewer results. The minimum
   *                                    value is 1 and the maximum value is 100.  The default value is 20. For more
   *                                    information, see [Pagination](https://developer.squareup.com/docs/working-with-
   *                                    apis/pagination).
   * @return Response from the API call
   */
  async listOrderCustomAttributeDefinitions(
    visibilityFilter?: string,
    cursor?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListOrderCustomAttributeDefinitionsResponse>> {
    const req = this.createRequest(
      'GET',
      '/v2/orders/custom-attribute-definitions'
    );
    const mapped = req.prepareArgs({
      visibilityFilter: [visibilityFilter, optional(string())],
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('visibility_filter', mapped.visibilityFilter);
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    return req.callAsJson(
      listOrderCustomAttributeDefinitionsResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates an order-related custom attribute definition.  Use this endpoint to
   * define a custom attribute that can be associated with orders.
   *
   * After creating a custom attribute definition, you can set the custom attribute for orders
   * in the Square seller account.
   *
   * @param body         An object containing the fields to POST
   *                                                                           for the request.  See the corresponding
   *                                                                           object definition for field details.
   * @return Response from the API call
   */
  async createOrderCustomAttributeDefinition(
    body: CreateOrderCustomAttributeDefinitionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateOrderCustomAttributeDefinitionResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/orders/custom-attribute-definitions'
    );
    const mapped = req.prepareArgs({
      body: [body, createOrderCustomAttributeDefinitionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(
      createOrderCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes an order-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
   * seller account.
   *
   * Only the definition owner can delete a custom attribute definition.
   *
   * @param key The key of the custom attribute definition to delete.
   * @return Response from the API call
   */
  async deleteOrderCustomAttributeDefinition(
    key: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteOrderCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ key: [key, string()] });
    req.appendTemplatePath`/v2/orders/custom-attribute-definitions/${mapped.key}`;
    return req.callAsJson(
      deleteOrderCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves an order-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
   * seller account.
   *
   * To retrieve a custom attribute definition created by another application, the `visibility`
   * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined
   * custom attributes
   * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param key     The key of the custom attribute definition to retrieve.
   * @param version To enable [optimistic concurrency](https://developer.squareup.com/docs/build-
   *                          basics/common-api-patterns/optimistic-concurrency) control, include this optional field
   *                          and specify the current version of the custom attribute.
   * @return Response from the API call
   */
  async retrieveOrderCustomAttributeDefinition(
    key: string,
    version?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveOrderCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      key: [key, string()],
      version: [version, optional(number())],
    });
    req.query('version', mapped.version);
    req.appendTemplatePath`/v2/orders/custom-attribute-definitions/${mapped.key}`;
    return req.callAsJson(
      retrieveOrderCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Updates an order-related custom attribute definition for a Square seller account.
   *
   * Only the definition owner can update a custom attribute definition. Note that sellers can view all
   * custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
   *
   * @param key          The key of the custom attribute
   *                                                                           definition to update.
   * @param body         An object containing the fields to POST
   *                                                                           for the request.  See the corresponding
   *                                                                           object definition for field details.
   * @return Response from the API call
   */
  async updateOrderCustomAttributeDefinition(
    key: string,
    body: UpdateOrderCustomAttributeDefinitionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateOrderCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      key: [key, string()],
      body: [body, updateOrderCustomAttributeDefinitionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/orders/custom-attribute-definitions/${mapped.key}`;
    return req.callAsJson(
      updateOrderCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes order [custom attributes]($m/CustomAttribute) as a bulk operation.
   *
   * Use this endpoint to delete one or more custom attributes from one or more orders.
   * A custom attribute is based on a custom attribute definition in a Square seller account.  (To create
   * a
   * custom attribute definition, use the
   * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
   * ) endpoint.)
   *
   * This `BulkDeleteOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual delete
   * requests and returns a map of individual delete responses. Each delete request has a unique ID
   * and provides an order ID and custom attribute. Each delete response is returned with the ID
   * of the corresponding request.
   *
   * To delete a custom attribute owned by another application, the `visibility` setting
   * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
   * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param body         An object containing the fields to POST for
   *                                                                      the request.  See the corresponding object
   *                                                                      definition for field details.
   * @return Response from the API call
   */
  async bulkDeleteOrderCustomAttributes(
    body: BulkDeleteOrderCustomAttributesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkDeleteOrderCustomAttributesResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/orders/custom-attributes/bulk-delete'
    );
    const mapped = req.prepareArgs({
      body: [body, bulkDeleteOrderCustomAttributesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(
      bulkDeleteOrderCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates or updates order [custom attributes]($m/CustomAttribute) as a bulk operation.
   *
   * Use this endpoint to delete one or more custom attributes from one or more orders.
   * A custom attribute is based on a custom attribute definition in a Square seller account.  (To create
   * a
   * custom attribute definition, use the
   * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
   * ) endpoint.)
   *
   * This `BulkUpsertOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
   * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
   * and provides an order ID and custom attribute. Each upsert response is returned with the ID
   * of the corresponding request.
   *
   * To create or update a custom attribute owned by another application, the `visibility` setting
   * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
   * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param body         An object containing the fields to POST for
   *                                                                      the request.  See the corresponding object
   *                                                                      definition for field details.
   * @return Response from the API call
   */
  async bulkUpsertOrderCustomAttributes(
    body: BulkUpsertOrderCustomAttributesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkUpsertOrderCustomAttributesResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/orders/custom-attributes/bulk-upsert'
    );
    const mapped = req.prepareArgs({
      body: [body, bulkUpsertOrderCustomAttributesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(
      bulkUpsertOrderCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Lists the [custom attributes]($m/CustomAttribute) associated with an order.
   *
   * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
   * in the same call.
   *
   * When all response pages are retrieved, the results include all custom attributes that are
   * visible to the requesting application, including those that are owned by other applications
   * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param orderId           The ID of the target [order](entity:Order).
   * @param visibilityFilter  Requests that all of the custom attributes be returned, or only those that
   *                                     are read-only or read-write.
   * @param cursor            The cursor returned in the paged response from the previous call to this
   *                                     endpoint.  Provide this cursor to retrieve the next page of results for your
   *                                     original request.  For more information, see [Pagination](https://developer.
   *                                     squareup.com/docs/working-with-apis/pagination).
   * @param limit             The maximum number of results to return in a single paged response. This
   *                                     limit is advisory.  The response might contain more or fewer results. The
   *                                     minimum value is 1 and the maximum value is 100.  The default value is 20. For
   *                                     more information, see [Pagination](https://developer.squareup.com/docs/working-
   *                                     with-apis/pagination).
   * @param withDefinitions   Indicates whether to return the [custom attribute definition](entity:
   *                                     CustomAttributeDefinition) in the `definition` field of each custom attribute.
   *                                     Set this parameter to `true` to get the name and description of each custom
   *                                     attribute,  information about the data type, or other definition details. The
   *                                     default value is `false`.
   * @return Response from the API call
   */
  async listOrderCustomAttributes(
    orderId: string,
    visibilityFilter?: string,
    cursor?: string,
    limit?: number,
    withDefinitions?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListOrderCustomAttributesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      visibilityFilter: [visibilityFilter, optional(string())],
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
      withDefinitions: [withDefinitions, optional(boolean())],
    });
    req.query('visibility_filter', mapped.visibilityFilter);
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.query('with_definitions', mapped.withDefinitions);
    req.appendTemplatePath`/v2/orders/${mapped.orderId}/custom-attributes`;
    return req.callAsJson(
      listOrderCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes a [custom attribute]($m/CustomAttribute) associated with a customer profile.
   *
   * To delete a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
   * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param orderId              The ID of the target [order](entity:Order).
   * @param customAttributeKey   The key of the custom attribute to delete.  This key must match the key of
   *                                       an existing custom attribute definition.
   * @return Response from the API call
   */
  async deleteOrderCustomAttribute(
    orderId: string,
    customAttributeKey: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteOrderCustomAttributeResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      customAttributeKey: [customAttributeKey, string()],
    });
    req.appendTemplatePath`/v2/orders/${mapped.orderId}/custom-attributes/${mapped.customAttributeKey}`;
    return req.callAsJson(
      deleteOrderCustomAttributeResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a [custom attribute]($m/CustomAttribute) associated with an order.
   *
   * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
   * in the same call.
   *
   * To retrieve a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom
   * attributes
   * also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param orderId              The ID of the target [order](entity:Order).
   * @param customAttributeKey   The key of the custom attribute to retrieve.  This key must match the key
   *                                        of an existing custom attribute definition.
   * @param version              To enable [optimistic concurrency](https://developer.squareup.
   *                                        com/docs/build-basics/common-api-patterns/optimistic-concurrency) control,
   *                                        include this optional field and specify the current version of the custom
   *                                        attribute.
   * @param withDefinition       Indicates whether to return the [custom attribute definition](entity:
   *                                        CustomAttributeDefinition) in the `definition` field of each  custom
   *                                        attribute. Set this parameter to `true` to get the name and description of
   *                                        each custom attribute,  information about the data type, or other
   *                                        definition details. The default value is `false`.
   * @return Response from the API call
   */
  async retrieveOrderCustomAttribute(
    orderId: string,
    customAttributeKey: string,
    version?: number,
    withDefinition?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveOrderCustomAttributeResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      customAttributeKey: [customAttributeKey, string()],
      version: [version, optional(number())],
      withDefinition: [withDefinition, optional(boolean())],
    });
    req.query('version', mapped.version);
    req.query('with_definition', mapped.withDefinition);
    req.appendTemplatePath`/v2/orders/${mapped.orderId}/custom-attributes/${mapped.customAttributeKey}`;
    return req.callAsJson(
      retrieveOrderCustomAttributeResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates or updates a [custom attribute]($m/CustomAttribute) for an order.
   *
   * Use this endpoint to set the value of a custom attribute for a specific order.
   * A custom attribute is based on a custom attribute definition in a Square seller account. (To create
   * a
   * custom attribute definition, use the
   * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
   * ) endpoint.)
   *
   * To create or update a custom attribute owned by another application, the `visibility` setting
   * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
   * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param orderId              The ID of the target [order](entity:
   *                                                                         Order).
   * @param customAttributeKey   The key of the custom attribute to create
   *                                                                         or update.  This key must match the key
   *                                                                         of an existing custom attribute definition.
   * @param body                 An object containing the fields to POST
   *                                                                         for the request.  See the corresponding
   *                                                                         object definition for field details.
   * @return Response from the API call
   */
  async upsertOrderCustomAttribute(
    orderId: string,
    customAttributeKey: string,
    body: UpsertOrderCustomAttributeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpsertOrderCustomAttributeResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      customAttributeKey: [customAttributeKey, string()],
      body: [body, upsertOrderCustomAttributeRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/orders/${mapped.orderId}/custom-attributes/${mapped.customAttributeKey}`;
    return req.callAsJson(
      upsertOrderCustomAttributeResponseSchema,
      requestOptions
    );
  }
}
