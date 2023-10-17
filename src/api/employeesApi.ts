import { ApiResponse, RequestOptions } from '../core';
import {
  ListEmployeesResponse,
  listEmployeesResponseSchema,
} from '../models/listEmployeesResponse';
import {
  RetrieveEmployeeResponse,
  retrieveEmployeeResponseSchema,
} from '../models/retrieveEmployeeResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class EmployeesApi extends BaseApi {
  /**
   * @param locationId
   * @param status      Specifies the EmployeeStatus to filter the employee by.
   * @param limit       The number of employees to be returned on each page.
   * @param cursor      The token required to retrieve the specified page of results.
   * @return Response from the API call
   * @deprecated
   */
  async listEmployees(
    locationId?: string,
    status?: string,
    limit?: number,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListEmployeesResponse>> {
    const req = this.createRequest('GET', '/v2/employees');
    const mapped = req.prepareArgs({
      locationId: [locationId, optional(string())],
      status: [status, optional(string())],
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
    });
    req.query('location_id', mapped.locationId);
    req.query('status', mapped.status);
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.deprecated('EmployeesApi.listEmployees');
    return req.callAsJson(listEmployeesResponseSchema, requestOptions);
  }

  /**
   * @param id UUID for the employee that was requested.
   * @return Response from the API call
   * @deprecated
   */
  async retrieveEmployee(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveEmployeeResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v2/employees/${mapped.id}`;
    req.deprecated('EmployeesApi.retrieveEmployee');
    return req.callAsJson(retrieveEmployeeResponseSchema, requestOptions);
  }
}
