import { ApiResponse, RequestOptions } from '../core';
import {
  AddGroupToCustomerResponse,
  addGroupToCustomerResponseSchema,
} from '../models/addGroupToCustomerResponse';
import {
  BulkCreateCustomersRequest,
  bulkCreateCustomersRequestSchema,
} from '../models/bulkCreateCustomersRequest';
import {
  BulkCreateCustomersResponse,
  bulkCreateCustomersResponseSchema,
} from '../models/bulkCreateCustomersResponse';
import {
  BulkDeleteCustomersRequest,
  bulkDeleteCustomersRequestSchema,
} from '../models/bulkDeleteCustomersRequest';
import {
  BulkDeleteCustomersResponse,
  bulkDeleteCustomersResponseSchema,
} from '../models/bulkDeleteCustomersResponse';
import {
  BulkRetrieveCustomersRequest,
  bulkRetrieveCustomersRequestSchema,
} from '../models/bulkRetrieveCustomersRequest';
import {
  BulkRetrieveCustomersResponse,
  bulkRetrieveCustomersResponseSchema,
} from '../models/bulkRetrieveCustomersResponse';
import {
  BulkUpdateCustomersRequest,
  bulkUpdateCustomersRequestSchema,
} from '../models/bulkUpdateCustomersRequest';
import {
  BulkUpdateCustomersResponse,
  bulkUpdateCustomersResponseSchema,
} from '../models/bulkUpdateCustomersResponse';
import {
  CreateCustomerCardRequest,
  createCustomerCardRequestSchema,
} from '../models/createCustomerCardRequest';
import {
  CreateCustomerCardResponse,
  createCustomerCardResponseSchema,
} from '../models/createCustomerCardResponse';
import {
  CreateCustomerRequest,
  createCustomerRequestSchema,
} from '../models/createCustomerRequest';
import {
  CreateCustomerResponse,
  createCustomerResponseSchema,
} from '../models/createCustomerResponse';
import {
  DeleteCustomerCardResponse,
  deleteCustomerCardResponseSchema,
} from '../models/deleteCustomerCardResponse';
import {
  DeleteCustomerResponse,
  deleteCustomerResponseSchema,
} from '../models/deleteCustomerResponse';
import {
  ListCustomersResponse,
  listCustomersResponseSchema,
} from '../models/listCustomersResponse';
import {
  RemoveGroupFromCustomerResponse,
  removeGroupFromCustomerResponseSchema,
} from '../models/removeGroupFromCustomerResponse';
import {
  RetrieveCustomerResponse,
  retrieveCustomerResponseSchema,
} from '../models/retrieveCustomerResponse';
import {
  SearchCustomersRequest,
  searchCustomersRequestSchema,
} from '../models/searchCustomersRequest';
import {
  SearchCustomersResponse,
  searchCustomersResponseSchema,
} from '../models/searchCustomersResponse';
import {
  UpdateCustomerRequest,
  updateCustomerRequestSchema,
} from '../models/updateCustomerRequest';
import {
  UpdateCustomerResponse,
  updateCustomerResponseSchema,
} from '../models/updateCustomerResponse';
import { bigint, boolean, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class CustomersApi extends BaseApi {
  /**
   * Lists customer profiles associated with a Square account.
   *
   * Under normal operating conditions, newly created or updated customer profiles become available
   * for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
   * profiles can take closer to one minute or longer, especially during network incidents and outages.
   *
   * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this
   *                              cursor to retrieve the next set of results for your original query.  For more
   *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
   *                              api-patterns/pagination).
   * @param limit      The maximum number of results to return in a single page. This limit is advisory.
   *                              The response might contain more or fewer results. If the specified limit is less than
   *                              1 or greater than 100, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH`
   *                              error. The default value is 100.  For more information, see [Pagination](https:
   *                              //developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   * @param sortField  Indicates how customers should be sorted.  The default value is `DEFAULT`.
   * @param sortOrder  Indicates whether customers should be sorted in ascending (`ASC`) or descending
   *                              (`DESC`) order.  The default value is `ASC`.
   * @param count      Indicates whether to return the total count of customers in the `count` field of the
   *                              response.  The default value is `false`.
   * @return Response from the API call
   */
  async listCustomers(
    cursor?: string,
    limit?: number,
    sortField?: string,
    sortOrder?: string,
    count?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCustomersResponse>> {
    const req = this.createRequest('GET', '/v2/customers');
    const mapped = req.prepareArgs({
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
      sortField: [sortField, optional(string())],
      sortOrder: [sortOrder, optional(string())],
      count: [count, optional(boolean())],
    });
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.query('sort_field', mapped.sortField);
    req.query('sort_order', mapped.sortOrder);
    req.query('count', mapped.count);
    req.authenticate([{ global: true }]);
    return req.callAsJson(listCustomersResponseSchema, requestOptions);
  }

  /**
   * Creates a new customer for a business.
   *
   * You must provide at least one of the following values in your request to this
   * endpoint:
   *
   * - `given_name`
   * - `family_name`
   * - `company_name`
   * - `email_address`
   * - `phone_number`
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createCustomer(
    body: CreateCustomerRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCustomerResponse>> {
    const req = this.createRequest('POST', '/v2/customers');
    const mapped = req.prepareArgs({
      body: [body, createCustomerRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createCustomerResponseSchema, requestOptions);
  }

  /**
   * Creates multiple [customer profiles]($m/Customer) for a business.
   *
   * This endpoint takes a map of individual create requests and returns a map of responses.
   *
   * You must provide at least one of the following values in each create request:
   *
   * - `given_name`
   * - `family_name`
   * - `company_name`
   * - `email_address`
   * - `phone_number`
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async bulkCreateCustomers(
    body: BulkCreateCustomersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkCreateCustomersResponse>> {
    const req = this.createRequest('POST', '/v2/customers/bulk-create');
    const mapped = req.prepareArgs({
      body: [body, bulkCreateCustomersRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(bulkCreateCustomersResponseSchema, requestOptions);
  }

  /**
   * Deletes multiple customer profiles.
   *
   * The endpoint takes a list of customer IDs and returns a map of responses.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async bulkDeleteCustomers(
    body: BulkDeleteCustomersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkDeleteCustomersResponse>> {
    const req = this.createRequest('POST', '/v2/customers/bulk-delete');
    const mapped = req.prepareArgs({
      body: [body, bulkDeleteCustomersRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(bulkDeleteCustomersResponseSchema, requestOptions);
  }

  /**
   * Retrieves multiple customer profiles.
   *
   * This endpoint takes a list of customer IDs and returns a map of responses.
   *
   * @param body         An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  async bulkRetrieveCustomers(
    body: BulkRetrieveCustomersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkRetrieveCustomersResponse>> {
    const req = this.createRequest('POST', '/v2/customers/bulk-retrieve');
    const mapped = req.prepareArgs({
      body: [body, bulkRetrieveCustomersRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(bulkRetrieveCustomersResponseSchema, requestOptions);
  }

  /**
   * Updates multiple customer profiles.
   *
   * This endpoint takes a map of individual update requests and returns a map of responses.
   *
   * You cannot use this endpoint to change cards on file. To make changes, use the [Cards API]($e/Cards)
   * or [Gift Cards API]($e/GiftCards).
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async bulkUpdateCustomers(
    body: BulkUpdateCustomersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkUpdateCustomersResponse>> {
    const req = this.createRequest('POST', '/v2/customers/bulk-update');
    const mapped = req.prepareArgs({
      body: [body, bulkUpdateCustomersRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(bulkUpdateCustomersResponseSchema, requestOptions);
  }

  /**
   * Searches the customer profiles associated with a Square account using one or more supported query
   * filters.
   *
   * Calling `SearchCustomers` without any explicit query filter returns all
   * customer profiles ordered alphabetically based on `given_name` and
   * `family_name`.
   *
   * Under normal operating conditions, newly created or updated customer profiles become available
   * for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
   * profiles can take closer to one minute or longer, especially during network incidents and outages.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchCustomers(
    body: SearchCustomersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchCustomersResponse>> {
    const req = this.createRequest('POST', '/v2/customers/search');
    const mapped = req.prepareArgs({
      body: [body, searchCustomersRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(searchCustomersResponseSchema, requestOptions);
  }

  /**
   * Deletes a customer profile from a business. This operation also unlinks any associated cards on file.
   *
   * To delete a customer profile that was created by merging existing profiles, you must use the ID of
   * the newly created profile.
   *
   * @param customerId  The ID of the customer to delete.
   * @param version     The current version of the customer profile.  As a best practice, you should include
   *                              this parameter to enable [optimistic concurrency](https://developer.squareup.
   *                              com/docs/build-basics/common-api-patterns/optimistic-concurrency) control.  For more
   *                              information, see [Delete a customer profile](https://developer.squareup.
   *                              com/docs/customers-api/use-the-api/keep-records#delete-customer-profile).
   * @return Response from the API call
   */
  async deleteCustomer(
    customerId: string,
    version?: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteCustomerResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      version: [version, optional(bigint())],
    });
    req.query('version', mapped.version);
    req.appendTemplatePath`/v2/customers/${mapped.customerId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(deleteCustomerResponseSchema, requestOptions);
  }

  /**
   * Returns details for a single customer.
   *
   * @param customerId  The ID of the customer to retrieve.
   * @return Response from the API call
   */
  async retrieveCustomer(
    customerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveCustomerResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ customerId: [customerId, string()] });
    req.appendTemplatePath`/v2/customers/${mapped.customerId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(retrieveCustomerResponseSchema, requestOptions);
  }

  /**
   * Updates a customer profile. This endpoint supports sparse updates, so only new or changed fields are
   * required in the request.
   * To add or update a field, specify the new value. To remove a field, specify `null`.
   *
   * To update a customer profile that was created by merging existing profiles, you must use the ID of
   * the newly created profile.
   *
   * You cannot use this endpoint to change cards on file. To make changes, use the [Cards API]($e/Cards)
   * or [Gift Cards API]($e/GiftCards).
   *
   * @param customerId   The ID of the customer to update.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateCustomer(
    customerId: string,
    body: UpdateCustomerRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateCustomerResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      body: [body, updateCustomerRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/customers/${mapped.customerId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(updateCustomerResponseSchema, requestOptions);
  }

  /**
   * Adds a card on file to an existing customer.
   *
   * As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
   * calls with the same card nonce return the same card record that was created
   * with the provided nonce during the _first_ call.
   *
   * @param customerId   The Square ID of the customer profile the card is linked
   *                                                         to.
   * @param body         An object containing the fields to POST for the request.
   *                                                         See the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createCustomerCard(
    customerId: string,
    body: CreateCustomerCardRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCustomerCardResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      body: [body, createCustomerCardRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/customers/${mapped.customerId}/cards`;
    req.deprecated('CustomersApi.createCustomerCard');
    req.authenticate([{ global: true }]);
    return req.callAsJson(createCustomerCardResponseSchema, requestOptions);
  }

  /**
   * Removes a card on file from a customer.
   *
   * @param customerId  The ID of the customer that the card on file belongs to.
   * @param cardId      The ID of the card on file to delete.
   * @return Response from the API call
   * @deprecated
   */
  async deleteCustomerCard(
    customerId: string,
    cardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteCustomerCardResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      cardId: [cardId, string()],
    });
    req.appendTemplatePath`/v2/customers/${mapped.customerId}/cards/${mapped.cardId}`;
    req.deprecated('CustomersApi.deleteCustomerCard');
    req.authenticate([{ global: true }]);
    return req.callAsJson(deleteCustomerCardResponseSchema, requestOptions);
  }

  /**
   * Removes a group membership from a customer.
   *
   * The customer is identified by the `customer_id` value
   * and the customer group is identified by the `group_id` value.
   *
   * @param customerId  The ID of the customer to remove from the group.
   * @param groupId     The ID of the customer group to remove the customer from.
   * @return Response from the API call
   */
  async removeGroupFromCustomer(
    customerId: string,
    groupId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RemoveGroupFromCustomerResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      groupId: [groupId, string()],
    });
    req.appendTemplatePath`/v2/customers/${mapped.customerId}/groups/${mapped.groupId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      removeGroupFromCustomerResponseSchema,
      requestOptions
    );
  }

  /**
   * Adds a group membership to a customer.
   *
   * The customer is identified by the `customer_id` value
   * and the customer group is identified by the `group_id` value.
   *
   * @param customerId  The ID of the customer to add to a group.
   * @param groupId     The ID of the customer group to add the customer to.
   * @return Response from the API call
   */
  async addGroupToCustomer(
    customerId: string,
    groupId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AddGroupToCustomerResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      groupId: [groupId, string()],
    });
    req.appendTemplatePath`/v2/customers/${mapped.customerId}/groups/${mapped.groupId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(addGroupToCustomerResponseSchema, requestOptions);
  }
}
