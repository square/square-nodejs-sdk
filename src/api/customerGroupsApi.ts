import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  CreateCustomerGroupRequest,
  createCustomerGroupRequestSchema,
} from '../models/createCustomerGroupRequest';
import {
  CreateCustomerGroupResponse,
  createCustomerGroupResponseSchema,
} from '../models/createCustomerGroupResponse';
import {
  DeleteCustomerGroupResponse,
  deleteCustomerGroupResponseSchema,
} from '../models/deleteCustomerGroupResponse';
import {
  ListCustomerGroupsResponse,
  listCustomerGroupsResponseSchema,
} from '../models/listCustomerGroupsResponse';
import {
  RetrieveCustomerGroupResponse,
  retrieveCustomerGroupResponseSchema,
} from '../models/retrieveCustomerGroupResponse';
import {
  UpdateCustomerGroupRequest,
  updateCustomerGroupRequestSchema,
} from '../models/updateCustomerGroupRequest';
import {
  UpdateCustomerGroupResponse,
  updateCustomerGroupResponseSchema,
} from '../models/updateCustomerGroupResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class CustomerGroupsApi extends BaseApi {
  /**
   * Retrieves the list of customer groups of a business.
   *
   * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                         retrieve the next set of results for your original query.  See the [Pagination
   *                         guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more
   *                         information.
   * @return Response from the API call
   */
  async listCustomerGroups(
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCustomerGroupsResponse>> {
    const req = this.createRequest('GET', '/v2/customers/groups');
    const mapped = req.prepareArgs({ cursor: [cursor, optional(string())] });
    req.query('cursor', mapped.cursor);
    return req.callAsJson(listCustomerGroupsResponseSchema, requestOptions);
  }

  /**
   * Creates a new customer group for a business.
   *
   * The request must include the `name` value of the group.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createCustomerGroup(
    body: CreateCustomerGroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCustomerGroupResponse>> {
    const req = this.createRequest('POST', '/v2/customers/groups');
    const mapped = req.prepareArgs({
      body: [body, createCustomerGroupRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(createCustomerGroupResponseSchema, requestOptions);
  }

  /**
   * Deletes a customer group as identified by the `group_id` value.
   *
   * @param groupId  The ID of the customer group to delete.
   * @return Response from the API call
   */
  async deleteCustomerGroup(
    groupId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteCustomerGroupResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ groupId: [groupId, string()] });
    req.appendTemplatePath`/v2/customers/groups/${mapped.groupId}`;
    return req.callAsJson(deleteCustomerGroupResponseSchema, requestOptions);
  }

  /**
   * Retrieves a specific customer group as identified by the `group_id` value.
   *
   * @param groupId  The ID of the customer group to retrieve.
   * @return Response from the API call
   */
  async retrieveCustomerGroup(
    groupId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveCustomerGroupResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ groupId: [groupId, string()] });
    req.appendTemplatePath`/v2/customers/groups/${mapped.groupId}`;
    return req.callAsJson(retrieveCustomerGroupResponseSchema, requestOptions);
  }

  /**
   * Updates a customer group as identified by the `group_id` value.
   *
   * @param groupId  The ID of the customer group to update.
   * @param body     An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateCustomerGroup(
    groupId: string,
    body: UpdateCustomerGroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateCustomerGroupResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      groupId: [groupId, string()],
      body: [body, updateCustomerGroupRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v2/customers/groups/${mapped.groupId}`;
    return req.callAsJson(updateCustomerGroupResponseSchema, requestOptions);
  }
}
